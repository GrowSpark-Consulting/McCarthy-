import type { Metadata } from 'next';

import { Connect } from '@/components/sections/connect';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { Partners } from '@/components/sections/partners';
import { WhatWeDo } from '@/components/sections/cloud/what-we-do';
import { SiteFooter } from '@/components/layout/site-footer';
import { CapabilityTabs } from '@/components/shared/capability-tabs';
import { CustomerChipRow } from '@/components/shared/customer-chip-row';
import { CustomerStoryGrid } from '@/components/shared/customer-story-grid';
import { ExpertVoice } from '@/components/shared/expert-voice';
import { LocalPageNav } from '@/components/shared/local-page-nav';
import { ServicesHero } from '@/components/shared/services-hero';
import { TrendsGrid } from '@/components/shared/trends-grid';
import {
  CLOUD_BREADCRUMB,
  CLOUD_CUSTOMERS,
  CLOUD_CUSTOMER_SUCCESS,
  CLOUD_EXPERT_VOICE,
  CLOUD_FAQS,
  CLOUD_FAQ_HEADING,
  CLOUD_HERO,
  CLOUD_HOW_WE_HELP,
  CLOUD_LOCAL_NAV,
  CLOUD_PARTNERS,
  CLOUD_TRENDS,
} from '@/content/cloud';
import { siteConfig } from '@/lib/site-config';

const DESCRIPTION = 'Secure and managed cloud solutions that drive outcome-based modernization.';

export const metadata: Metadata = {
  title: 'Hybrid Cloud Services',
  description: DESCRIPTION,
  alternates: { canonical: '/cloud' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `Hybrid Cloud Services | ${siteConfig.name}`,
    description: DESCRIPTION,
    url: `${siteConfig.url}/cloud`,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Hybrid Cloud Services | ${siteConfig.name}`,
    description: DESCRIPTION,
  },
};

/**
 * McCarthy Technology Services — Cloud.
 *
 * Content is the supplied `mccarthy-cloud-services-copy.md` brief exactly,
 * laid out against the Kyndryl Cloud reference's structure: local nav →
 * dark services hero → what we do → how McCarthy helps (tabs) → trends and
 * insights → customer success → our customers → our partners → expert
 * voices → FAQ → connect CTA → footer.
 */
export default function CloudPage() {
  return (
    <>
      <div className="relative pb-16 lg:pb-24">
        <LocalPageNav breadcrumb={CLOUD_BREADCRUMB} items={CLOUD_LOCAL_NAV} />

        <ServicesHero
          eyebrow={CLOUD_HERO.eyebrow}
          heading={CLOUD_HERO.heading}
          body={CLOUD_HERO.body}
          imageSrc="/videos/wave-loop-poster.jpg"
          features={CLOUD_HERO.features}
        />

        <WhatWeDo />

        <CapabilityTabs
          id="how-we-help"
          eyebrow={CLOUD_HOW_WE_HELP.eyebrow}
          heading={CLOUD_HOW_WE_HELP.heading}
          tabs={CLOUD_HOW_WE_HELP.tabs}
        />

        <TrendsGrid
          id="trends-and-insights"
          eyebrow={CLOUD_TRENDS.eyebrow}
          heading={CLOUD_TRENDS.heading}
          articles={CLOUD_TRENDS.articles}
        />

        <CustomerStoryGrid
          id="our-customers"
          heading={CLOUD_CUSTOMER_SUCCESS.heading}
          stories={CLOUD_CUSTOMER_SUCCESS.stories}
        />

        <CustomerChipRow heading={CLOUD_CUSTOMERS.heading} names={CLOUD_CUSTOMERS.names} />

        <Partners id="our-partners" heading={CLOUD_PARTNERS.heading} link={CLOUD_PARTNERS.link} />

        <ExpertVoice
          heading={CLOUD_EXPERT_VOICE.heading}
          quote={CLOUD_EXPERT_VOICE.quote}
          name={CLOUD_EXPERT_VOICE.name}
          title={CLOUD_EXPERT_VOICE.title}
        />

        <FaqAccordion items={CLOUD_FAQS} layout="stacked" heading={CLOUD_FAQ_HEADING} />
      </div>

      <Connect id="connect-with-us" tone="dark" />
      <SiteFooter />
    </>
  );
}
