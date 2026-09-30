import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { PlaceholderFrame } from '@/components/shared/placeholder-frame';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';
import type { InsightArticle } from '@/content/insights';

interface InsightCardProps {
  readonly article: InsightArticle;
}

/**
 * One card in the Insights grid.
 *
 * The whole card is the link (the reference's cards route on click anywhere,
 * not just the title), so the hover state is driven off the card itself: the
 * image nudges into a subtle zoom, the title shifts to ember, and the arrow
 * translates — the same hover language as `ArrowLink`, just applied to a
 * card instead of an inline link.
 */
export function InsightCard({ article }: InsightCardProps) {
  return (
    <Link
      href={article.href}
      prefetch={PREFETCH_SITE_ROUTES}
      className="group/card flex flex-col"
    >
      <div className="overflow-hidden">
        <PlaceholderFrame
          label="Insight artwork"
          className="aspect-[16/9] transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-quint)] group-hover/card:scale-105"
        />
      </div>

      <p className="eyebrow-rule text-eyebrow text-ink mt-6 uppercase">{article.category}</p>

      <h3 className="text-card text-ink group-hover/card:text-ember-text mt-4 transition-colors duration-[var(--duration-base)]">
        {article.title}
      </h3>

      <p className="text-body text-ink-muted mt-3 flex-1">{article.body}</p>

      <div className="text-legal text-ink-muted mt-5 flex items-center justify-between gap-4">
        <span>{article.meta}</span>
        <ChevronRight
          aria-hidden="true"
          strokeWidth={1.5}
          className="text-ember size-4 shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/card:translate-x-1"
        />
      </div>
    </Link>
  );
}
