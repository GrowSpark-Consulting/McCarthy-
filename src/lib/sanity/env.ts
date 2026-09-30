/**
 * Public Sanity configuration for the News CMS.
 *
 * There are deliberately no fallback values: a missing variable fails the
 * build (or the request) loudly instead of silently pointing the site at the
 * wrong project. Each variable is referenced statically so Next.js can inline
 * it at build time. See `.env.example`.
 */
function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing environment variable ${name}. See .env.example.`);
  }

  return value;
}

export const sanityProjectId = required(
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
);

export const sanityDataset = required(
  'NEXT_PUBLIC_SANITY_DATASET',
  process.env.NEXT_PUBLIC_SANITY_DATASET,
);

/** A pinned date, so a Sanity API change can never alter query results unannounced. */
export const sanityApiVersion = required(
  'NEXT_PUBLIC_SANITY_API_VERSION',
  process.env.NEXT_PUBLIC_SANITY_API_VERSION,
);
