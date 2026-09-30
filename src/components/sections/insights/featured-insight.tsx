import Image from 'next/image';

import { Eyebrow } from '@/components/shared/eyebrow';
import { ButtonLink } from '@/components/ui/button';
import { FEATURED_INSIGHT } from '@/content/insights';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';

/**
 * The reference's larger, single-feature band above the grid ("Readiness
 * Report" in the reference). Reuses the hero's own office photography —
 * already-approved real footage, not a downloaded stock image — since it
 * fits the assessment/readiness subject better than a marked placeholder
 * would.
 */
export function FeaturedInsight() {
  return (
    <section aria-labelledby="featured-insight-heading" className="bg-surface-warm">
      <div className="container-page grid gap-10 py-[var(--section-py)] lg:grid-cols-[minmax(0,563fr)_minmax(0,877fr)] lg:items-center lg:gap-14">
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] lg:order-1 lg:aspect-auto lg:h-full lg:min-h-[26rem]">
          <Image
            src={FEATURED_INSIGHT.imageSrc}
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>{FEATURED_INSIGHT.eyebrow}</Eyebrow>

          <h2 id="featured-insight-heading" className="text-h2-soft text-ink mt-6 max-w-[20ch]">
            {FEATURED_INSIGHT.title}
          </h2>

          <p className="text-body-lg text-ink-muted mt-5 max-w-[58ch]">{FEATURED_INSIGHT.body}</p>

          <p className="text-legal text-ink-muted mt-4 uppercase tracking-wide">
            {FEATURED_INSIGHT.meta}
          </p>

          <ButtonLink
            href={FEATURED_INSIGHT.link.href}
            prefetch={PREFETCH_SITE_ROUTES}
            variant="outline"
            shape="control"
            size="control"
            className="mt-8 w-fit"
          >
            {FEATURED_INSIGHT.link.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
