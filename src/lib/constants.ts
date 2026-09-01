/**
 * Behavioural constants.
 *
 * Anything a reviewer might otherwise read as a magic number lives here with an
 * explanation of why that value was chosen.
 */

/** Hero carousel dwell time per slide (ms). Long enough to read a headline, subhead and CTA. */
export const HERO_AUTOPLAY_DELAY_MS = 7000;

/** Scroll distance after which the header swaps from transparent to glass (px). */
export const HEADER_SOLID_THRESHOLD_PX = 12;

/** Scroll distance after which the header may auto-hide on downward scroll (px). */
export const HEADER_HIDE_THRESHOLD_PX = 220;

/** Ignore scroll jitter below this delta when deciding to hide/show the header (px). */
export const HEADER_DIRECTION_TOLERANCE_PX = 6;

/** Maximum pointer-parallax displacement applied to hero art layers (px). */
export const HERO_PARALLAX_STRENGTH_PX = 26;

/** How long the intro loader stays up at minimum, so it never flashes (ms). */
export const LOADER_MIN_DURATION_MS = 420;

/** Hard ceiling for the intro loader, so a slow font never blocks the hero (ms). */
export const LOADER_MAX_DURATION_MS = 1800;

/** Session key used to show the intro loader only on the first visit of a session. */
export const LOADER_SESSION_KEY = 'mccarthy:intro-played';

/**
 * Lenis tuning. `lerp` (not `duration`) gives the weighty, slightly damped feel
 * of the reference; native inertia is left alone on touch devices.
 */
export const LENIS_OPTIONS = {
  lerp: 0.1,
  smoothWheel: true,
  syncTouch: false,
  wheelMultiplier: 1,
  touchMultiplier: 1.6,
} as const;
