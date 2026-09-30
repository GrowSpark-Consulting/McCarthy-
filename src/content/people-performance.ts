import type { LinkRef } from './homepage';
import type { ConsultingBlock, ConsultingCard, ConsultingHeroContent } from '@/types/consulting';

/**
 * People and Performance page content.
 *
 * Every string is transcribed from `mccarthy-people-and-performance-copy.md`.
 * Where that deck carries a bracketed placeholder the bracket is preserved
 * exactly — nothing is invented to fill a gap, so an unfinished slot stays
 * visibly unfinished rather than shipping as plausible-looking marketing copy.
 *
 * Two bands the page's jump navigation promises — "How does it work?" and
 * "Who we help" — have no copy in the deck at all. They ship with their layout
 * finished and their words bracketed, the same way the sibling consulting
 * pages handle their unwritten bands.
 *
 * Hrefs are the one thing the deck does not supply. Each points at the closest
 * route the site already declares (see `lib/navigation.ts`); swap them here
 * when the real URLs exist.
 */

/** The page's jump navigation, reusing the site's floating tab pill. */
export const PEOPLE_TABS: readonly LinkRef[] = [
  { label: 'What is it?', href: '#what-is-it' },
  { label: 'How does it work?', href: '#how-does-it-work' },
  { label: 'Who we help', href: '#who-we-help' },
  { label: 'Insights', href: '#insights' },
  { label: 'Talk to an expert', href: '#connect' },
];

export const PEOPLE_HERO: ConsultingHeroContent = {
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Consulting' }],
  eyebrow: 'People and performance',
  /** Set as three lines in the deck; the break is intentional. */
  headline: ['Shaping workforces', 'that outpace', 'change'],
  body: "Evolve culture, grow future skills, and realize AI's full value.",
  /** The project's own AI-office loop — real people, which is this page's subject. */
  media: {
    videoSrc: '/videos/hero-ai-office.mp4',
    posterSrc: '/videos/hero-ai-office-poster.jpg',
  },
};

/** Frames from the project's footage, reused as card artwork. */
export const PEOPLE_STILLS = {
  office: '/videos/hero-ai-office-poster.jpg',
} as const;

export const PEOPLE_INTRO = {
  heading: "What's holding back your transformation — technology or people?",
  lead: 'Transformation efforts stall not from technology gaps but from organizational inertia. Fear, rigid processes, and talent shortfalls slow adoption and erode value.',
  paragraphs: [
    'McCarthy helps enterprises overcome these barriers by building adaptive workforces and resilient cultures that evolve with AI. We bring a unified approach to change management, business process redesign, workforce transformation, delivery and value realization — including hands-on AI training for staff and teams, so capability builds alongside the technology itself. We equip leaders to foster a culture of trust and help them align strategy, continuous skill building, and execution to realize measurable value and sustained business performance.',
  ],
} as const;

/**
 * How does it work?
 *
 * The deck titles no section here, so the jump-navigation label stands in —
 * the same choice the Cybersecurity page makes for its own unnamed band. The
 * five block headings are the five disciplines the intro paragraph names, in
 * the order it names them: the page's own words, re-used rather than invented.
 * Their descriptions are not in the deck, so they stay bracketed.
 */
export const PEOPLE_APPROACH = {
  heading: 'How does it work?',
  blocks: [
    {
      heading: 'Change management',
      paragraphs: ['[Describe how McCarthy leads change through an AI transformation.]'],
    },
    {
      heading: 'Business process redesign',
      paragraphs: ['[Describe how processes are rebuilt around people and AI together.]'],
    },
    {
      heading: 'Workforce transformation',
      paragraphs: ['[Describe how roles, skills and operating models are reshaped.]'],
    },
    {
      heading: 'Hands-on AI training',
      paragraphs: ['[Describe the training McCarthy runs for staff and teams.]'],
    },
    {
      heading: 'Delivery and value realization',
      paragraphs: ['[Describe how value is measured and sustained after adoption.]'],
    },
  ] as readonly ConsultingBlock[],
} as const;

/**
 * Who we help.
 *
 * No copy exists for this band. The structure ships ready and every word stays
 * bracketed — writing three audiences would mean inventing them.
 */
export const PEOPLE_AUDIENCE = {
  heading: 'Who we help',
  intro: '[One or two lines on the leaders and organizations this work is for.]',
  blocks: [
    {
      heading: '[Audience 1 — heading]',
      paragraphs: ['[What they are trying to change, and why.]'],
    },
    {
      heading: '[Audience 2 — heading]',
      paragraphs: ['[What they are trying to change, and why.]'],
    },
    {
      heading: '[Audience 3 — heading]',
      paragraphs: ['[What they are trying to change, and why.]'],
    },
  ] as readonly ConsultingBlock[],
} as const;

export const PEOPLE_INSIGHTS = {
  eyebrow: 'Trends and insights',
  heading: 'Align people, processes and technology to drive lasting transformation',
  cards: [
    {
      title: 'McCarthy report: Why most businesses are not yet winning with AI',
      body: "McCarthy's first People Readiness Report reveals a striking gap between AI investment and workforce preparedness.",
      link: { label: 'Read more', href: '/insights' },
      image: PEOPLE_STILLS.office,
    },
    {
      title: "AI's real challenge? Human behavior",
      body: 'Successful AI adoption depends not on the technology itself, but on how deeply it considers and integrates with human systems and behaviors.',
      link: { label: 'Read more', href: '/insights' },
      accent: 'azure',
    },
    {
      title: 'When machines join the team',
      body: 'AI is shifting from being a background tool to becoming something more consequential: a digital colleague.',
      link: { label: 'Read more', href: '/insights' },
      accent: 'ember',
    },
  ] as readonly ConsultingCard[],
} as const;
