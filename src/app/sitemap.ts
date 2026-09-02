import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/site-config';

/**
 * Sitemap. Lists only routes that exist — the navigation's future destinations
 * are added as each phase ships them, so search engines are never pointed at a
 * page that is not there.
 */
export default function sitemap(): MetadataRoute.Sitemap {
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
  ];
}
