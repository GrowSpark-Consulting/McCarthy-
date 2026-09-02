'use client';

import { useEffect, useState } from 'react';

import { SECTION_TABS } from '@/content/homepage';
import { useSmoothScroll } from '@/components/providers/smooth-scroll-provider';
import { cn } from '@/lib/utils';

/** Fraction of the viewport used as the "current section" line. */
const ACTIVE_LINE_RATIO = 0.35;

/**
 * Section 4 — the sticky in-page tab pill.
 *
 * Reproduces the reference exactly: a white glass pill floating below the
 * header (48px tall, fully rounded, 88% white over a 14px backdrop blur so
 * the page reads faintly through it, hairlined in white/65 and lifted by a
 * soft shadow) whose active item is a black pill with white text, updating
 * as you scroll past each anchored section.
 *
 * Scrolling is handed to Lenis when it is running so the jump matches the rest
 * of the page's motion, with a native fallback under reduced motion.
 */
export function SectionTabs() {
  const [activeId, setActiveId] = useState<string>(() =>
    (SECTION_TABS[0]?.href ?? '#').replace('#', ''),
  );
  const lenis = useSmoothScroll();

  useEffect(() => {
    const ids = SECTION_TABS.map((tab) => tab.href.replace('#', ''));

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
    <div className="pointer-events-none sticky top-[calc(var(--header-band)+0.5rem)] z-40 flex justify-center px-[var(--page-gutter)]">
      <nav
        aria-label="Page sections"
        className="border-white/65 bg-white/88 shadow-tabs pointer-events-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-full border p-1.5 backdrop-blur-[14px]"
      >
        {SECTION_TABS.map((tab) => {
          const id = tab.href.replace('#', '');
          const isActive = id === activeId;

          return (
            <a
              key={tab.href}
              href={tab.href}
              onClick={(event) => handleClick(event, tab.href)}
              aria-current={isActive ? 'true' : undefined}
              className={cn(
                'rounded-full px-4 py-2 text-[0.75rem] leading-[1.125rem] whitespace-nowrap',
                'transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
                isActive
                  ? 'bg-ink-strong text-ink-inverse'
                  : 'text-ink hover:bg-surface-warm hover:text-ink-strong',
              )}
            >
              {tab.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
