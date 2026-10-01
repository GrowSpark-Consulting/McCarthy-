import { siteConfig } from '@/lib/site-config';

import type { LinkRef } from './homepage';

/**
 * Careers page content.
 *
 * A deliberately minimal first version that follows the Kyndryl careers
 * reference's structure: breadcrumb → split hero with a slanted photo →
 * floating section pill → three editorial columns → oversized outlined
 * headline over four career-area cards → life at McCarthy → opportunities →
 * closing CTA. The reference guides composition only; every word is
 * McCarthy's own. Job listings, benefits and the application flow are later
 * additions, not gaps to fill with placeholders here.
 *
 * Every photo is one the site already ships, chosen because it shows people
 * at work rather than a product or a dashboard.
 */

export interface CareersImage {
  readonly src: string;
  readonly alt: string;
}

export interface CareersColumn {
  readonly eyebrow: string;
  readonly heading: string;
  readonly link: LinkRef;
}

export interface CareersArea {
  readonly title: string;
  readonly body: string;
  readonly image: CareersImage;
}

/** Section anchors, shared by the sections, the pill nav and every jump link. */
export const CAREERS_ANCHORS = {
  overview: 'careers-overview',
  team: 'join-our-team',
  life: 'life-at-mccarthy',
  opportunities: 'open-opportunities',
} as const;

/**
 * Where open roles live. No job board exists yet, so this points at the
 * company's LinkedIn jobs tab — the one confirmed channel. Swap this single
 * value once a dedicated listing exists and every CTA on the page follows.
 */
export const CAREERS_OPENINGS: LinkRef = {
  label: 'View Open Positions',
  href: `${siteConfig.social.linkedin}/jobs/`,
};

export const CAREERS_BREADCRUMB: readonly { label: string; href?: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Careers' },
];

export const CAREERS_HERO = {
  eyebrow: 'Careers',
  heading: 'Build What’s Next With Us',
  /** Not shown in the hero (the reference carries none) — used as the page description. */
  description:
    'Join a growing team of people building meaningful digital solutions for businesses around the world.',
  primary: { label: 'View Opportunities', href: `#${CAREERS_ANCHORS.opportunities}` },
  secondary: { label: 'Meet Our Team', href: `#${CAREERS_ANCHORS.life}` },
  image: {
    src: '/img/Small%20team.%20Real%20ownership.png',
    alt: 'A small McCarthy team planning together around a table',
  } satisfies CareersImage,
} as const;

/** The floating pill under the hero — one item per anchored section. */
export const CAREERS_TABS: readonly LinkRef[] = [
  { label: 'Careers', href: `#${CAREERS_ANCHORS.overview}` },
  { label: 'Join Our Team', href: `#${CAREERS_ANCHORS.team}` },
  { label: 'Life at Our Company', href: `#${CAREERS_ANCHORS.life}` },
  { label: 'Opportunities', href: `#${CAREERS_ANCHORS.opportunities}` },
];

export const CAREERS_COLUMNS: readonly CareersColumn[] = [
  {
    eyebrow: 'Career opportunities',
    heading: 'Explore opportunities to grow your career with our team.',
    link: { label: 'Learn more', href: `#${CAREERS_ANCHORS.team}` },
  },
  {
    eyebrow: 'Early careers',
    heading: 'Start your career by working on meaningful digital solutions.',
    link: { label: 'Find out more', href: `#${CAREERS_ANCHORS.opportunities}` },
  },
  {
    eyebrow: 'Life at McCarthy',
    heading: 'Discover a culture built around collaboration, learning and shared success.',
    link: { label: 'Learn more', href: `#${CAREERS_ANCHORS.life}` },
  },
];

export const CAREERS_AREAS = {
  /** Set as two lines on phones, one line from `sm`. */
  heading: ['Join our', 'growing team'],
  areas: [
    {
      title: 'Technology',
      body: 'Build the AI platforms, agents and data foundations our clients run their businesses on.',
      image: {
        src: '/img/03.png',
        alt: 'An engineer reviewing AI system dashboards across several screens',
      },
    },
    {
      title: 'Consulting',
      body: 'Help leaders find where AI creates real value — and turn it into a plan they can act on.',
      image: {
        src: '/img/04.png',
        alt: 'A consultant presenting an AI adoption roadmap to a client team',
      },
    },
    {
      title: 'Engineering',
      body: 'Design, ship and scale the systems that put AI to work inside real operations.',
      image: {
        src: '/img/agentic03.png',
        alt: 'Two engineers in hard hats reviewing data on a tablet beside factory robotics',
      },
    },
    {
      title: 'Business & Operations',
      body: 'Keep a growing company running well, from delivery and finance to people and partnerships.',
      image: {
        src: '/img/Accelerating%20operational.png',
        alt: 'An operations lead monitoring live data on screens overlooking a harbour',
      },
    },
  ] satisfies readonly CareersArea[],
} as const;

export const CAREERS_LIFE = {
  eyebrow: 'Life at McCarthy',
  heading: 'Work With People Who Build Together',
  body: 'We’re a small team, so every voice shapes the work. Strategists, engineers and designers sit at the same table — trading ideas, owning outcomes and learning from each other every day.',
  locationsLabel: 'Where we work',
  location: 'Singapore',
  image: {
    src: '/img/01.png',
    alt: 'A McCarthy team working through plans together around a table by the office window',
  } satisfies CareersImage,
} as const;

export const CAREERS_OPPORTUNITIES = {
  eyebrow: 'Open roles',
  heading: 'Explore Opportunities',
  body: 'We’re looking for curious, driven people who want to build meaningful digital solutions and grow with us.',
} as const;

export const CAREERS_JOIN = {
  heading: 'Join Our Growing Team',
  body: 'Be part of a team building the next generation of digital solutions.',
  cta: { label: 'Explore Careers', href: CAREERS_OPENINGS.href } satisfies LinkRef,
  image: {
    src: '/img/Singapore%20is%20one%20of%20the%20fastest-growing%20AI%20adoption.png',
  },
} as const;
