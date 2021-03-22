/* --- DEPENDENCIES --- */
import { useState } from 'react';
import { isLocal } from '@config/config';
/* -------------------- */

interface UseResponse<T> {
  fetchData: () => Promise<T | undefined>;
  loading: boolean;
  error?: string;
}

const useLazyApi = <T>(url: string): UseResponse<T> => {
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
        const rawData: any = await response.json();
        return rawData;
      } else {
        isLocal() && console.log('Error useApi try: ', error);
        setError(response.statusText);
      }
    } catch (error) {
      isLocal() && console.log('Error useApi catch: ', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  /* RETURN VALUES */
  return { fetchData, loading, error };
};

export default useLazyApi;
