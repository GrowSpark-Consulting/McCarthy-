'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getMegaMenuId, PREFETCH_SITE_ROUTES, PRIMARY_NAV } from '@/lib/navigation';
import { cn } from '@/lib/utils';

interface HeaderNavProps {
  readonly className?: string;
  /** Id (from `getMegaMenuId`) of the currently open mega menu, if any. */
  readonly activeMegaMenu: string | null;
  /** Toggles a mega menu open/closed — clicking the open trigger again closes it. */
  readonly onToggleMegaMenu: (id: string) => void;
}

const TRIGGER_CLASS =
  'text-nav flex items-center gap-1 rounded-[var(--radius-control)] px-3 py-2 whitespace-nowrap transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]';

/**
 * Desktop primary navigation inside the floating bar.
 *
 * Items with a `megaMenu` (What we do, Who we are) render as toggle buttons
 * that open the shared `MegaMenu` panel; everything else (Insights, News,
 * Careers) stays a plain route link, matching the reference exactly: 14px/20px
 * labels, 8px/12px padding, 4px hover radius, no gap between items.
 */
export function HeaderNav({ className, activeMegaMenu, onToggleMegaMenu }: HeaderNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={cn('items-center', className)}>
      {PRIMARY_NAV.map((item) => {
        if (item.megaMenu) {
          const menuId = getMegaMenuId(item.label);
          const isOpen = activeMegaMenu === menuId;

          return (
            <button
              key={item.label}
              type="button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls={menuId}
              onClick={() => onToggleMegaMenu(menuId)}
              className={cn(
                TRIGGER_CLASS,
                isOpen
                  ? 'bg-ink-inverse/12 text-ink-inverse'
                  : 'text-ink-inverse/85 hover:bg-ink-inverse/10 hover:text-ink-inverse',
              )}
            >
              {item.label}
              <ChevronDown
                aria-hidden="true"
                strokeWidth={1.75}
                className={cn(
                  'size-3.5 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
                  isOpen && 'rotate-180',
                )}
              />
            </button>
          );
        }

        const href = item.href ?? '#';
        const isActive = pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            key={href}
            href={href}
            prefetch={PREFETCH_SITE_ROUTES}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              TRIGGER_CLASS,
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
