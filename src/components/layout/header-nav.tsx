'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { PREFETCH_SITE_ROUTES, PRIMARY_NAV } from '@/lib/navigation';
import { cn } from '@/lib/utils';

interface HeaderNavProps {
  readonly className?: string;
}

/**
 * Desktop primary navigation inside the floating bar.
 *
 * Matches the reference exactly: 14px/20px labels, 8px/12px padding, 4px hover
 * radius, no gap between items (the padding supplies the rhythm).
 */
export function HeaderNav({ className }: HeaderNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={cn('items-center', className)}>
      {PRIMARY_NAV.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            prefetch={PREFETCH_SITE_ROUTES}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'text-nav rounded-[var(--radius-control)] px-3 py-2 whitespace-nowrap',
              'transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
              isActive
                ? 'bg-ink-inverse/12 text-ink-inverse'
                : 'text-ink-inverse/85 hover:bg-ink-inverse/10 hover:text-ink-inverse',
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
