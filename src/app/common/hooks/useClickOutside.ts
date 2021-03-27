// Dependencies
import { useCallback, useEffect } from 'react';

const useOnClickOutside = (ref: React.MutableRefObject<any>, handler: (event) => void): void => {
  const listener = useCallback(
    (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    },
    [ref, handler],
  );

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return (): void => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, []);
};

export default useOnClickOutside;
