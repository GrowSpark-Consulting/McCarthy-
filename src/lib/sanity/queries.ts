/**
 * GROQ queries for News.
 *
 * An article is live when it is a published (non-draft) `newsPost` with a slug
 * and a `publishedAt` that is not in the future — there is no status flag.
 * Scheduling is done by setting `publishedAt` ahead.
 */
const PUBLISHED_NEWS = `_type == "newsPost" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()`;

/** `crop` and `hotspot` are projected so editors' framing is honoured. */
const IMAGE_PROJECTION = `{
  alt,
  crop,
  hotspot,
  asset->{ _id, url, metadata { lqip, dimensions { width, height } } }
}`;

const CARD_PROJECTION = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  coverImage ${IMAGE_PROJECTION}
`;

/** `/news` listing, newest first. */
export const NEWS_LIST_QUERY = `*[${PUBLISHED_NEWS}] | order(publishedAt desc) { ${CARD_PROJECTION} }`;

/** Homepage "Latest from McCarthy" strip. */
export const NEWS_LATEST_QUERY = `*[${PUBLISHED_NEWS}] | order(publishedAt desc) [0...3] { ${CARD_PROJECTION} }`;

/** `/news/[slug]` article. */
export const NEWS_BY_SLUG_QUERY = `*[${PUBLISHED_NEWS} && slug.current == $slug][0] {
  ${CARD_PROJECTION},
  _updatedAt,
  author,
  seoTitle,
  seoDescription,
  content[] {
    ...,
    _type == "image" => ${IMAGE_PROJECTION}
  }
}`;

/** `generateStaticParams` for `/news/[slug]`. */
export const NEWS_SLUGS_QUERY = `*[${PUBLISHED_NEWS}].slug.current`;

/** Sitemap entries. */
export const NEWS_SITEMAP_QUERY = `*[${PUBLISHED_NEWS}] | order(publishedAt desc) {
  "slug": slug.current,
  _updatedAt
}`;
