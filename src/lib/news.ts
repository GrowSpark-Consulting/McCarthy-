import { cache } from 'react';

import { sanityClient } from '@/lib/sanity/client';
import {
  NEWS_BY_SLUG_QUERY,
  NEWS_LATEST_QUERY,
  NEWS_LIST_QUERY,
  NEWS_SITEMAP_QUERY,
  NEWS_SLUGS_QUERY,
} from '@/lib/sanity/queries';
import type { NewsArticleData, NewsCardData, NewsSitemapEntry } from '@/lib/sanity/types';

/**
 * Display labels for the Studio's category values. Mirrors `NEWS_CATEGORIES`
 * in the McCarthy Studio's `newsPost` schema — the stored value is stable, the
 * label is presentation.
 */
const NEWS_CATEGORY_LABELS: Readonly<Record<string, string>> = {
  announcement: 'Announcement',
  'press-release': 'Press release',
  partnership: 'Partnership',
  'in-the-media': 'In the media',
  event: 'Event',
};

export function newsCategoryLabel(category: string | null): string {
  return (category && NEWS_CATEGORY_LABELS[category]) ?? 'News';
}

export function newsHref(slug: string): string {
  return `/news/${slug}`;
}

const NEWS_DATE_FORMAT = new Intl.DateTimeFormat('en-SG', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  // Fixed zone so server-rendered dates never depend on the host's clock zone.
  timeZone: 'Asia/Singapore',
});

export function formatNewsDate(iso: string): string {
  return NEWS_DATE_FORMAT.format(new Date(iso));
}

export function getNewsList(): Promise<NewsCardData[]> {
  return sanityClient.fetch<NewsCardData[]>(NEWS_LIST_QUERY);
}

export function getLatestNews(): Promise<NewsCardData[]> {
  return sanityClient.fetch<NewsCardData[]>(NEWS_LATEST_QUERY);
}

/** Memoised per request, so `generateMetadata` and the page share one fetch. */
export const getNewsBySlug = cache((slug: string): Promise<NewsArticleData | null> =>
  sanityClient.fetch<NewsArticleData | null>(NEWS_BY_SLUG_QUERY, { slug }),
);

export function getNewsSlugs(): Promise<string[]> {
  return sanityClient.fetch<string[]>(NEWS_SLUGS_QUERY);
}

export function getNewsSitemapEntries(): Promise<NewsSitemapEntry[]> {
  return sanityClient.fetch<NewsSitemapEntry[]>(NEWS_SITEMAP_QUERY);
}
