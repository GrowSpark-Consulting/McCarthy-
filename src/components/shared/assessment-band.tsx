import { ArrowRight } from 'lucide-react';

import { ButtonLink } from '@/components/ui/button';
import type { LinkRef } from '@/content/homepage';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';

interface AssessmentBandProps {
  readonly id?: string;
  /** A single word, set at display scale — the band's only heading. */
  readonly keyword: string;
  readonly body: string;
  readonly link: LinkRef;
}

/**
 * A vivid green self-assessment callout: an oversized keyword beside a
 * question and CTA. Reuses the site's `.type-break` display-type treatment
 * (see `TypeBreak`) but isn't wrapped in that component, since here the
 * word is the section's only heading rather than decorative punctuation
 * between two headed bands — it stays in the accessibility tree.
 */
export function AssessmentBand({ id, keyword, body, link }: AssessmentBandProps) {
  return (
    <section id={id} className="bg-verde-deep scroll-mt-32 overflow-hidden py-[var(--section-py)]">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <p className="type-break text-verde-bright text-[clamp(3rem,1.5rem+7vw,6.5rem)] leading-[0.95] font-bold">
          {keyword}
        </p>

        <div className="flex flex-col items-start gap-6">
          <p className="text-body-lg text-ink-inverse max-w-[42ch]">{body}</p>

          <ButtonLink href={link.href} prefetch={PREFETCH_SITE_ROUTES} variant="verde" shape="pill" size="nav">
            {link.label}
            <span
              aria-hidden="true"
              className="bg-verde-ink/12 flex size-7 items-center justify-center rounded-full transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/button:translate-x-0.5"
            >
              <ArrowRight strokeWidth={1.75} className="size-4" />
            </span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
