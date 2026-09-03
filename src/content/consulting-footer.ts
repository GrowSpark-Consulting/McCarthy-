import type { LinkRef } from './homepage';

/**
 * Footer content as the consulting copy decks set it, which differs from the
 * site-wide footer: the service names are still placeholders, the second group
 * is "About us" rather than "Company", and the legal row runs longer.
 *
 * Every consulting deck carries this same block, so it lives here once and is
 * passed to `SiteFooter` by each of those pages. No other page is affected.
 */
export const CONSULTING_FOOTER_GROUPS = [
  {
    heading: 'Services',
    columns: [
      [
        { label: '[Service 1]', href: '/services' },
        { label: '[Service 2]', href: '/services' },
        { label: '[Service 3]', href: '/services' },
      ],
      [
        { label: '[Service 4]', href: '/services' },
        { label: '[Service 5]', href: '/services' },
      ],
    ],
  },
  {
    heading: 'About us',
    columns: [
      [
        { label: 'Leadership', href: '/about/leadership' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact us', href: '/contact' },
      ],
      [
        { label: 'Corporate citizenship', href: '/about/corporate-citizenship' },
        { label: 'Our values', href: '/about/values' },
      ],
    ],
  },
] as const;

export const CONSULTING_FOOTER_LEGAL: readonly LinkRef[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Security', href: '/security' },
  { label: 'Sitemap', href: '/sitemap.xml' },
  { label: 'Do not sell or share my personal information', href: '/privacy#do-not-sell' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Cookie Preferences', href: '/cookie-preferences' },
  { label: 'SG/IN - EN', href: '/' },
];
