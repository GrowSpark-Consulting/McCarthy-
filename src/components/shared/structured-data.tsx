import { siteConfig } from '@/lib/site-config';

/**
 * Organisation + WebSite JSON-LD.
 *
 * Only facts that are actually true of McCarthy today are emitted: name,
 * description, operating locations and the site itself. No ratings, no founding
 * claims, no social profiles that have not been confirmed — structured data that
 * cannot be substantiated is a liability, not an SEO win.
 */
export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        areaServed: siteConfig.locations.map((location) => ({
          '@type': 'Place',
          name: location,
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: 'en',
        publisher: { '@id': `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Serialised from a local, non-user-supplied object.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
