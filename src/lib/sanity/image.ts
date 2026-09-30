import { createImageUrlBuilder, type ImageUrlBuilder } from '@sanity/image-url';

import { sanityDataset, sanityProjectId } from '@/lib/sanity/env';
import type { SanityImage } from '@/lib/sanity/types';

const builder = createImageUrlBuilder({ projectId: sanityProjectId, dataset: sanityDataset });

/**
 * URL builder for a projected Sanity image, honouring the editor's crop and
 * hotspot. Returns `null` when no asset is attached. Chain sizing, e.g.
 * `urlForImage(img)?.width(1200).height(630).fit('crop').url()`.
 */
export function urlForImage(image: SanityImage | null | undefined): ImageUrlBuilder | null {
  if (!image?.asset?._id) {
    return null;
  }

  return builder
    .image({
      asset: { _ref: image.asset._id },
      crop: image.crop ?? undefined,
      hotspot: image.hotspot ?? undefined,
    })
    .auto('format');
}

/** Intrinsic size after the editor's crop is applied — keeps `next/image` ratios exact. */
export function croppedDimensions(image: SanityImage): { width: number; height: number } | null {
  const dimensions = image.asset?.metadata?.dimensions;

  if (!dimensions) {
    return null;
  }

  const crop = image.crop;
  const width = dimensions.width * (1 - (crop?.left ?? 0) - (crop?.right ?? 0));
  const height = dimensions.height * (1 - (crop?.top ?? 0) - (crop?.bottom ?? 0));

  return { width: Math.round(width), height: Math.round(height) };
}
