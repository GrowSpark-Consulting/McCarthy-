import type { Metadata } from 'next';

import { Connect } from '@/components/sections/connect';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { SiteFooter } from '@/components/layout/site-footer';
import { CapabilityCatalogue } from '@/components/sections/industries/capability-catalogue';
import { CaseStudyGrid } from '@/components/sections/industries/case-study-grid';
import { ExpertQa } from '@/components/sections/industries/expert-qa';
import { ImpactTable } from '@/components/sections/industries/impact-table';
import { IndustryHero } from '@/components/sections/industries/industry-hero';
import { IndustryIntro } from '@/components/sections/industries/industry-intro';
import { InsightsGrid } from '@/components/sections/industries/insights-grid';
import { PressureGrid } from '@/components/sections/industries/pressure-grid';
import { ProcessSteps } from '@/components/sections/industries/process-steps';
import { ResourcesGrid } from '@/components/sections/industries/resources-grid';
import { LocalPageNav } from '@/components/shared/local-page-nav';
import { INSURANCE_CONTENT } from '@/content/industries/insurance';
import { siteConfig } from '@/lib/site-config';

const C = INSURANCE_CONTENT;

export const metadata: Metadata = {
  title: C.meta.title,
  description: C.meta.description,
  alternates: { canonical: C.meta.path },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `${C.meta.title} | ${siteConfig.name}`,
    description: C.meta.description,
    url: `${siteConfig.url}${C.meta.path}`,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${C.meta.title} | ${siteConfig.name}`,
    description: C.meta.description,
  },
};

/**
 * Industries — Insurance.
 *
 * Content is transcribed verbatim from the supplied `insurance.html` brief
 * (see `content/industries/insurance.ts`); composition follows the same
 * industry-page structure as the rest of the Industries family.
 */
export default function InsurancePage() {
  return (
    <>
      <div className="relative pb-16 lg:pb-24">
        <LocalPageNav breadcrumb={C.breadcrumb} items={C.localNav} />

        <IndustryHero content={C.hero} imageSrc="/videos/wave-loop-poster.jpg" />

        <IndustryIntro id="overview" content={C.intro} />

        <PressureGrid id="pressures" content={C.pressures} />

        <CapabilityCatalogue id="capabilities" content={C.capabilities} />

        <ImpactTable id="impact" content={C.impact} />

        <ResourcesGrid id="resources" content={C.resources} />

        <ProcessSteps id="process" content={C.process} />

        <ExpertQa id="experts" content={C.expertQa} />

        <CaseStudyGrid id="case-studies" content={C.caseStudies} />

        <FaqAccordion id="faq" layout="stacked" heading={C.faq.heading} items={C.faq.items} />

        <InsightsGrid id="insights" content={C.insights} />
      </div>

      <Connect
        id="connect-with-us"
        tone="dark"
        heading={C.cta.heading}
        body=""
        primary={{ label: C.cta.primaryLabel, href: C.cta.primaryHref }}
      />
      <SiteFooter />
    </>
  );
}
