import { NewsCard } from '@/components/sections/news/news-card';
import { NEWS_EMPTY_STATE } from '@/content/news';
import type { NewsCardData } from '@/lib/sanity/types';

interface NewsGridProps {
  readonly articles: readonly NewsCardData[];
}

/** The `/news` card grid — the Insights explorer's grid rhythm, without its filters. */
export function NewsGrid({ articles }: NewsGridProps) {
  return (
    <section aria-labelledby="news-grid-heading" className="bg-canvas pb-[var(--section-py)]">
      <div className="container-page">
        <h2 id="news-grid-heading" className="sr-only">
          All news
        </h2>

        {articles.length > 0 ? (
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <NewsCard key={article._id} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-body-lg text-ink-muted max-w-[52ch]">{NEWS_EMPTY_STATE}</p>
        )}
      </div>
    </section>
  );
}
