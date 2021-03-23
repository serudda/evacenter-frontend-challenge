/* --- DEPENDENCIES --- */
import firebase from 'firebase/app';
import { useState } from 'react';
import { isLocal } from '@config/config';
import { db } from '@config/firebase/firebaseConfig';
/* -------------------- */

export enum CreateResponse {
  ok = 'OK',
  error = 'ERROR',
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
      if (response.id) return CreateResponse.ok;
      isLocal() && console.log('Error useFirebase try: ', response);
      return CreateResponse.error;
    } catch (error) {
      isLocal() && console.log('Error useFirebase catch: ', error);
      return CreateResponse.error;
    } finally {
      setLoading(false);
    }
  };

  const getAll = async (): Promise<Array<firebase.firestore.DocumentData>> => {
    setLoading(true);
    const data = await db.collection(collection).get();
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
