import { newsCategoryLabel, newsHref } from '@/lib/news';
import type { NewsArticleData } from '@/lib/sanity/types';
import { siteConfig } from '@/lib/site-config';

interface NewsJsonLdProps {
  readonly article: NewsArticleData;
  readonly imageUrl: string | undefined;
}

/**
 * `NewsArticle` structured data. Publisher (and the author, when no byline is
 * set) point at the site-wide Organization node emitted by `StructuredData`,
 * so the graph stays connected rather than duplicating the organisation.
 */
export function NewsJsonLd({ article, imageUrl }: NewsJsonLdProps) {
  const url = `${siteConfig.url}${newsHref(article.slug)}`;
  const organization = { '@id': `${siteConfig.url}/#organization` };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${url}#article`,
    url,
    mainEntityOfPage: url,
    headline: article.title,
    description: article.seoDescription ?? article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article._updatedAt,
    articleSection: newsCategoryLabel(article.category),
    inLanguage: 'en',
    ...(imageUrl ? { image: [imageUrl] } : {}),
    author: article.author ? { '@type': 'Person', name: article.author } : organization,
    publisher: organization,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
  };

  return (
    <script
      type="application/ld+json"
      // Article fields are editor-supplied, so `<` is escaped to keep a
      // stray `</script>` in CMS content from breaking out of the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}
