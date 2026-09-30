import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { PlaceholderFrame } from '@/components/shared/placeholder-frame';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';
import { formatNewsDate, newsCategoryLabel, newsHref } from '@/lib/news';
import { urlForImage } from '@/lib/sanity/image';
import type { NewsCardData } from '@/lib/sanity/types';

interface NewsCardProps {
  readonly article: NewsCardData;
}

const ZOOM_CLASS =
  'transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-quint)] group-hover/card:scale-105';

/**
 * One card in the News grid — the same markup and hover language as
 * `InsightCard`, with the article's cover image in the 16:9 slot (or the
 * standard placeholder frame when an article has none).
 */
export function NewsCard({ article }: NewsCardProps) {
  const cover = article.coverImage;
  const coverSrc = urlForImage(cover)?.width(1600).height(900).fit('crop').url();
  const lqip = cover?.asset?.metadata?.lqip;

  return (
    <Link
      href={newsHref(article.slug)}
      prefetch={PREFETCH_SITE_ROUTES}
      className="group/card flex flex-col"
    >
      <div className="overflow-hidden">
        {coverSrc ? (
          <div className={`relative aspect-[16/9] ${ZOOM_CLASS}`}>
            <Image
              src={coverSrc}
              alt={cover?.alt ?? ''}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
              {...(lqip ? { placeholder: 'blur' as const, blurDataURL: lqip } : {})}
            />
          </div>
        ) : (
          <PlaceholderFrame label="News image" className={`aspect-[16/9] ${ZOOM_CLASS}`} />
        )}
      </div>

      <p className="eyebrow-rule text-eyebrow text-ink mt-6 uppercase">
        {newsCategoryLabel(article.category)}
      </p>

      <h3 className="text-card text-ink group-hover/card:text-ember-text mt-4 transition-colors duration-[var(--duration-base)]">
        {article.title}
      </h3>

      <p className="text-body text-ink-muted mt-3 flex-1">{article.excerpt}</p>

      <div className="text-legal text-ink-muted mt-5 flex items-center justify-between gap-4">
        <time dateTime={article.publishedAt}>{formatNewsDate(article.publishedAt)}</time>
        <ChevronRight
          aria-hidden="true"
          strokeWidth={1.5}
          className="text-ember size-4 shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/card:translate-x-1"
        />
      </div>
    </Link>
  );
}
