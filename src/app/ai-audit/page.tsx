import type { Metadata } from 'next';

import { SiteFooter } from '@/components/layout/site-footer';
import { AuditForm } from '@/components/sections/ai-audit/audit-form';
import { AuditHero } from '@/components/sections/ai-audit/audit-hero';
import { AuditProcess } from '@/components/sections/ai-audit/audit-process';
import { AUDIT_HERO } from '@/content/ai-audit';

const TITLE = 'AI Audit';
const DESCRIPTION =
  'Discover where AI can create measurable value across your business with a practical AI Audit from McCarthy.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/ai-audit' },
  openGraph: {
    type: 'website',
    title: `${TITLE} | McCarthy`,
    description: DESCRIPTION,
    url: '/ai-audit',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | McCarthy`,
    description: DESCRIPTION,
  },
};

/**
 * /ai-audit — the destination of the header's "Book an AI Audit" CTA.
 *
 * Server component: metadata and the static sections render on the server, and
 * only the form and the two animated sections opt into the client.
 *
 * The footer is composed per page (the root layout holds the header only), so
 * it is included here exactly as the homepage does it.
 */
export default function AiAuditPage() {
  return (
    <>
      <AuditHero />
      <AuditProcess />
      <AuditForm />
      <SiteFooter />

      {/* Describes the offering for search engines, using the same copy the
          page shows rather than a parallel set of claims. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Audit',
            serviceType: 'AI readiness and opportunity assessment',
            description: AUDIT_HERO.body,
            provider: { '@type': 'Organization', name: 'McCarthy' },
            areaServed: ['Singapore', 'India'],
          }),
        }}
      />
    </>
  );
}
