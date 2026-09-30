import type { Metadata } from 'next';

import { SiteFooter } from '@/components/layout/site-footer';
import { ConsultingCapabilities } from '@/components/sections/consulting/consulting-capabilities';
import { ConsultingHero } from '@/components/sections/consulting/consulting-hero';
import { ConsultingInsights } from '@/components/sections/consulting/consulting-insights';
import { ConsultingJourney } from '@/components/sections/consulting/consulting-journey';
import { Connect } from '@/components/sections/connect';
import { CyberApproach } from '@/components/sections/cybersecurity/cyber-approach';
import { CyberOverview } from '@/components/sections/cybersecurity/cyber-overview';
import { SectionTabs } from '@/components/sections/section-tabs';
import {
  CYBER_CAPABILITIES,
  CYBER_FOOTER_GROUPS,
  CYBER_FOOTER_LEGAL,
  CYBER_HERO,
  CYBER_INSIGHTS,
  CYBER_JOURNEY,
  CYBER_TABS,
} from '@/content/cybersecurity';
import { siteConfig } from '@/lib/site-config';

const PATH = '/cybersecurity';
const TITLE = 'Cybersecurity';
const DESCRIPTION = CYBER_HERO.body;

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
 * Cybersecurity — the destination already declared by the "What we do" mega
 * menu.
 *
 * Section order follows the copy deck: hero → jump navigation → overview →
 * how McCarthy helps → trends and insights → transformation journey → related
 * capabilities → the shared connect band and footer.
 *
 * Hero, insights, journey and capabilities are the shared `sections/consulting`
 * components, so this page and Business Workflow Transformation render from one
 * implementation. The footer takes this deck's own groups and legal row.
 */
export default function CybersecurityPage() {
  return (
    <>
      <ConsultingHero content={CYBER_HERO} />
      <SectionTabs tabs={CYBER_TABS} label="Cybersecurity sections" />
      <CyberOverview />
      <CyberApproach />
      <ConsultingInsights
        eyebrow={CYBER_INSIGHTS.eyebrow}
        heading={CYBER_INSIGHTS.heading}
        cards={CYBER_INSIGHTS.cards}
      />
      <ConsultingJourney heading={CYBER_JOURNEY.heading} cards={CYBER_JOURNEY.cards} />
      <ConsultingCapabilities
        heading={CYBER_CAPABILITIES.heading}
        cards={CYBER_CAPABILITIES.cards}
      />
      <Connect />
      <SiteFooter groups={CYBER_FOOTER_GROUPS} legal={CYBER_FOOTER_LEGAL} />
    </>
  );
}
