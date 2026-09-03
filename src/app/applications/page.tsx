import type { Metadata } from 'next';

import { Connect } from '@/components/sections/connect';
import { Partners } from '@/components/sections/partners';
import { WhatWeDo } from '@/components/sections/applications/what-we-do';
import { SiteFooter } from '@/components/layout/site-footer';
import { CapabilityTabs } from '@/components/shared/capability-tabs';
import { CustomerStoryGrid } from '@/components/shared/customer-story-grid';
import { ExpertVoice } from '@/components/shared/expert-voice';
import { LocalPageNav } from '@/components/shared/local-page-nav';
import { ServicesHero } from '@/components/shared/services-hero';
import { TrendsGrid } from '@/components/shared/trends-grid';
import {
  APPLICATIONS_BREADCRUMB,
  APPLICATIONS_CUSTOMERS,
  APPLICATIONS_EXPERT_VOICE,
  APPLICATIONS_HERO,
  APPLICATIONS_HOW_WE_HELP,
  APPLICATIONS_LOCAL_NAV,
  APPLICATIONS_PARTNERS,
  APPLICATIONS_TRENDS,
} from '@/content/applications';
import { siteConfig } from '@/lib/site-config';

const DESCRIPTION =
  'Transform your applications with an agentic AI-powered approach for business agility.';

export const metadata: Metadata = {
  title: 'Application Services',
  description: DESCRIPTION,
  alternates: { canonical: '/applications' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `Application Services | ${siteConfig.name}`,
    description: DESCRIPTION,
    url: `${siteConfig.url}/applications`,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Application Services | ${siteConfig.name}`,
    description: DESCRIPTION,
  },
};

/**
 * McCarthy Technology Services — Applications.
 *
 * Content is the supplied `mccarthy-application-services-copy.md` brief
 * exactly, laid out against the Kyndryl Applications reference's structure:
 * local nav → dark services hero → what we do → how McCarthy helps (tabs) →
 * trends and insights → our customers → our partners → expert voices →
 * connect CTA → footer.
 */
export default function ApplicationsPage() {
  return (
    <>
      <div className="relative pb-16 lg:pb-24">
        <LocalPageNav breadcrumb={APPLICATIONS_BREADCRUMB} items={APPLICATIONS_LOCAL_NAV} />

        <ServicesHero
          eyebrow={APPLICATIONS_HERO.eyebrow}
          heading={APPLICATIONS_HERO.heading}
          body={APPLICATIONS_HERO.body}
          imageSrc="/videos/hero-ai-office-poster.jpg"
          features={APPLICATIONS_HERO.features}
        />

        <WhatWeDo />

        <CapabilityTabs
          id="how-we-help"
          eyebrow={APPLICATIONS_HOW_WE_HELP.eyebrow}
          heading={APPLICATIONS_HOW_WE_HELP.heading}
          tabs={APPLICATIONS_HOW_WE_HELP.tabs}
        />

        <TrendsGrid
          id="trends-and-insights"
          eyebrow={APPLICATIONS_TRENDS.eyebrow}
          heading={APPLICATIONS_TRENDS.heading}
          articles={APPLICATIONS_TRENDS.articles}
        />

        <CustomerStoryGrid
          id="our-customers"
          heading={APPLICATIONS_CUSTOMERS.heading}
          stories={APPLICATIONS_CUSTOMERS.stories}
        />

        <Partners id="our-partners" heading={APPLICATIONS_PARTNERS.heading} link={APPLICATIONS_PARTNERS.link} />

        <ExpertVoice
          heading={APPLICATIONS_EXPERT_VOICE.heading}
          quote={APPLICATIONS_EXPERT_VOICE.quote}
          name={APPLICATIONS_EXPERT_VOICE.name}
          title={APPLICATIONS_EXPERT_VOICE.title}
          profileLink={APPLICATIONS_EXPERT_VOICE.profileLink}
        />
      </div>

      <Connect id="connect-with-us" tone="dark" />
      <SiteFooter />
    </>
  );
}
