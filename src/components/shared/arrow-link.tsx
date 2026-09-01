import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';
import { cn } from '@/lib/utils';

interface ArrowLinkProps {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly className?: string;
  /** Inverts the palette for use on dark panels and imagery. */
  readonly tone?: 'link' | 'ink' | 'ember' | 'inverse';
}

const TONE_CLASS: Record<NonNullable<ArrowLinkProps['tone']>, string> = {
  link: 'text-link hover:text-ink',
  ink: 'text-ink hover:text-ember',
  ember: 'text-ember-text hover:text-ember-deep',
  inverse: 'text-ink-inverse hover:text-ink-inverse/75',
};

/**
 * The reference's standard inline text link: label plus a chevron that nudges
 * forward on hover. Used under every card, column and content block.
 */
export function ArrowLink({ href, children, className, tone = 'link' }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      prefetch={PREFETCH_SITE_ROUTES}
      className={cn(
        'group/link text-body inline-flex items-center gap-1.5',
        'transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
        TONE_CLASS[tone],
        className,
      )}
    >
      {children}
      <ChevronRight
        aria-hidden="true"
        strokeWidth={1.5}
        className="size-4 shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/link:translate-x-1"
      />
    </Link>
  );
}
