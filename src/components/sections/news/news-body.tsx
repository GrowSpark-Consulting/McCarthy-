import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

import { croppedDimensions, urlForImage } from '@/lib/sanity/image';
import type { NewsArticleData, NewsBodyImage } from '@/lib/sanity/types';

const BODY_IMAGE_WIDTH = 1600;

function BodyImage({ value }: { value: NewsBodyImage }) {
  const size = croppedDimensions(value);
  const src = urlForImage(value)?.width(BODY_IMAGE_WIDTH).fit('max').url();

  if (!src || !size) {
    return null;
  }

  const width = Math.min(BODY_IMAGE_WIDTH, size.width);
  const height = Math.round((width * size.height) / size.width);
  const lqip = value.asset?.metadata?.lqip;

  return (
    <figure className="mt-10">
      <Image
        src={src}
        alt={value.alt ?? ''}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 72ch, 100vw"
        className="h-auto w-full rounded-[var(--radius-panel)]"
        {...(lqip ? { placeholder: 'blur' as const, blurDataURL: lqip } : {})}
      />
      {value.caption ? (
        <figcaption className="text-legal text-ink-muted mt-3">{value.caption}</figcaption>
      ) : null}
    </figure>
  );
}

/**
 * Portable Text → the site's own type scale. Studio headings are demoted one
 * level visually (`h2` → `text-h3`) because the article title is the page's
 * only `<h1>` and sits at `text-h2`.
 */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-body-lg text-ink-muted mt-6 first:mt-0">{children}</p>
    ),
    h2: ({ children }) => <h2 className="text-h3 text-ink mt-14 first:mt-0">{children}</h2>,
    h3: ({ children }) => <h3 className="text-h4 text-ink mt-10 first:mt-0">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-ember text-body-lg text-ink mt-8 border-l-2 pl-6 first:mt-0">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="text-body-lg text-ink-muted mt-6 list-disc space-y-2 pl-6 first:mt-0">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="text-body-lg text-ink-muted mt-6 list-decimal space-y-2 pl-6 first:mt-0">
        {children}
      </ol>
    ),
  },
  listItem: ({ children }) => <li className="pl-1">{children}</li>,
  marks: {
    strong: ({ children }) => <strong className="text-ink font-medium">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const href = typeof value?.href === 'string' ? value.href : '';
      const className =
        'text-link hover:text-ink underline underline-offset-4 transition-colors duration-[var(--duration-base)]';

      if (href.startsWith('/')) {
        return (
          <Link href={href} className={className}>
            {children}
          </Link>
        );
      }

      const isWeb = /^https?:\/\//.test(href);

      return (
        <a
          href={href}
          className={className}
          {...(isWeb ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: NewsBodyImage }) => <BodyImage value={value} />,
  },
};

interface NewsBodyProps {
  readonly value: NonNullable<NewsArticleData['content']>;
}

export function NewsBody({ value }: NewsBodyProps) {
  return <PortableText value={[...value]} components={components} />;
}
