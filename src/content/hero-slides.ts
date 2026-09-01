import type { HeroMedia, HeroSlide } from '@/types/hero';

/**
 * Hero background footage.
 *
 * One continuous loop behind all three slides, so it never restarts when the
 * copy rotates. Set to `undefined` and the hero falls back to the vector wave
 * artwork with no other change.
 */
export const HERO_BACKGROUND: HeroMedia | undefined = {
  videoSrc: '/videos/hero-ai-office.mp4',
  posterSrc: '/videos/hero-ai-office-poster.jpg',
};

/**
 * Hero carousel content.
 *
 * Copy is taken verbatim from the approved McCarthy homepage copy deck
 * (section 2, "Hero — carousel, 3 slides"). Headlines are pre-split into the
 * lines the layout is designed around.
 */
export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    id: 'transformation',
    eyebrow: 'AI transformation',
    headline: ['AI transformation', 'for the enterprise.'],
    subhead:
      'AI strategy, agents, automation and workforce transformation — engineered around the way your business actually works.',
    cta: {
      label: 'Book an AI Transformation Assessment',
      href: '/ai-audit',
      ariaLabel: 'Book an AI Transformation Assessment with McCarthy',
    },
    accent: 'verde',
  },
  {
    id: 'ai-lab',
    eyebrow: 'The AI Lab',
    headline: ["Don't just read", 'what we build. Use it.'],
    subhead:
      'Interactive demonstrations of the AI systems McCarthy can design and engineer for your business.',
    cta: {
      label: 'Explore the AI Lab',
      href: '/ai-lab',
      ariaLabel: 'Explore the McCarthy AI Lab',
    },
    accent: 'ember',
  },
  {
    id: 'ai-workforce',
    eyebrow: 'AI Workforce',
    headline: ['Your AI transformation', 'starts with your people.'],
    subhead: 'Technology creates the capability. People create the outcome.',
    cta: {
      label: 'Explore AI Workforce',
      href: '/ai-workforce',
      ariaLabel: 'Explore McCarthy AI Workforce',
    },
    accent: 'azure',
  },
] as const;
