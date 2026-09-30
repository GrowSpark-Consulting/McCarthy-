import type { PortableTextBlock } from '@portabletext/react';

/**
 * Hand-written shapes of the GROQ projections in `queries.ts`. GROQ returns
 * `null` (not `undefined`) for missing fields, so optional data is typed as
 * nullable.
 */

export interface SanityImageCrop {
  readonly top: number;
  readonly bottom: number;
  readonly left: number;
  readonly right: number;
}

export interface SanityImageHotspot {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

export interface SanityImage {
  readonly alt: string | null;
  readonly crop: SanityImageCrop | null;
  readonly hotspot: SanityImageHotspot | null;
  readonly asset: {
    readonly _id: string;
    readonly url: string;
    readonly metadata: {
      readonly lqip: string | null;
      readonly dimensions: { readonly width: number; readonly height: number } | null;
    } | null;
  } | null;
}

/** An inline image inside the article body. */
export interface NewsBodyImage extends SanityImage {
  readonly _type: 'image';
  readonly _key: string;
  readonly caption?: string | null;
}

export interface NewsCardData {
  readonly _id: string;
  readonly title: string;
  readonly slug: string;
  readonly excerpt: string;
  readonly category: string | null;
  readonly publishedAt: string;
  readonly coverImage: SanityImage | null;
}

export interface NewsArticleData extends NewsCardData {
  readonly _updatedAt: string;
  readonly author: string | null;
  readonly seoTitle: string | null;
  readonly seoDescription: string | null;
  readonly content: ReadonlyArray<PortableTextBlock | NewsBodyImage> | null;
}

export interface NewsSitemapEntry {
  readonly slug: string;
  readonly _updatedAt: string;
}
