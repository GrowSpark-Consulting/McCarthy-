'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { BrandWordmark } from '@/components/shared/brand-wordmark';
import {
  LOADER_MAX_DURATION_MS,
  LOADER_MIN_DURATION_MS,
  LOADER_SESSION_KEY,
} from '@/lib/constants';
import { DURATION, EASE } from '@/lib/motion';

/** Reads session storage defensively — it throws in some privacy modes. */
function hasPlayedThisSession(): boolean {
  try {
    return window.sessionStorage.getItem(LOADER_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

function markPlayedThisSession(): void {
  try {
    window.sessionStorage.setItem(LOADER_SESSION_KEY, '1');
  } catch {
    // Storage unavailable — the loader simply plays again next navigation.
  }
}

/** Resolves once the browser has finished the initial load. */
function documentLoaded(): Promise<void> {
  if (document.readyState === 'complete') {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.addEventListener('load', () => resolve(), { once: true });
  });
}

/**
 * First-paint intro.
 *
 * It waits for web fonts and the `load` event so the hero is never revealed
 * mid-swap, but it is bounded on both sides: it never flashes (minimum dwell)
 * and it can never hold the page hostage to a slow asset (hard ceiling). It
 * plays once per browsing session and not at all when the visitor prefers
 * reduced motion.
 *
 * The hero renders underneath the whole time, so this delays nothing but the
 * reveal itself.
 */
export function AppLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || hasPlayedThisSession()) {
      setIsVisible(false);
      return;
    }

    const startedAt = performance.now();
    let minimumTimer: number | undefined;
    let hasSettled = false;

    const settle = () => {
      if (hasSettled) {
        return;
      }

      hasSettled = true;
      const elapsed = performance.now() - startedAt;

      minimumTimer = window.setTimeout(
        () => {
          markPlayedThisSession();
          setIsVisible(false);
        },
        Math.max(0, LOADER_MIN_DURATION_MS - elapsed),
      );
    };

    const ceilingTimer = window.setTimeout(settle, LOADER_MAX_DURATION_MS);
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

    void Promise.all([fontsReady, documentLoaded()]).then(settle, settle);

    return () => {
      window.clearTimeout(ceilingTimer);

      if (minimumTimer !== undefined) {
        window.clearTimeout(minimumTimer);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="app-loader"
          role="status"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: DURATION.slow, ease: EASE.outExpo } }}
          className="bg-canvas fixed inset-0 z-90 flex flex-col items-center justify-center gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.outExpo }}
          >
            <BrandWordmark size="lg" />
          </motion.div>

          <div className="bg-ink/15 relative h-px w-40 overflow-hidden">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: LOADER_MAX_DURATION_MS / 1000, ease: EASE.outExpo }}
              className="bg-ember absolute inset-0 origin-left"
            />
            <span className="animate-sheen via-ink/25 absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent to-transparent" />
          </div>

          <span className="sr-only">Loading McCarthy</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
