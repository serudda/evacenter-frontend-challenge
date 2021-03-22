/* --- DEPENDENCIES --- */
import { useEffect, useState } from 'react';
import { isLocal } from '@config/config';
/* -------------------- */

interface UseResponse<T> {
  data: T | undefined;
  loading: boolean;
  error?: string;
}

const useApi = <T>(url: string): UseResponse<T> => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);

      try {
        const response = await fetch(url);
        if (response.status === 200) {
          const rawData: any = await response.json();
          setData(rawData);
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

    fetchData();
  }, [url]);

  /* RETURN VALUES */
  return { data, loading, error };
};

export default useApi;
