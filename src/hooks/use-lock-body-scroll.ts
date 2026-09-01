'use client';

import { useEffect } from 'react';

import { useSmoothScroll } from '@/components/providers/smooth-scroll-provider';

/**
 * Freezes page scrolling while an overlay is open.
 *
 * Compensates for the disappearing scrollbar so the layout behind the overlay
 * does not shift, and pauses the Lenis loop so momentum scrolling cannot leak
 * through a fixed overlay on trackpads.
 *
 * @param locked Whether scrolling should currently be locked.
 */
export function useLockBodyScroll(locked: boolean): void {
  const lenis = useSmoothScroll();

  useEffect(() => {
    if (!locked) {
      return;
    }

    const { body, documentElement } = document;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;

    body.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    lenis?.stop();

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      lenis?.start();
    };
  }, [locked, lenis]);
}
