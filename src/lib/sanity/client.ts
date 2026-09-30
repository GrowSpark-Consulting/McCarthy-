import { createClient } from '@sanity/client';

import { sanityApiVersion, sanityDataset, sanityProjectId } from '@/lib/sanity/env';

/**
 * Read-only Sanity client for News.
 *
 * - No token: the dataset is public-read, and only published content is ever
 *   fetched.
 * - `perspective: 'published'` guarantees drafts can never be returned.
 * - `useCdn: true` serves reads from Sanity's API CDN; freshness is handled by
 *   ISR plus the signed revalidation webhook.
 */
export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
  perspective: 'published',
});
