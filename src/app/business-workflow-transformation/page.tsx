import type { Metadata } from 'next';

import { SiteFooter } from '@/components/layout/site-footer';
import { WorkflowApproach } from '@/components/sections/business-workflow/workflow-approach';
import { WorkflowIntro } from '@/components/sections/business-workflow/workflow-intro';
import { WorkflowPillars } from '@/components/sections/business-workflow/workflow-pillars';
import { Connect } from '@/components/sections/connect';
import { ConsultingCapabilities } from '@/components/sections/consulting/consulting-capabilities';
import { ConsultingHero } from '@/components/sections/consulting/consulting-hero';
import { ConsultingInsights } from '@/components/sections/consulting/consulting-insights';
import { ConsultingJourney } from '@/components/sections/consulting/consulting-journey';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { SectionTabs } from '@/components/sections/section-tabs';
import {
  WORKFLOW_CAPABILITIES,
  WORKFLOW_FAQ,
  WORKFLOW_HERO,
  WORKFLOW_INSIGHTS,
  WORKFLOW_JOURNEY,
  WORKFLOW_TABS,
} from '@/content/business-workflow';
import { siteConfig } from '@/lib/site-config';

const PATH = '/business-workflow-transformation';
const DESCRIPTION = WORKFLOW_HERO.body;
const TITLE = 'Business workflow transformation';

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
 * Business Workflow Transformation — the destination already declared by the
 * "What we do" mega menu.
 *
 * Section order follows the copy deck: hero → jump navigation → overview →
 * value propositions → how McCarthy helps → trends and insights → journey
 * cards → related capabilities → FAQ → the shared connect band and footer.
 *
 * Hero, insights, journey and capabilities are the shared `sections/consulting`
 * components, so this page and Cybersecurity render from one implementation.
 * The connect band, footer, jump pill and FAQ accordion are the site's own.
 */
export default function BusinessWorkflowTransformationPage() {
  return (
    <>
      <ConsultingHero content={WORKFLOW_HERO} />
      <SectionTabs tabs={WORKFLOW_TABS} label="Business workflow transformation sections" />
      <WorkflowIntro />
      <WorkflowPillars />
      <WorkflowApproach />
      <ConsultingInsights
        eyebrow={WORKFLOW_INSIGHTS.eyebrow}
        heading={WORKFLOW_INSIGHTS.heading}
        cards={WORKFLOW_INSIGHTS.cards}
      />
      <ConsultingJourney heading={WORKFLOW_JOURNEY.heading} cards={WORKFLOW_JOURNEY.cards} />
      <ConsultingCapabilities
        heading={WORKFLOW_CAPABILITIES.heading}
        cards={WORKFLOW_CAPABILITIES.cards}
      />
      <FaqAccordion
        id="workflow-faq"
        heading={WORKFLOW_FAQ.heading}
        items={WORKFLOW_FAQ.items}
        layout="stacked"
      />
      <Connect />
      <SiteFooter />
    </>
  );
}
