import type { Metadata } from 'next';

import { Connect } from '@/components/sections/connect';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { Partners } from '@/components/sections/partners';
import { AiStrategy } from '@/components/sections/ai-and-data/ai-strategy';
import { FeaturedResource } from '@/components/sections/ai-and-data/featured-resource';
import { WhatWeDo } from '@/components/sections/ai-and-data/what-we-do';
import { SiteFooter } from '@/components/layout/site-footer';
import { CapabilityTabs } from '@/components/shared/capability-tabs';
import { CustomerChipRow } from '@/components/shared/customer-chip-row';
import { CustomerStoryGrid } from '@/components/shared/customer-story-grid';
import { ExpertVoice } from '@/components/shared/expert-voice';
import { LocalPageNav } from '@/components/shared/local-page-nav';
import { ServicesHero } from '@/components/shared/services-hero';
import { TrendsGrid } from '@/components/shared/trends-grid';
import {
  AI_DATA_BREADCRUMB,
  AI_DATA_CUSTOMERS,
  AI_DATA_CUSTOMER_SUCCESS,
  AI_DATA_EXPERT_VOICE,
  AI_DATA_FAQS,
  AI_DATA_HERO,
  AI_DATA_HOW_WE_HELP,
  AI_DATA_LOCAL_NAV,
  AI_DATA_PARTNERS,
  AI_DATA_TRENDS,
} from '@/content/ai-and-data';
import { siteConfig } from '@/lib/site-config';

const DESCRIPTION =
  'Unlocking value from data and AI faster to help you scale and transform your digital business.';

export const metadata: Metadata = {
  title: 'AI and Data',
  description: DESCRIPTION,
  alternates: { canonical: '/artificial-intelligence-and-data' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `AI and Data | ${siteConfig.name}`,
    description: DESCRIPTION,
    url: `${siteConfig.url}/artificial-intelligence-and-data`,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: `AI and Data | ${siteConfig.name}`,
    description: DESCRIPTION,
  },
};

/**
 * McCarthy Technology Services — AI and Data.
 *
 * Content is the supplied `mccarthy-ai-and-data-copy.md` brief exactly, laid
 * out against the Kyndryl AI and Data reference's structure: local nav →
 * dark services hero → what we do (video block) → featured resource →
 * how McCarthy helps (tabs) → AI strategy → trends and insights → customer
 * success → our customers → our partners → expert voices → FAQ → connect
 * CTA → footer.
 */
export default function AiAndDataPage() {
  return (
    <>
      <div className="relative pb-16 lg:pb-24">
        <LocalPageNav breadcrumb={AI_DATA_BREADCRUMB} items={AI_DATA_LOCAL_NAV} />

        <ServicesHero
          eyebrow={AI_DATA_HERO.eyebrow}
          heading={AI_DATA_HERO.heading}
          body={AI_DATA_HERO.body}
          imageSrc="/videos/wave-loop-poster.jpg"
          features={AI_DATA_HERO.features}
        />

        <WhatWeDo />
        <FeaturedResource />

        <CapabilityTabs
          id="how-we-help"
          eyebrow={AI_DATA_HOW_WE_HELP.eyebrow}
          heading={AI_DATA_HOW_WE_HELP.heading}
          tabs={AI_DATA_HOW_WE_HELP.tabs}
        />

        <AiStrategy />

        <TrendsGrid
          id="trends-and-insights"
          eyebrow={AI_DATA_TRENDS.eyebrow}
          heading={AI_DATA_TRENDS.heading}
          articles={AI_DATA_TRENDS.articles}
        />

        <CustomerStoryGrid
          id="our-customers"
          heading={AI_DATA_CUSTOMER_SUCCESS.heading}
          stories={AI_DATA_CUSTOMER_SUCCESS.stories}
        />

        <CustomerChipRow heading={AI_DATA_CUSTOMERS.heading} names={AI_DATA_CUSTOMERS.names} />

        <Partners id="our-partners" heading={AI_DATA_PARTNERS.heading} link={AI_DATA_PARTNERS.link} />

        <ExpertVoice
          heading={AI_DATA_EXPERT_VOICE.heading}
          quote={AI_DATA_EXPERT_VOICE.quote}
          name={AI_DATA_EXPERT_VOICE.name}
          title={AI_DATA_EXPERT_VOICE.title}
          profileLink={AI_DATA_EXPERT_VOICE.profileLink}
        />

        <FaqAccordion
          items={AI_DATA_FAQS}
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
