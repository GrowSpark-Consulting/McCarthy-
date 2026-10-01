import { ArrowLink } from '@/components/shared/arrow-link';
import { NEWS_ITEMS, type NewsItem } from '@/content/homepage';
import { getLatestNews, newsCategoryLabel, newsHref } from '@/lib/news';

/**
 * Section 3 — the strip directly beneath the hero.
 *
 * Three equal columns (437px wide with 32px gaps at a 1440 viewport, measured),
 * each an eyebrow with the ember rule, a 24px/30px headline and an arrow link.
 * Stacks to a single column below `md`.
 *
 * Shows the latest three published News articles from Sanity. Until the first
 * article is published, the same slot carries the evergreen pointers in
 * `NEWS_ITEMS` so the band is never empty.
 */
export async function NewsStrip() {
  const latest = await getLatestNews();

  const items: readonly NewsItem[] =
    latest.length > 0
      ? latest.map((article) => ({
          eyebrow: newsCategoryLabel(article.category),
          title: article.title,
          link: { label: 'Read more', href: newsHref(article.slug) },
        }))
      : NEWS_ITEMS;

  return (
    <section aria-label="Latest from McCarthy" className="bg-canvas py-10 lg:py-14">
      <div className="container-page grid gap-10 md:grid-cols-3 md:gap-8">
        {items.map((item) => (
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
