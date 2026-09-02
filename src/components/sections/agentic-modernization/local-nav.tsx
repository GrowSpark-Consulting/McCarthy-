'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { useSmoothScroll } from '@/components/providers/smooth-scroll-provider';
import { AMOD_BREADCRUMB, AMOD_LOCAL_NAV } from '@/content/agentic-modernization';
import { cn } from '@/lib/utils';

/** Fraction of the viewport used as the "current section" line. */
const ACTIVE_LINE_RATIO = 0.35;

/**
 * Breadcrumb plus local page nav — the reference's row of section-jump links
 * sitting just under the global header.
 *
 * Deliberately distinct from the homepage's `SectionTabs`: that's a floating
 * rounded pill built for the marketing homepage. This reads as a plain,
 * understated tab strip with a bottom rule — the way an enterprise consulting
 * subpage's local nav does — and it docks flush under the header rather than
 * floating with a gap.
 *
 * `mt-[var(--header-band)]` gives it the same static top offset as its sticky
 * `top`, so it starts already in its pinned position with no jump on scroll.
 */
export function LocalNav() {
  const [activeId, setActiveId] = useState(() => AMOD_LOCAL_NAV[0]?.href.replace('#', '') ?? '');
  const lenis = useSmoothScroll();

  useEffect(() => {
    const ids = AMOD_LOCAL_NAV.map((item) => item.href.replace('#', ''));

    const updateActive = () => {
      const line = window.innerHeight * ACTIVE_LINE_RATIO;
      let current = ids[0] ?? '';

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= line) {
          current = id;
        }
      }

      setActiveId((previous) => (previous === current ? previous : current));
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.getElementById(href.replace('#', ''));
    if (!target) return;

    event.preventDefault();

    if (lenis) {
      lenis.scrollTo(target, { offset: -120 });
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="border-hairline bg-canvas/95 sticky top-[var(--header-band)] z-30 mt-[var(--header-band)] border-b backdrop-blur-sm">
      <div className="container-page flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-5">
        <nav aria-label="Breadcrumb" className="text-legal text-ink-muted flex items-center gap-2">
          {AMOD_BREADCRUMB.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-ink-strong transition-colors duration-[var(--duration-base)]"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <nav aria-label="Page sections" className="-mx-1 flex items-center gap-1 overflow-x-auto">
          {AMOD_LOCAL_NAV.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = id === activeId;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleClick(event, item.href)}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'text-nav rounded-[var(--radius-control)] px-3 py-2 whitespace-nowrap',
                  'transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
                  isActive ? 'bg-ink/8 text-ink-strong' : 'text-ink-muted hover:bg-ink/5 hover:text-ink-strong',
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
