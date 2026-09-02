import type { Metadata } from 'next';

import { SiteFooter } from '@/components/layout/site-footer';
import { Connect } from '@/components/sections/connect';
import { FeaturedInsight } from '@/components/sections/insights/featured-insight';
import { InsightPapers } from '@/components/sections/insights/insight-papers';
import { InsightsExplorer } from '@/components/sections/insights/insights-explorer';
import { InsightsHero } from '@/components/sections/insights/insights-hero';
import { siteConfig } from '@/lib/site-config';

const DESCRIPTION =
  'Perspectives on AI strategy, agents, automation and workforce transformation from the McCarthy team.';

export const metadata: Metadata = {
  title: 'Insights',
  description: DESCRIPTION,
  alternates: { canonical: '/insights' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `Insights | ${siteConfig.name}`,
    description: DESCRIPTION,
    url: `${siteConfig.url}/insights`,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Insights | ${siteConfig.name}`,
    description: DESCRIPTION,
  },
};

/**
 * McCarthy Insights hub.
 *
 * Structure follows the reference's Insights page: hero → one larger featured
 * piece → a searchable/filterable card grid → a list-style secondary content
 * type → the shared connect band and footer.
 */
export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <FeaturedInsight />
      <InsightsExplorer />
      <InsightPapers />
      <Connect />
      <SiteFooter />
    </>
  );
}
