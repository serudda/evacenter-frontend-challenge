import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

export enum Breakpoint {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

const getDeviceConfig = (width: number): Breakpoint => {
  if (width < 640) return Breakpoint.xs;
  if (width >= 640 && width < 768) return Breakpoint.sm;
  if (width >= 768 && width < 1024) return Breakpoint.md;
  if (width >= 1024 && width < 1280) return Breakpoint.lg;
  return Breakpoint.xl;
};

const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState(() => getDeviceConfig(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBreakpoint(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return (): void => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
