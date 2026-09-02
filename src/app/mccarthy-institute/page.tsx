import type { Metadata } from 'next';

import { SiteFooter } from '@/components/layout/site-footer';
import { Connect } from '@/components/sections/connect';
import { ConsultingBlocks } from '@/components/sections/consulting/consulting-blocks';
import { ConsultingEditorial } from '@/components/sections/consulting/consulting-editorial';
import { ConsultingFeature } from '@/components/sections/consulting/consulting-feature';
import { ConsultingHero } from '@/components/sections/consulting/consulting-hero';
import { ConsultingInsights } from '@/components/sections/consulting/consulting-insights';
import { ConsultingPeople } from '@/components/sections/consulting/consulting-people';
import { SectionTabs } from '@/components/sections/section-tabs';
import {
  INSTITUTE_EXPERTS,
  INSTITUTE_FEATURE,
  INSTITUTE_FOOTER_GROUPS,
  INSTITUTE_FOOTER_LEGAL,
  INSTITUTE_HERO,
  INSTITUTE_HOW,
  INSTITUTE_RESOURCES,
  INSTITUTE_TABS,
  INSTITUTE_WHAT,
} from '@/content/institute';
import { siteConfig } from '@/lib/site-config';

const PATH = '/mccarthy-institute';
const TITLE = 'McCarthy Institute';
const DESCRIPTION = INSTITUTE_HERO.headline.join(' ');

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `${TITLE} | ${siteConfig.name}`,
    description: DESCRIPTION,
    url: `${siteConfig.url}${PATH}`,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | ${siteConfig.name}`,
    description: DESCRIPTION,
  },
};

/**
 * McCarthy Institute — the training-led practice, and the destination the
 * "What we do" mega menu already declares.
 *
 * Section order follows the copy deck: hero → jump navigation → what it is →
 * featured resource → how it works → resources → the experts → the shared
 * connect band and footer. Every section is a shared `sections/consulting`
 * component configured with this deck's content.
 */
export default function McCarthyInstitutePage() {
  return (
    <>
      <ConsultingHero content={INSTITUTE_HERO} />
      <SectionTabs tabs={INSTITUTE_TABS} label="McCarthy Institute sections" />

      <ConsultingEditorial
        id="what-is-mccarthy-institute"
        heading={INSTITUTE_WHAT.heading}
        paragraphs={INSTITUTE_WHAT.paragraphs}
      />

      <ConsultingFeature eyebrow={INSTITUTE_FEATURE.eyebrow} card={INSTITUTE_FEATURE.card} />

      <ConsultingBlocks
        id="how-does-it-work"
        heading={INSTITUTE_HOW.heading}
        intro={INSTITUTE_HOW.intro}
        blocks={INSTITUTE_HOW.blocks}
      />

      <ConsultingInsights
        id="resources"
        eyebrow={INSTITUTE_RESOURCES.eyebrow}
        heading={INSTITUTE_RESOURCES.heading}
        cards={INSTITUTE_RESOURCES.cards}
      />

      <ConsultingPeople
        id="meet-the-experts"
        heading={INSTITUTE_EXPERTS.heading}
        people={INSTITUTE_EXPERTS.people}
      />

      <Connect />
      <SiteFooter groups={INSTITUTE_FOOTER_GROUPS} legal={INSTITUTE_FOOTER_LEGAL} />
    </>
  );
}
