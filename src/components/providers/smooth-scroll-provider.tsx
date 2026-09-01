'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

import Lenis from 'lenis';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { LENIS_OPTIONS } from '@/lib/constants';

/**
 * The live Lenis instance, or `null` when smooth scrolling is off (reduced
 * motion, or before hydration). Overlays read it to pause momentum scrolling.
 */
const SmoothScrollContext = createContext<Lenis | null>(null);

/** Access the active Lenis instance. Returns `null` when native scroll is in use. */
export function useSmoothScroll(): Lenis | null {
  return useContext(SmoothScrollContext);
}

interface SmoothScrollProviderProps {
  readonly children: ReactNode;
}

/**
 * Installs Lenis smooth scrolling for the whole document.
 *
 * The rAF loop is driven manually (`autoRaf: false`) so it can be cancelled
 * cleanly on unmount, and the whole thing is skipped when the visitor prefers
 * reduced motion — in that case the browser's native scrolling is used, which
 * is both the accessible and the cheapest option.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const instance = new Lenis({ ...LENIS_OPTIONS, autoRaf: false });
    setLenis(instance);

    let frameId = window.requestAnimationFrame(function raf(time: number) {
      instance.raf(time);
      frameId = window.requestAnimationFrame(raf);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      instance.destroy();
      setLenis(null);
    };
  }, [prefersReducedMotion]);

  return <SmoothScrollContext.Provider value={lenis}>{children}</SmoothScrollContext.Provider>;
}
