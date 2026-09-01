'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

/**
 * Route error boundary.
 *
 * Keeps a rendering failure inside the page shell instead of showing the
 * framework's default screen, and gives the visitor a way out.
 */
export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Surfaced in the browser console and in server logs for triage. Replace
    // with the real reporter when observability is wired up.
    console.error(error);
  }, [error]);

  return (
    <div className="bg-canvas flex min-h-svh w-full items-center pt-[var(--header-height)]">
      <div className="container-page">
        <p className="text-eyebrow text-ink-muted uppercase">Something went wrong</p>

        <h1 className="text-h2 text-ink mt-5 max-w-[18ch]">
          That page didn&rsquo;t load as it should.
        </h1>

        <p className="text-body-lg text-ink-muted mt-6 max-w-[52ch]">
          The error has been logged. Try again — if it keeps happening, the issue is on our side,
          not yours.
        </p>

        <Button onClick={reset} variant="ember" size="control" className="mt-10">
          Try again
        </Button>
      </div>
    </div>
  );
}
