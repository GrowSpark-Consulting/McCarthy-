'use client';

import { useCallback, useSyncExternalStore } from 'react';

/**
 * Subscribes to a CSS media query.
 *
 * Implemented with `useSyncExternalStore` so it is tear-free under React 19's
 * concurrent rendering and returns a stable `false` during SSR (no hydration
 * mismatch, no layout flash from a `useEffect`-only implementation).
 *
 * @param query A media query string, e.g. `'(min-width: 64rem)'`.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (typeof window === 'undefined') {
        return () => undefined;
      }

      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener('change', onStoreChange);

      return () => mediaQueryList.removeEventListener('change', onStoreChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia(query).matches;
  }, [query]);

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
