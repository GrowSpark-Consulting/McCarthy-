'use client';

import { useEffect, useRef, useState } from 'react';

import {
  HEADER_DIRECTION_TOLERANCE_PX,
  HEADER_HIDE_THRESHOLD_PX,
  HEADER_SOLID_THRESHOLD_PX,
} from '@/lib/constants';

export interface HeaderScrollState {
  /** The page has left the very top — the header takes on its glass surface. */
  readonly isScrolled: boolean;
  /** The visitor is scrolling down, far enough in — the header slides away. */
  readonly isHidden: boolean;
}

const INITIAL_STATE: HeaderScrollState = { isScrolled: false, isHidden: false };

/**
 * Tracks scroll offset and direction for the sticky header.
 *
 * Reads are batched into a single `requestAnimationFrame` callback and the
 * listener is passive, so scrolling never blocks the compositor. State is only
 * committed when a boolean actually flips, which keeps React out of the scroll
 * hot path entirely.
 */
export function useHeaderScrollState(): HeaderScrollState {
  const [state, setState] = useState<HeaderScrollState>(INITIAL_STATE);
  const lastOffsetRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const readScrollPosition = () => {
      frameRef.current = null;

      const offset = window.scrollY;
      const delta = offset - lastOffsetRef.current;

      if (Math.abs(delta) < HEADER_DIRECTION_TOLERANCE_PX) {
        return;
      }

      const isScrolled = offset > HEADER_SOLID_THRESHOLD_PX;
      const isHidden = delta > 0 && offset > HEADER_HIDE_THRESHOLD_PX;

      lastOffsetRef.current = offset;

      setState((previous) =>
        previous.isScrolled === isScrolled && previous.isHidden === isHidden
          ? previous
          : { isScrolled, isHidden },
      );
    };

    const handleScroll = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(readScrollPosition);
    };

    // Cover restored scroll positions (back/forward navigation).
    lastOffsetRef.current = window.scrollY;
    setState({
      isScrolled: window.scrollY > HEADER_SOLID_THRESHOLD_PX,
      isHidden: false,
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return state;
}
