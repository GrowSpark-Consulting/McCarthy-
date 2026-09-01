import type { Metadata } from 'next';

import { ButtonLink } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

/**
 * 404 boundary.
 *
 * Not a site page — it is the App Router's fallback for an unmatched route. The
 * header's destinations are published phase by phase, so this states plainly
 * that a page is not live yet rather than pretending it never existed.
 */
export default function NotFound() {
  return (
    <div className="bg-canvas flex min-h-svh w-full items-center pt-[var(--header-height)]">
      <div className="container-page">
        <p className="text-eyebrow text-ink-muted uppercase">Error 404</p>

        <h1 className="text-h2 text-ink mt-5 max-w-[18ch]">This page isn&rsquo;t published yet.</h1>

        <p className="text-body-lg text-ink-muted mt-6 max-w-[52ch]">
          The McCarthy site is being rolled out section by section. Head back to the homepage for
          everything that is live today.
        </p>

        <ButtonLink href="/" variant="ember" size="control" className="mt-10">
          Back to the homepage
        </ButtonLink>
      </div>
    </div>
  );
}
