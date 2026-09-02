import type { Metadata } from 'next';

import { SiteFooter } from '@/components/layout/site-footer';
import { Connect } from '@/components/sections/connect';
import { ConsultingHero } from '@/components/sections/consulting/consulting-hero';
import { PeopleApproach } from '@/components/sections/people-performance/people-approach';
import { PeopleAudience } from '@/components/sections/people-performance/people-audience';
import { PeopleInsights } from '@/components/sections/people-performance/people-insights';
import { PeopleIntro } from '@/components/sections/people-performance/people-intro';
import { SectionTabs } from '@/components/sections/section-tabs';
import { PEOPLE_HERO, PEOPLE_TABS } from '@/content/people-performance';
import { siteConfig } from '@/lib/site-config';

const PATH = '/what-we-do/consulting/people-performance';
const DESCRIPTION = PEOPLE_HERO.body;
const TITLE = 'People and Performance';

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
 * People and Performance — the consulting destination declared by the
 * "What we do" mega menu.
 *
 * Section order follows the copy deck and its jump navigation: hero → jump
 * navigation → what is it? → how does it work? → who we help → trends and
 * insights → talk to an expert, which is the site's existing connect band, and
 * the shared footer.
 *
 * The masthead, card artwork, jump pill, connect band and footer are the
 * site's shared components rather than page-local copies; only the three bands
 * whose composition is specific to this deck are local. "Talk to an expert"
 * resolves to the connect band's existing `#connect` anchor.
 */
export default function PeoplePerformancePage() {
  return (
    <>
      <ConsultingHero content={PEOPLE_HERO} />
      <SectionTabs tabs={PEOPLE_TABS} label="People and Performance sections" />
      <PeopleIntro />
      <PeopleApproach />
      <PeopleAudience />
      <PeopleInsights />
      <Connect />
      <SiteFooter />
    </>
  );
}
