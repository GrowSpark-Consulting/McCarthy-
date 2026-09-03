import type { Metadata } from 'next';

import { SiteFooter } from '@/components/layout/site-footer';
import { CustomerSuccess } from '@/components/sections/agentic-modernization/customer-success';
import { Hero } from '@/components/sections/agentic-modernization/hero';
import { HowMcCarthyHelps } from '@/components/sections/agentic-modernization/how-mccarthy-helps';
import { Intro } from '@/components/sections/agentic-modernization/intro';
import { RelatedCapabilities } from '@/components/sections/agentic-modernization/related-capabilities';
import { Team } from '@/components/sections/agentic-modernization/team';
import { ValueProps } from '@/components/sections/agentic-modernization/value-props';
import { Connect } from '@/components/sections/connect';
import { LocalPageNav } from '@/components/shared/local-page-nav';
import { TrendsGrid } from '@/components/shared/trends-grid';
import { AMOD_BREADCRUMB, AMOD_CONNECT_CTA, AMOD_LOCAL_NAV, AMOD_TRENDS } from '@/content/agentic-modernization';
import { siteConfig } from '@/lib/site-config';

const DESCRIPTION =
  'Continuously modernize with AI to cut cost, technical debt, and risk — McCarthy’s audit-first approach to agentic modernization.';

export const metadata: Metadata = {
  title: 'Agentic Modernization',
  description: DESCRIPTION,
  alternates: { canonical: '/agentic-modernization' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `Agentic Modernization | ${siteConfig.name}`,
    description: DESCRIPTION,
    url: `${siteConfig.url}/agentic-modernization`,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Agentic Modernization | ${siteConfig.name}`,
    description: DESCRIPTION,
  },
};

/**
 * McCarthy Consult — Agentic Modernization.
 *
 * Section order follows the Kyndryl consulting-subpage reference: local nav
 * → hero → intro statement → value props → how-we-help model → trends →
 * customer success → related capabilities → team → connect CTA → footer.
 *
 * `LocalNav` and the sections it jumps to (Hero through Team) share one
 * wrapper so its `sticky` positioning is contained there: a sticky element
 * stops pinning once its own parent's box scrolls past, so the nav rides
 * along with the content it navigates and scrolls away cleanly before the
 * closing CTA band, instead of floating on top of it all the way to the
 * footer. The wrapper's own bottom padding gives that hand-off some
 * clearance, so the nav has fully cleared before the CTA band appears rather
 * than disappearing right at its edge.
 */
export default function AgenticModernizationPage() {
  return (
    <>
      <div className="relative pb-16 lg:pb-24">
        <LocalPageNav breadcrumb={AMOD_BREADCRUMB} items={AMOD_LOCAL_NAV} />
        <Hero />
        <Intro />
        <ValueProps />
        <HowMcCarthyHelps />
        <TrendsGrid eyebrow={AMOD_TRENDS.eyebrow} heading={AMOD_TRENDS.heading} articles={AMOD_TRENDS.articles} />
        <CustomerSuccess />
        <RelatedCapabilities />
        <Team />
      </div>

      <Connect
        id="connect-with-us"
        heading={AMOD_CONNECT_CTA.heading}
        primary={AMOD_CONNECT_CTA.link}
        tone="dark"
      />
      <SiteFooter />
    </>
  );
}
