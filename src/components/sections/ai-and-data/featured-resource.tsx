import { ArrowLink } from '@/components/shared/arrow-link';
import { AI_DATA_FEATURED_RESOURCE } from '@/content/ai-and-data';

/** "Featured resource callout" — a single banner between What we do and How McCarthy helps. */
export function FeaturedResource() {
  return (
    <section aria-labelledby="featured-resource-heading" className="bg-surface-mint py-[var(--section-py)]">
      <div className="container-page flex flex-col items-start gap-4">
        <h2 id="featured-resource-heading" className="text-h2-soft text-ink max-w-[30ch]">
          {AI_DATA_FEATURED_RESOURCE.heading}
        </h2>
        <p className="text-body-lg text-ink-muted max-w-[60ch]">{AI_DATA_FEATURED_RESOURCE.body}</p>
        <ArrowLink href={AI_DATA_FEATURED_RESOURCE.link.href} tone="ember" className="text-body-lg mt-2">
          {AI_DATA_FEATURED_RESOURCE.link.label}
        </ArrowLink>
      </div>
    </section>
  );
}
