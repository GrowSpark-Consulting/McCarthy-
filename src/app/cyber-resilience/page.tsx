import type { Metadata } from 'next';

import { Connect } from '@/components/sections/connect';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { Partners } from '@/components/sections/partners';
import { LatestNews } from '@/components/sections/cyber-resilience/latest-news';
import { WhatWeDo } from '@/components/sections/cyber-resilience/what-we-do';
import { SiteFooter } from '@/components/layout/site-footer';
import { AssessmentBand } from '@/components/shared/assessment-band';
import { CapabilityTabs } from '@/components/shared/capability-tabs';
import { CustomerChipRow } from '@/components/shared/customer-chip-row';
import { CustomerStoryGrid } from '@/components/shared/customer-story-grid';
import { ExpertVoice } from '@/components/shared/expert-voice';
import { LocalPageNav } from '@/components/shared/local-page-nav';
import { ServicesHero } from '@/components/shared/services-hero';
import { TrendsGrid } from '@/components/shared/trends-grid';
import {
  CYBER_ASSESSMENT,
  CYBER_BREADCRUMB,
  CYBER_CUSTOMERS,
  CYBER_CUSTOMER_SUCCESS,
  CYBER_EXPERT_VOICE,
  CYBER_FAQS,
  CYBER_HERO,
  CYBER_HOW_WE_HELP,
  CYBER_LOCAL_NAV,
  CYBER_PARTNERS,
  CYBER_TRENDS,
} from '@/content/cyber-resilience';
import { siteConfig } from '@/lib/site-config';

const DESCRIPTION = 'Navigate cyber risks with confidence.';

export const metadata: Metadata = {
  title: 'Cyber Resilience',
  description: DESCRIPTION,
  alternates: { canonical: '/cyber-resilience' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `Cyber Resilience | ${siteConfig.name}`,
    description: DESCRIPTION,
    url: `${siteConfig.url}/cyber-resilience`,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Cyber Resilience | ${siteConfig.name}`,
    description: DESCRIPTION,
  },
};

/**
 * McCarthy Technology Services — Cyber Resilience.
 *
 * Content is the supplied `mccarthy-cyber-resilience-copy.md` brief exactly,
 * laid out against the Kyndryl Cyber Resilience reference's structure: local
 * nav → dark services hero → what we do (video block) → how McCarthy helps
 * (tabs) → green assessment band → latest news → trends and insights →
 * customer success → our customers → our partners → expert voices → FAQ →
 * connect CTA → footer.
 */
export default function CyberResiliencePage() {
  return (
    <>
      <div className="relative pb-16 lg:pb-24">
        <LocalPageNav breadcrumb={CYBER_BREADCRUMB} items={CYBER_LOCAL_NAV} />

        <ServicesHero
          eyebrow={CYBER_HERO.eyebrow}
          heading={CYBER_HERO.heading}
          body={CYBER_HERO.body}
          imageSrc="/videos/hero-ai-office-poster.jpg"
          features={CYBER_HERO.features}
        />

        <WhatWeDo />

        <CapabilityTabs
          id="how-we-help"
          eyebrow={CYBER_HOW_WE_HELP.eyebrow}
          heading={CYBER_HOW_WE_HELP.heading}
          tabs={CYBER_HOW_WE_HELP.tabs}
        />

        <AssessmentBand
          keyword={CYBER_ASSESSMENT.keyword}
          body={CYBER_ASSESSMENT.body}
          link={CYBER_ASSESSMENT.link}
        />

        <LatestNews />

        <TrendsGrid
          id="trends-and-insights"
          eyebrow={CYBER_TRENDS.eyebrow}
          heading={CYBER_TRENDS.heading}
          articles={CYBER_TRENDS.articles}
        />

        <CustomerStoryGrid
          id="our-customers"
          heading={CYBER_CUSTOMER_SUCCESS.heading}
          stories={CYBER_CUSTOMER_SUCCESS.stories}
        />

        <CustomerChipRow heading={CYBER_CUSTOMERS.heading} names={CYBER_CUSTOMERS.names} />

        <Partners id="our-partners" heading={CYBER_PARTNERS.heading} link={CYBER_PARTNERS.link} />

        <ExpertVoice
          heading={CYBER_EXPERT_VOICE.heading}
          quote={CYBER_EXPERT_VOICE.quote}
          name={CYBER_EXPERT_VOICE.name}
          title={CYBER_EXPERT_VOICE.title}
        />

        <FaqAccordion
          items={CYBER_FAQS}
          layout="stacked"
          heading={
            <>
              You have questions. We have <span className="text-ember-text">answers.</span>
            </>
          }
        />
      </div>

      <Connect id="connect-with-us" tone="dark" />
      <SiteFooter />
    </>
  );
}
