/* --- DEPENDENCIES --- */
import { useState } from 'react';
import * as Sentry from '@sentry/browser';
import { isLocal } from '@config/config';
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
  const [error, setError] = useState<string | undefined>();

  /*-----------------*/
  /*     METHODS     */
  /*-----------------*/
  const _handleError = (err, location = ''): void => {
    Sentry.captureException(err);
    isLocal() && console.log(`Error ${location}:`, err);
    setError(err);
  };

  const fetchData = async (): Promise<T | undefined> => {
    setLoading(true);
    setError(undefined);

    try {
      const response = await fetch(url);
      if (!response.ok) _handleError(response.statusText, 'useLazyApi::fetchData::fetch(): ');

      const rawData: any = await response[type]();
      return rawData;
    } catch (err) {
      _handleError(err.message, 'useLazyApi::fetchData::catch(): ');
    } finally {
      setLoading(false);
    }
  };

  const fetchDataWithTimeout = async (timeout = 10000): Promise<T | undefined> => {
    setLoading(true);
    setError(undefined);

    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(id);

      if (!response.ok) _handleError(response.statusText, 'useLazyApi::fetchData::fetch(): ');

      const rawData: any = await response[type]();
      return rawData;
    } catch (err) {
      _handleError(err.message, 'useLazyApi::fetchData::catch(): ');
    } finally {
      setLoading(false);
    }
  };

  /* RETURN VALUES */
  return { fetchData, fetchDataWithTimeout, loading, error };
};

export default useLazyApi;
