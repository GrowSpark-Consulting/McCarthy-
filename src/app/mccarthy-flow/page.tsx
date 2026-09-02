import type { Metadata } from 'next';

import { ArrowRight } from 'lucide-react';

import { SiteFooter } from '@/components/layout/site-footer';
import { Connect } from '@/components/sections/connect';
import { ConsultingBlocks } from '@/components/sections/consulting/consulting-blocks';
import { ConsultingCtaBand } from '@/components/sections/consulting/consulting-cta-band';
import { ConsultingEditorial } from '@/components/sections/consulting/consulting-editorial';
import { ConsultingHero } from '@/components/sections/consulting/consulting-hero';
import { ConsultingInsights } from '@/components/sections/consulting/consulting-insights';
import { ConsultingStats } from '@/components/sections/consulting/consulting-stats';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { FlowCaseStudy } from '@/components/sections/flow/flow-case-study';
import { SectionTabs } from '@/components/sections/section-tabs';
import { ButtonLink } from '@/components/ui/button';
import {
  FLOW_CATALOG,
  FLOW_CTA,
  FLOW_FAQ,
  FLOW_FOOTER_GROUPS,
  FLOW_FOOTER_LEGAL,
  FLOW_HERO,
  FLOW_OPERATIONS,
  FLOW_RESOURCES,
  FLOW_RUN,
  FLOW_TABS,
  FLOW_VALUE,
  FLOW_WHAT,
} from '@/content/flow';
import { siteConfig } from '@/lib/site-config';

const PATH = '/mccarthy-flow';
const TITLE = 'McCarthy Flow';
const DESCRIPTION = FLOW_HERO.headline.join(' ');

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
 * McCarthy Flow — the agentic control plane, and the destination the
 * "What we do" mega menu already declares.
 *
 * Section order follows the copy deck: hero → jump navigation → what it is →
 * why it matters → run and transform → the dark operations band → catalog →
 * customer outcomes → resources → FAQ → CTA bar → connect and footer.
 *
 * The operations band is the page's one dark section, exactly as the deck
 * marks it; everything around it stays on the light ground.
 */
export default function McCarthyFlowPage() {
  return (
    <>
      <ConsultingHero content={FLOW_HERO} />
      <SectionTabs tabs={FLOW_TABS} label="McCarthy Flow sections" />

      <ConsultingEditorial
        id="what-is-mccarthy-flow"
        heading={FLOW_WHAT.heading}
        paragraphs={FLOW_WHAT.paragraphs}
      >
        <div className="mt-2">
          <ButtonLink href={FLOW_WHAT.action.href} variant="outline" shape="control" size="compact">
            {FLOW_WHAT.action.label}
            <ArrowRight aria-hidden="true" strokeWidth={1.75} className="size-4" />
          </ButtonLink>
        </div>
      </ConsultingEditorial>

      <ConsultingStats
        id="value"
        label={FLOW_VALUE.heading}
        heading={FLOW_VALUE.heading}
        stats={FLOW_VALUE.stats}
      />

      <ConsultingBlocks
        id="expertise"
        heading={FLOW_RUN.heading}
        blocks={FLOW_RUN.blocks}
        tone="warm"
      />

      <ConsultingBlocks
        heading={FLOW_OPERATIONS.heading}
        blocks={FLOW_OPERATIONS.blocks}
        tone="dark"
      />

      <ConsultingCtaBand
        id="catalog"
        heading={FLOW_CATALOG.heading}
        body={FLOW_CATALOG.body}
        actions={[FLOW_CATALOG.action]}
      />

      <FlowCaseStudy />

      <ConsultingInsights
        id="resources"
        eyebrow={FLOW_RESOURCES.eyebrow}
        heading={FLOW_RESOURCES.heading}
        cards={FLOW_RESOURCES.cards}
      />

      <FaqAccordion
        id="flow-faq"
        heading={FLOW_FAQ.heading}
        items={FLOW_FAQ.items}
        layout="stacked"
      />

      <ConsultingCtaBand heading={FLOW_CTA.heading} actions={FLOW_CTA.actions} />

      <Connect />
      <SiteFooter groups={FLOW_FOOTER_GROUPS} legal={FLOW_FOOTER_LEGAL} />
    </>
  );
}
