import type { MetadataRoute } from 'next';

import { getNewsSitemapEntries, newsHref } from '@/lib/news';
import { siteConfig } from '@/lib/site-config';

/** Published News articles are read from Sanity; ISR safety net alongside webhook revalidation. */
export const revalidate = 60;

/**
 * Sitemap. Lists only routes that exist — the navigation's future destinations
 * are added as each phase ships them, so search engines are never pointed at a
 * page that is not there.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsArticles = await getNewsSitemapEntries();

  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/business-workflow-transformation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/what-we-do/consulting/people-performance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/cybersecurity`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/mccarthy-institute`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/mccarthy-flow`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/ai-lab`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...newsArticles.map((article) => ({
      url: `${siteConfig.url}${newsHref(article.slug)}`,
      lastModified: new Date(article._updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
