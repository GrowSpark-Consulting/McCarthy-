'use client';

import { useMediaQuery } from '@/hooks/use-media-query';

/** The OS-level "reduce motion" setting, as a media query. */
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * `true` when the visitor has asked their operating system to reduce motion.
 *
 * Every animated component reads this and degrades to an opacity-only (or fully
 * static) presentation. The stylesheet enforces the same rule for CSS-only
 * keyframes, so the two paths cannot drift apart.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery(REDUCED_MOTION_QUERY);
}
