import type { Metadata } from 'next';

import { ArrowRight } from 'lucide-react';

import { SiteFooter } from '@/components/layout/site-footer';
import { Connect } from '@/components/sections/connect';
import { ConsultingBlocks } from '@/components/sections/consulting/consulting-blocks';
import { ConsultingCtaBand } from '@/components/sections/consulting/consulting-cta-band';
import { ConsultingDelivery } from '@/components/sections/consulting/consulting-delivery';
import { ConsultingHero } from '@/components/sections/consulting/consulting-hero';
import { ConsultingLocations } from '@/components/sections/consulting/consulting-locations';
import { ConsultingPeople } from '@/components/sections/consulting/consulting-people';
import { ConsultingStats } from '@/components/sections/consulting/consulting-stats';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { LabsInnovation } from '@/components/sections/labs/labs-innovation';
import { SectionTabs } from '@/components/sections/section-tabs';
import { ButtonLink } from '@/components/ui/button';
import {
  LABS_CTA,
  LABS_DELIVERY,
  LABS_EXPERTISE,
  LABS_FAQ,
  LABS_FOOTER_GROUPS,
  LABS_FOOTER_LEGAL,
  LABS_HERO,
  LABS_LOCATIONS,
  LABS_PEOPLE,
  LABS_STATS,
  LABS_TABS,
} from '@/content/labs';
import { siteConfig } from '@/lib/site-config';

const PATH = '/ai-lab';
const TITLE = 'McCarthy Labs';
const DESCRIPTION = LABS_HERO.headline.join(' ');

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
 * McCarthy Labs — the India build, delivery and R&D hub.
 *
 * Served at `/ai-lab`, which is the route the hero slide CTA, the homepage AI
 * Lab band and the "What we do" mega menu have always pointed at. Until this
 * page existed every one of those links fell through to the 404 boundary.
 * `/mccarthy-labs` redirects here (see `next.config.ts`).
 *
 * Section order follows the copy deck: hero → jump navigation → stats →
 * empowering innovation → our people → the expertise grid → how we deliver →
 * where to find us → the corporate citizenship band → FAQ → connect and
 * footer.
 *
 * The deck sets no breadcrumb for this page, so the hero renders none.
 */
export default function McCarthyLabsPage() {
  return (
    <>
      <ConsultingHero content={LABS_HERO} />
      <SectionTabs tabs={LABS_TABS} label="McCarthy Labs sections" />

      <ConsultingStats label="McCarthy Labs by the numbers" stats={LABS_STATS} />

      <LabsInnovation />

      <ConsultingBlocks
        id="our-people"
        heading={LABS_PEOPLE.heading}
        intro={LABS_PEOPLE.intro}
        blocks={LABS_PEOPLE.blocks}
        tone="warm"
      />

      <ConsultingPeople
        heading={LABS_EXPERTISE.heading}
        people={LABS_EXPERTISE.people}
        columns={4}
        action={
          <ButtonLink
            href={LABS_EXPERTISE.action.href}
            variant="outline"
            shape="control"
            size="compact"
          >
            {LABS_EXPERTISE.action.label}
            <ArrowRight aria-hidden="true" strokeWidth={1.75} className="size-4" />
          </ButtonLink>
        }
      />

      <ConsultingDelivery
        id="how-we-deliver"
        heading={LABS_DELIVERY.heading}
        subheading={LABS_DELIVERY.subheading}
        models={LABS_DELIVERY.models}
      />

      <ConsultingLocations
        id="where-to-find-us"
        heading={LABS_LOCATIONS.heading}
        body={LABS_LOCATIONS.body}
        locations={LABS_LOCATIONS.locations}
      />

      <ConsultingCtaBand
        id="corporate-citizenship"
        heading={LABS_CTA.heading}
        actions={LABS_CTA.actions}
      />

      <FaqAccordion
        id="labs-faq"
        heading={LABS_FAQ.heading}
        items={LABS_FAQ.items}
        layout="stacked"
      />

      <Connect />
      <SiteFooter groups={LABS_FOOTER_GROUPS} legal={LABS_FOOTER_LEGAL} />
    </>
  );
}
