/* --- DEPENDENCIES --- */
import { useState } from 'react';
import * as Sentry from '@sentry/browser';
import { isLocal } from '@config/config';
/* -------------------- */

interface UseResponse {
  handleError: (err: any, loaction: string) => void;
  cleanError: () => void;
  error?: string;
}

const useErrorHandler = (): UseResponse => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const [error, setError] = useState<string>();

  const parseErrorMessage = (err: string) => {
    switch (err) {
      case 'Failed to fetch':
        return 'Something happened. Try again, please!';
      case 'The user aborted a request.':
        return 'The camera is working slow. Try again, please!';
      default:
        return 'Something happened. Try again, please!';
    }
  };

  const cleanError = (): void => setError(undefined);

  const handleError = (err, location = ''): void => {
    Sentry.captureException(err);
    isLocal() && console.log(`Error ${location}:`, err);
    console.log('Err: ', err);
    setError(parseErrorMessage(err));
  };

  /* RETURN VALUES */
  return { handleError, cleanError, error };
};

export default useErrorHandler;
