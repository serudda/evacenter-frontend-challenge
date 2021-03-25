/* --- DEPENDENCIES --- */
import { useState } from 'react';
import firebase from 'firebase/app';
import * as Sentry from '@sentry/browser';
import { isLocal } from '@config/config';
import { db } from '@config/firebase/firebaseConfig';
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
  const [error, setError] = useState<string>();

  /*-----------------*/
  /*     METHODS     */
  /*-----------------*/
  const _handleError = (err, location = '') => {
    Sentry.captureException(err);
    isLocal() && console.log(`Error ${location}:`, err);
    setError(err);
  };

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
        if (!createdData.id) _handleError(response, 'useFirebase::create::response.get(): ');
        if (createdData.id) return { data: { id: createdData.id, ...createdData.data() } };
      }

      _handleError(response, 'useFirebase::create::collection.add(): ');
    } catch (err) {
      _handleError(err, 'useFirebase::create::catch(): ');
    } finally {
      setLoading(false);
    }
  };

  const getAll = async (): Promise<Array<firebase.firestore.DocumentData> | undefined> => {
    setLoading(true);

    try {
      const data = await db.collection(collection).orderBy('created_at', 'desc').get();
      if (!data) _handleError(data, 'useFirebase::getAll::try: ');

      return data.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    } catch (err) {
      _handleError(err.message, 'useFirebase::getAll::catch(): ');
    } finally {
      setLoading(false);
    }
  };

  /* RETURN VALUES */
  return { create, getAll, loading, error };
};

export default useFirebase;
