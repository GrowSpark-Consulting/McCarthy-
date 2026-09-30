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
  /** `inverse` while the bar rides a dark hero transparently. */
  readonly tone?: NavTone;
}

type NavTone = 'ink' | 'inverse';

const TRIGGER_CLASS =
  'text-nav flex items-center gap-1 rounded-[var(--radius-control)] px-3 py-2 whitespace-nowrap transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]';

/**
 * Label colours per bar tone.
 *
 * `inverse` needs no plain `hover:` rules — hovering a label necessarily
 * hovers the bar, so `group-hover/bar` covers it, and the stacked
 * `group-hover/bar:hover:` pair outranks it on specificity rather than on
 * source order. That is what lets the labels turn back to ink in step with
 * the bar filling to white.
 */
const TONE_CLASS: Record<NavTone, { readonly idle: string; readonly active: string }> = {
  ink: {
    idle: 'text-ink-strong hover:bg-ink/8',
    active: 'bg-ink/8 text-ink-strong',
  },
  inverse: {
    idle: 'text-ink-inverse/90 group-hover/bar:text-ink group-hover/bar:hover:bg-ink/5 group-hover/bar:hover:text-ink-strong',
    active:
      'bg-ink-inverse/12 text-ink-inverse group-hover/bar:bg-ink/8 group-hover/bar:text-ink-strong',
  },
};

/**
 * Desktop primary navigation inside the floating bar.
 *
 * Items with a `megaMenu` (What we do, Who we are) render as toggle buttons
 * that open the shared `MegaMenu` panel; everything else (Insights, News,
 * Careers) stays a plain route link, matching the reference exactly: 14px/20px
 * labels, 8px/12px padding, 4px hover radius, no gap between items.
 */
export function HeaderNav({
  className,
  activeMegaMenu,
  onToggleMegaMenu,
  tone = 'ink',
}: HeaderNavProps) {
  const pathname = usePathname();
  const toneClass = TONE_CLASS[tone];

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
              className={cn(TRIGGER_CLASS, isOpen ? toneClass.active : toneClass.idle)}
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
            className={cn(TRIGGER_CLASS, isActive ? toneClass.active : toneClass.idle)}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
