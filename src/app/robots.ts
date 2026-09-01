import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/site-config';

/** `robots.txt`, generated so the sitemap URL always matches the deployed origin. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
