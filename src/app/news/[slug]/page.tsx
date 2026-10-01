import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { SiteFooter } from '@/components/layout/site-footer';
import { Connect } from '@/components/sections/connect';
import { NewsBody } from '@/components/sections/news/news-body';
import { NewsJsonLd } from '@/components/sections/news/news-json-ld';
import { ArrowLink } from '@/components/shared/arrow-link';
import {
  formatNewsDate,
  getNewsBySlug,
  getNewsSlugs,
  newsCategoryLabel,
  newsHref,
} from '@/lib/news';
import { urlForImage } from '@/lib/sanity/image';
import type { NewsArticleData } from '@/lib/sanity/types';
import { siteConfig } from '@/lib/site-config';

/** ISR safety net; publishing also revalidates this page on demand via webhook. */
export const revalidate = 60;

interface NewsArticlePageProps {
  readonly params: Promise<{ slug: string }>;
}

/** Pre-renders every published article; newer slugs render on first request. */
export async function generateStaticParams() {
  const slugs = await getNewsSlugs();

  return slugs.map((slug) => ({ slug }));
}

/** 1200×630 crop of the cover, honouring the editor's hotspot. */
function socialImageUrl(article: NewsArticleData): string | undefined {
  return urlForImage(article.coverImage)?.width(1200).height(630).fit('crop').url();
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  // Thrown here as well as in the page: metadata resolves before the root
  // `loading.tsx` Suspense boundary streams, so this is what makes an unknown
  // or unpublished slug answer with a real 404 status instead of a 200.
  if (!article) {
    notFound();
  }

  const fullTitle = article.seoTitle ?? `${article.title} | ${siteConfig.name}`;
  const description = article.seoDescription ?? article.excerpt;
  const path = newsHref(article.slug);
  const image = socialImageUrl(article);
  const images = image
    ? [{ url: image, width: 1200, height: 630, alt: article.coverImage?.alt ?? article.title }]
    : undefined;

  return {
    // An SEO title is a complete override; otherwise the layout's template
    // appends " | McCarthy".
    title: article.seoTitle ? { absolute: article.seoTitle } : article.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url: `${siteConfig.url}${path}`,
      locale: siteConfig.locale,
      publishedTime: article.publishedAt,
      modifiedTime: article._updatedAt,
      section: newsCategoryLabel(article.category),
      ...(article.author ? { authors: [article.author] } : {}),
      ...(images ? { images } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(images ? { images } : {}),
    },
  };
}

/** A single News article. Unknown, draft, scheduled or unpublished slugs 404. */
export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  const cover = article.coverImage;
  const coverSrc = urlForImage(cover)?.width(2400).height(1350).fit('crop').url();
  const lqip = cover?.asset?.metadata?.lqip;

  return (
    <>
      <article>
        <header className="bg-canvas pt-[calc(var(--header-band)+2.5rem)] pb-10 lg:pb-14">
          <div className="container-page">
            <p className="eyebrow-rule text-eyebrow text-ink uppercase">
              {newsCategoryLabel(article.category)}
            </p>
            <h1 className="text-h2 text-ink mt-6 max-w-[22ch]">{article.title}</h1>
            <p className="text-body-lg text-ink-muted mt-6 max-w-[62ch]">{article.excerpt}</p>
            <p className="text-legal text-ink-muted mt-6 tracking-wide uppercase">
              <time dateTime={article.publishedAt}>{formatNewsDate(article.publishedAt)}</time>
              {article.author ? <span> · {article.author}</span> : null}
            </p>
          </div>
        </header>

        {coverSrc ? (
          <div className="bg-canvas">
            <div className="container-page">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-panel)]">
                <Image
                  src={coverSrc}
                  alt={cover?.alt ?? ''}
                  fill
                  priority
                  sizes="(min-width: 1440px) 1376px, 100vw"
                  className="object-cover"
                  {...(lqip ? { placeholder: 'blur' as const, blurDataURL: lqip } : {})}
                />
              </div>
            </div>
          </div>
        ) : null}

        <div className="bg-canvas py-[var(--section-py)]">
          <div className="container-page">
            {article.content?.length ? (
              <div className="max-w-[72ch]">
                <NewsBody value={article.content} />
              </div>
            ) : null}

            <div className="mt-12">
              <ArrowLink href="/news">More news from McCarthy</ArrowLink>
            </div>
          </div>
        </div>
      </article>

      <NewsJsonLd article={article} imageUrl={socialImageUrl(article)} />
      <Connect />
      <SiteFooter />
    </>
  );
}
