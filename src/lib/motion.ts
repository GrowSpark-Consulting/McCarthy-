import type { Transition, Variants } from 'framer-motion';

/**
 * Motion tokens.
 *
 * These mirror the `--duration-*` / `--ease-*` custom properties in
 * `styles/globals.css`; CSS-only animations read the custom properties and
 * JavaScript animations read the constants below, so the two systems stay in
 * step and no component invents its own timing.
 */

/** Seconds — Framer Motion's unit. */
export const DURATION = {
  fast: 0.18,
  base: 0.32,
  slow: 0.62,
  reveal: 0.9,
} as const;

/** Cubic-bézier control points shared with the stylesheet. */
export const EASE = {
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  outQuint: [0.22, 1, 0.36, 1] as [number, number, number, number],
  inOutSoft: [0.65, 0, 0.35, 1] as [number, number, number, number],
} as const;

/** Default transition for entrance animations. */
export const revealTransition: Transition = {
  duration: DURATION.reveal,
  ease: EASE.outExpo,
};

/** Default transition for interactive state changes (hover, open/close). */
export const interactionTransition: Transition = {
  duration: DURATION.base,
  ease: EASE.outQuint,
};

/**
 * Builds a container variant that staggers its children.
 *
 * @param stagger Delay between each child, in seconds.
 * @param delayChildren Delay before the first child starts, in seconds.
 */
export function staggerContainer(stagger: number, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
    exit: {
      transition: { staggerChildren: stagger / 2, staggerDirection: -1 },
    },
  };
}

/** Fade + rise. The workhorse entrance for body copy and controls. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
  exit: { opacity: 0, y: -16, transition: { duration: DURATION.base, ease: EASE.outQuint } },
};

/** Fade only — for layers where movement would fight a parallax transform. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.slow, ease: EASE.outExpo } },
  exit: { opacity: 0, transition: { duration: DURATION.base, ease: EASE.outQuint } },
};

/**
 * Headline line reveal. The child slides up from beneath a clipping wrapper,
 * which is what produces the "type wipes into place" effect of the reference.
 */
export const maskedLine: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: DURATION.reveal, ease: EASE.outExpo },
  },
  exit: {
    y: '-110%',
    opacity: 0,
    transition: { duration: DURATION.slow, ease: EASE.outQuint },
  },
};

/** Scale-in used by overlays and the loading mark. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: interactionTransition },
  exit: { opacity: 0, scale: 0.98, transition: { duration: DURATION.fast, ease: EASE.outQuint } },
};

/**
 * Returns variants unchanged, or a motionless equivalent when the user asks for
 * reduced motion. Keeps `prefers-reduced-motion` handling in one place instead
 * of scattering conditionals through components.
 */
export function respectMotionPreference(variants: Variants, prefersReduced: boolean): Variants {
  if (!prefersReduced) {
    return variants;
  }

  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: DURATION.fast } },
    exit: { opacity: 0, transition: { duration: DURATION.fast } },
  };
}
