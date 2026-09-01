import { ArrowLink } from '@/components/shared/arrow-link';
import { NEWS_ITEMS } from '@/content/homepage';

/**
 * Section 3 — the strip directly beneath the hero.
 *
 * Three equal columns (437px wide with 32px gaps at a 1440 viewport, measured),
 * each an eyebrow with the ember rule, a 24px/30px headline and an arrow link.
 * Stacks to a single column below `md`.
 *
 * The reference fills this with press releases. McCarthy has none yet, so the
 * same slot carries evergreen pointers into real site content.
 */
export function NewsStrip() {
  return (
    <section aria-label="Latest from McCarthy" className="bg-canvas py-10 lg:py-14">
      <div className="container-page grid gap-10 md:grid-cols-3 md:gap-8">
        {NEWS_ITEMS.map((item) => (
          <article key={item.link.href} className="flex flex-col">
            <p className="eyebrow-rule text-eyebrow text-ink uppercase">{item.eyebrow}</p>

            <h2 className="text-card text-ink mt-5">{item.title}</h2>

            <div className="mt-5">
              <ArrowLink href={item.link.href}>{item.link.label}</ArrowLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
