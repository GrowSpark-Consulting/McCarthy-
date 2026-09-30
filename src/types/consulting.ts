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

/** One step in a breadcrumb trail. The last step carries no href. */
export interface BreadcrumbStep {
  readonly label: string;
  readonly href?: string;
}

/** The masthead of a consulting page. */
export interface ConsultingHeroContent {
  /** Omitted on pages whose deck sets no trail. */
  readonly breadcrumb?: readonly BreadcrumbStep[];
  readonly eyebrow: string;
  /** Pre-split into the lines the copy deck sets. */
  readonly headline: readonly string[];
  /** Supporting sentence, where the deck sets one. */
  readonly body?: string;
  /** Primary action, where the deck sets one. */
  readonly cta?: LinkRef;
  /** A short line plus a link, e.g. an existing-account prompt. */
  readonly note?: { readonly text: string; readonly link: LinkRef };
  readonly media: HeroMedia;
}

/** One oversized metric in a statistics band. */
export interface ConsultingStat {
  readonly value: string;
  readonly label: string;
  /** Supporting sentence, where the deck sets one. */
  readonly body?: string;
}

/** One person in a profile grid. */
export interface ConsultingPerson {
  readonly name: string;
  readonly title: string;
  /** Organisation or location line beneath the title. */
  readonly meta: string;
}
