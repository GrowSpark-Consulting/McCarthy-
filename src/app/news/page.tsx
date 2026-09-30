import type { Metadata } from 'next';

import { SiteFooter } from '@/components/layout/site-footer';
import { Connect } from '@/components/sections/connect';
import { NewsGrid } from '@/components/sections/news/news-grid';
import { NewsHero } from '@/components/sections/news/news-hero';
import { NEWS_DESCRIPTION } from '@/content/news';
import { getNewsList } from '@/lib/news';
import { siteConfig } from '@/lib/site-config';

/** ISR safety net; publishing also revalidates this page on demand via webhook. */
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'News',
  description: NEWS_DESCRIPTION,
  alternates: { canonical: '/news' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `News | ${siteConfig.name}`,
    description: NEWS_DESCRIPTION,
    url: `${siteConfig.url}/news`,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: `News | ${siteConfig.name}`,
    description: NEWS_DESCRIPTION,
  },
};

/** McCarthy News — articles are published from the McCarthy Sanity Studio. */
export default async function NewsPage() {
  const articles = await getNewsList();

  return (
    <>
      <NewsHero />
      <NewsGrid articles={articles} />
      <Connect />
      <SiteFooter />
    </>
  );
}
