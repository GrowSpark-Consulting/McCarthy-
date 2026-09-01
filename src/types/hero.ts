import type { NavCta } from '@/types/navigation';

/**
 * Accent themes available to the hero. The value is written to `data-accent` on
 * the hero root and resolved to concrete colours in `styles/globals.css`, which
 * is what lets the backdrop cross-fade between slides without inline styles.
 */
export type HeroAccent = 'verde' | 'ember' | 'azure';

/** Background video for the hero, when one is supplied. */
export interface HeroMedia {
  /** Path under `public/`, e.g. `/videos/hero-transformation.mp4`. */
  readonly videoSrc: string;
  /**
   * First-frame image shown while the video loads and instead of it under
   * `prefers-reduced-motion`. Optional: the vector wave artwork covers both
   * cases when no poster is supplied.
   */
  readonly posterSrc?: string;
  /** MIME type; defaults to `video/mp4`. */
  readonly videoType?: string;
}

/** One slide of the hero carousel. */
export interface HeroSlide {
  /** Stable key, also used for `aria-controls` wiring on the slide dots. */
  readonly id: string;
  /** Short label announced to screen readers and shown beside the dots. */
  readonly eyebrow: string;
  /**
   * Headline, pre-split into the lines the design calls for. Splitting here
   * (rather than relying on wrapping) keeps the staggered mask reveal identical
   * at every breakpoint the copy is designed for.
   */
  readonly headline: readonly string[];
  /** Supporting sentence beneath the headline. */
  readonly subhead: string;
  /** Primary call to action for the slide. */
  readonly cta: NavCta;
  /** Colour theme applied to the animated backdrop while this slide is active. */
  readonly accent: HeroAccent;
}
