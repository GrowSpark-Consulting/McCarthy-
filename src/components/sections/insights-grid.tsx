import { ArrowLink } from '@/components/shared/arrow-link';
import { Eyebrow } from '@/components/shared/eyebrow';
import { PlaceholderFrame } from '@/components/shared/placeholder-frame';
import { ARTICLES } from '@/content/homepage';

/**
 * Section 13 — the insight grid.
 *
 * The reference uses an asymmetric row: a 672px lead card beside two 320px
 * cards, all sharing one 236px image band, then eyebrow / 24px title / body /
 * arrow link. Reproduced with a 2:1:1 grid that collapses to a single column
 * below `lg`.
 */
export function InsightsGrid() {
  return (
    <section aria-labelledby="insights-heading" className="bg-canvas pb-[var(--section-py)]">
      <div className="container-page">
        <Eyebrow>Insights</Eyebrow>

        <h2 id="insights-heading" className="text-h2-soft text-ember-text mt-6 max-w-[24ch]">
          Discover ideas that drive transformation
        </h2>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {ARTICLES.map((article, index) => (
            <article
              key={article.link.href}
              className={index === 0 ? 'flex flex-col lg:col-span-2' : 'flex flex-col'}
            >
              <PlaceholderFrame
                label="Article artwork"
                className={index === 0 ? 'h-[14.75rem]' : 'h-[14.75rem]'}
              />

              <div className="mt-6">
                <Eyebrow>{article.eyebrow}</Eyebrow>
              </div>

              <h3 className="text-card text-ink mt-5">{article.title}</h3>

              <p className="text-body text-ink mt-4 flex-1">{article.body}</p>

              <div className="mt-8">
                <ArrowLink href={article.link.href}>{article.link.label}</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
