import type { LinkRef } from '@/content/homepage';
import type { HeroAccent, HeroMedia } from '@/types/hero';

/**
 * Shapes shared by the consulting pages (Business Workflow Transformation,
 * Cybersecurity, and the ones that follow). Each page supplies its own copy
 * deck; the components under `sections/consulting` render any of them.
 */

/** One image-led card: an insight, a journey step, a capability. */
export interface ConsultingCard {
  readonly title: string;
  readonly body: string;
  readonly link: LinkRef;
  /**
   * A frame from the project's own footage. When absent the slot falls back to
   * the hero's vector artwork, tinted by `accent`.
   */
  readonly image?: string;
  readonly accent?: HeroAccent;
}

/** A titled block of running copy, optionally tagged. */
export interface ConsultingBlock {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly tag?: string;
}

/** The masthead of a consulting page. */
export interface ConsultingHeroContent {
  readonly breadcrumb: { readonly home: LinkRef; readonly current: string };
  readonly eyebrow: string;
  /** Pre-split into the lines the copy deck sets. */
  readonly headline: readonly string[];
  readonly body: string;
  readonly media: HeroMedia;
}
