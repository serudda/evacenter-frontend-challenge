/* --- DEPENDENCIES --- */
import { useState } from 'react';
import firebase from 'firebase/app';
import { db } from '@config/firebase/firebaseConfig';
import useErrorHandler from '@hooks/useErrorHandler';
/* -------------------- */

export interface CreateResponse {
  data?: firebase.firestore.DocumentData;
}

interface UseResponse {
  create: (data) => Promise<CreateResponse | undefined>;
  getAll: () => Promise<Array<firebase.firestore.DocumentData> | undefined>;
  loading: boolean;
  error?: string;
}

const useFirebase = (collection: string): UseResponse => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const [loading, setLoading] = useState<boolean>(false);
  const { handleError, error } = useErrorHandler();

  /*-----------------*/
  /*     METHODS     */
  /*-----------------*/
  const create = async (data): Promise<CreateResponse | undefined> => {
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
        if (!createdData.id) handleError(response, 'useFirebase::create::response.get(): ');
        if (createdData.id) return { data: { id: createdData.id, ...createdData.data() } };
      }

      handleError(response, 'useFirebase::create::collection.add(): ');
    } catch (err) {
      handleError(err, 'useFirebase::create::catch(): ');
    } finally {
      setLoading(false);
    }
  };

  const getAll = async (): Promise<Array<firebase.firestore.DocumentData> | undefined> => {
    setLoading(true);

    try {
      const data = await db.collection(collection).orderBy('created_at', 'desc').get();
      if (!data) handleError(data, 'useFirebase::getAll::try: ');

      return data.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    } catch (err) {
      handleError(err.message, 'useFirebase::getAll::catch(): ');
    } finally {
      setLoading(false);
    }
  };

  /* RETURN VALUES */
  return { create, getAll, loading, error };
};

export default useFirebase;
