import type { Metadata } from 'next';

import { SiteFooter } from '@/components/layout/site-footer';
import { CareersAreas } from '@/components/sections/careers/careers-areas';
import { CareersEditorial } from '@/components/sections/careers/careers-editorial';
import { CareersHero } from '@/components/sections/careers/careers-hero';
import { CareersJoin } from '@/components/sections/careers/careers-join';
import { CareersLife } from '@/components/sections/careers/careers-life';
import { CareersOpportunities } from '@/components/sections/careers/careers-opportunities';
import { SectionTabs } from '@/components/sections/section-tabs';
import { CAREERS_HERO, CAREERS_TABS } from '@/content/careers';
import { siteConfig } from '@/lib/site-config';

const PATH = '/careers';
const TITLE = 'Careers';
const DESCRIPTION = CAREERS_HERO.description;

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
 * Careers — a minimal first version that follows the Kyndryl careers
 * reference's structure: breadcrumb and split hero → floating section pill →
 * three editorial columns → oversized outlined headline over four career-area
 * cards → life at McCarthy → opportunities → the closing "join our growing
 * team" band → the site-wide footer, unchanged.
 *
 * The pill and the sections it jumps to share one wrapper so its `sticky`
 * positioning is contained there: it rides along with the content it
 * navigates and scrolls away before the closing CTA band instead of floating
 * over it to the footer.
 */
export default function CareersPage() {
  return (
    <>
      <CareersHero />

      <div className="relative pt-10 lg:pt-14">
        <SectionTabs tabs={CAREERS_TABS} label="Careers sections" surface="warm" />
        <CareersEditorial />
        <CareersAreas />
        <CareersLife />
        <CareersOpportunities />
      </div>

      <CareersJoin />
      <SiteFooter />
    </>
  );
}
