/* --- DEPENDENCIES --- */
import firebase from 'firebase/app';
import { useState } from 'react';
import { isLocal } from '@config/config';
import { db } from '@config/firebase/firebaseConfig';
/* -------------------- */

export enum Status {
  ok = 'OK',
  error = 'ERROR',
}

export interface CreateResponse {
  data?: firebase.firestore.DocumentData;
  status: Status;
}

interface UseResponse {
  create: (data) => Promise<CreateResponse>;
  getAll: () => Promise<Array<firebase.firestore.DocumentData>>;
  loading: boolean;
  error?: string;
}

const useFirebase = (collection: string): UseResponse => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const [loading, setLoading] = useState<boolean>(false);

  /*-----------------*/
  /*     METHODS     */
  /*-----------------*/
  const _handleError = (error, location = ''): CreateResponse => {
    isLocal() && console.log(`Error ${location}:`, error);
    return { status: Status.error };
  };

  const create = async (data): Promise<CreateResponse> => {
    setLoading(true);

    try {
      const dataSet = Object.assign(
        {
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
        },
        data,
      );
      const response = await db.collection(collection).add(dataSet);
      if (response.id) {
        const createdData = await response.get();
        if (createdData.id) return { status: Status.ok, data: { id: createdData.id, ...createdData.data() } };
        return _handleError(response, 'useFirebase::create::response.get(): ');
      }

      return _handleError(response, 'useFirebase::create::collection.add(): ');
    } catch (error) {
      return _handleError(error, 'useFirebase::create::catch(): ');
    } finally {
      setLoading(false);
    }
  };

  const getAll = async (): Promise<Array<firebase.firestore.DocumentData>> => {
    setLoading(true);
    const data = await db.collection(collection).orderBy('created_at', 'desc').get();
    setLoading(false);
    return data.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  };

  /* RETURN VALUES */
  return { create, getAll, loading };
};

export default useFirebase;
