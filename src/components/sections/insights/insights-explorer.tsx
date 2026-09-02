'use client';

import { useEffect, useMemo, useState } from 'react';

import { Search } from 'lucide-react';

import { InsightCard } from '@/components/sections/insights/insight-card';
import { Button } from '@/components/ui/button';
import { INSIGHT_ARTICLES, INSIGHT_CATEGORIES, SUGGESTED_SEARCHES } from '@/content/insights';
import { cn } from '@/lib/utils';

const INITIAL_VISIBLE = 6;
const LOAD_STEP = 6;

/**
 * Search, category pills and the card grid, combined into one client
 * component because filtering has to update the grid instantly — the
 * reference's "Ideas Lab" topic dropdown plus its search bar, reproduced as a
 * single self-contained, client-side filter (no search backend exists yet).
 */
export function InsightsExplorer() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();

    return INSIGHT_ARTICLES.filter((article) => {
      if (activeCategory !== 'All' && article.category !== activeCategory) {
        return false;
      }

      if (term.length === 0) {
        return true;
      }

      return `${article.title} ${article.body} ${article.category}`.toLowerCase().includes(term);
    });
  }, [query, activeCategory]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [query, activeCategory]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section id="ideas" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-h3 text-ink">Browse insights</h2>
            <p className="text-body text-ink-muted mt-3 max-w-[52ch]">
              Filter by topic, or search for what your team is working through right now.
            </p>
          </div>

          <label className="border-ink/20 focus-within:border-ink flex w-full items-center gap-3 rounded-full border px-5 py-3 transition-colors duration-[var(--duration-base)] lg:w-80">
            <Search aria-hidden="true" strokeWidth={1.75} className="text-ink-muted size-4 shrink-0" />
            <span className="sr-only">Search insights</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search insights…"
              autoComplete="off"
              className="text-body text-ink placeholder:text-ink-muted w-full bg-transparent focus:outline-none"
            />
          </label>
        </div>

        <div role="group" aria-label="Filter by topic" className="mt-6 flex flex-wrap gap-2">
          {INSIGHT_CATEGORIES.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'rounded-full px-4 py-2 text-[0.8125rem] leading-[1.125rem] whitespace-nowrap',
                  'transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
                  isActive
                    ? 'bg-ink-strong text-ink-inverse'
                    : 'bg-surface-warm text-ink hover:bg-ink/10',
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        {query.length === 0 ? (
          <p className="text-legal text-ink-muted mt-4">
            Try{' '}
            {SUGGESTED_SEARCHES.map((term, index) => (
              <span key={term}>
                <button
                  type="button"
                  onClick={() => setQuery(term)}
                  className="text-link hover:text-ink underline-offset-4 transition-colors duration-[var(--duration-base)] hover:underline"
                >
                  {term}
                </button>
                {index < SUGGESTED_SEARCHES.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        ) : null}

        {visible.length > 0 ? (
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {visible.map((article) => (
              <InsightCard key={article.href} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-body-lg text-ink-muted mt-14">
            Nothing matches “{query}”. Try a different topic or search term.
          </p>
        )}

        {hasMore ? (
          <div className="mt-12 flex justify-center lg:mt-16">
            <Button
              type="button"
              variant="outline"
              shape="control"
              size="control"
              onClick={() => setVisibleCount((count) => count + LOAD_STEP)}
            >
              Load more insights
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
