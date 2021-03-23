/* --- DEPENDENCIES --- */
import { useState } from 'react';
import { isLocal } from '@config/config';
/* -------------------- */

export enum RequestType {
  blob = 'blob',
  json = 'json',
}

interface UseResponse<T> {
  fetchData: () => Promise<T | undefined>;
  loading: boolean;
  error?: string;
}

const useLazyApi = <T>(url: string, type = RequestType.json): UseResponse<T> => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const fetchData = async (): Promise<T | undefined> => {
    setLoading(true);

    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const rawData: any = await response[type]();
        return rawData;
      } else {
        isLocal() && console.log('Error useLazyApi try: ', error);
        setError(response.statusText);
      }
    } catch (error) {
      isLocal() && console.log('Error useLazyApi catch: ', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  /* RETURN VALUES */
  return { fetchData, loading, error };
};

export default useLazyApi;
