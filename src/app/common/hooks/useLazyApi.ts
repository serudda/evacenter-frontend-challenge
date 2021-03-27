/* --- DEPENDENCIES --- */
import { useState } from 'react';
import useErrorHandler from '@hooks/useErrorHandler';
/* -------------------- */

export enum RequestType {
  blob = 'blob',
  json = 'json',
}

interface UseResponse<T> {
  fetchData: () => Promise<T | undefined>;
  fetchDataWithTimeout: (timeout: number) => Promise<T | undefined>;
  loading: boolean;
  error?: string;
}

const useLazyApi = <T>(url: string, type = RequestType.json): UseResponse<T> => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const [loading, setLoading] = useState<boolean>(false);
  const { handleError, cleanError, error } = useErrorHandler();

  /*-----------------*/
  /*     METHODS     */
  /*-----------------*/
  const fetchData = async (): Promise<T | undefined> => {
    setLoading(true);
    cleanError();

    try {
      const response = await fetch(url);
      if (!response.ok) handleError(response.statusText, 'useLazyApi::fetchData::fetch(): ');

      const rawData: any = await response[type]();
      return rawData;
    } catch (err) {
      handleError(err.message, 'useLazyApi::fetchData::catch(): ');
    } finally {
      setLoading(false);
    }
  };

  const fetchDataWithTimeout = async (timeout = 10000): Promise<T | undefined> => {
    setLoading(true);
    cleanError();

    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(id);

      if (!response.ok) handleError(response.statusText, 'useLazyApi::fetchData::fetch(): ');

      const rawData: any = await response[type]();
      return rawData;
    } catch (err) {
      handleError(err.message, 'useLazyApi::fetchData::catch(): ');
    } finally {
      setLoading(false);
    }
  };

  /* RETURN VALUES */
  return { fetchData, fetchDataWithTimeout, loading, error };
};

export default useLazyApi;
