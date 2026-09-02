'use client';

import { forwardRef } from 'react';

import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

import { Eyebrow } from '@/components/shared/eyebrow';
import { PlaceholderFrame } from '@/components/shared/placeholder-frame';
import { IconButton } from '@/components/ui/icon-button';
import { DURATION, EASE } from '@/lib/motion';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import type { MegaMenu as MegaMenuData } from '@/types/navigation';

interface MegaMenuProps {
  readonly id: string;
  readonly label: string;
  readonly menu: MegaMenuData;
  readonly onClose: () => void;
}

/**
 * A single dropdown link.
 *
 * The underline is a zero-width rule that grows to the label's width on
 * hover/focus — the reference's subtle orange trace, not a static underline.
 */
function MegaMenuLink({ href, children }: { readonly href: string; readonly children: string }) {
  return (
    <Link
      href={href}
      prefetch={PREFETCH_SITE_ROUTES}
      className="group/menulink text-ink-muted hover:text-ink-strong inline-block w-fit transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]"
    >
      <span className="text-body relative inline-block pb-1">
        {children}
        <span
          aria-hidden="true"
          className="bg-ember absolute bottom-0 left-0 h-px w-0 transition-[width] duration-[var(--duration-base)] ease-[var(--ease-out-quint)] group-hover/menulink:w-full"
        />
      </span>
    </Link>
  );
}

/**
 * Mega menu: a floating white panel beneath the header bar with
 * orange section headings, a subtle underline on link hover, and a spotlight
 * card on the right — the reference's overlay treatment: eyebrow above the
 * crop, then title, body and a circular arrow set over a scrim on the image
 * itself, the whole card one link. Data-driven so "What we do" and "Who we
 * are" share one implementation.
 *
 * Positioned to match the floating header's own inset and max-width rather
 * than going full-bleed, so it reads as part of the same bar rather than a
 * separate full-width strip.
 */
export const MegaMenu = forwardRef<HTMLDivElement, MegaMenuProps>(function MegaMenu(
  { id, label, menu, onClose },
  ref,
) {
  const columnCount = menu.columns.length;

  return (
    <motion.div
      ref={ref}
      id={id}
      role="region"
      aria-label={`${label} menu`}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, transition: { duration: DURATION.fast, ease: EASE.outQuint } }}
      transition={{ duration: DURATION.base, ease: EASE.outExpo }}
      className="fixed inset-x-0 z-40 px-[var(--header-inset)]"
      style={{ top: 'calc(var(--header-band) + 0.5rem)' }}
    >
      <div className="mx-auto max-w-[120rem]">
        <div className="border-hairline bg-white/92 relative max-h-[calc(100svh-var(--header-band)-2rem)] overflow-y-auto rounded-[var(--radius-bar)] border p-6 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.18)] backdrop-blur-[14px] sm:p-8 lg:p-10">
          <IconButton
            aria-label={`Close ${label} menu`}
            variant="outline"
            size="sm"
            onClick={onClose}
            className="absolute top-5 right-5 sm:top-6 sm:right-6 lg:top-8 lg:right-8"
          >
            <X aria-hidden="true" strokeWidth={1.75} className="size-4" />
          </IconButton>

          <div className="flex flex-col gap-10 pr-12 xl:flex-row xl:items-start xl:justify-between xl:pr-16">
            <div
              className={cn(
                'grid flex-1 gap-x-8 gap-y-9 sm:grid-cols-2',
                columnCount >= 4 ? 'xl:grid-cols-4' : 'xl:grid-cols-3',
              )}
            >
              {menu.columns.map((group, groupIndex) => (
                <div key={groupIndex} className="flex flex-col gap-8">
                  {group.map((column) => (
                    <div key={column.heading} className="flex flex-col gap-4">
                      <h3 className="text-eyebrow text-ember uppercase">{column.heading}</h3>
                      <ul className="flex flex-col gap-2">
                        {column.links.map((link) => (
                          <li key={link.href}>
                            <MegaMenuLink href={link.href}>{link.label}</MegaMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <aside className="border-hairline flex w-full flex-col gap-4 border-t pt-8 xl:w-72 xl:shrink-0 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-10">
              <Eyebrow>{menu.spotlight.eyebrow}</Eyebrow>

              <Link
                href={menu.spotlight.link.href}
                prefetch={PREFETCH_SITE_ROUTES}
                aria-label={menu.spotlight.link.label}
                className="group/spotlight focus-visible:outline-ember relative flex min-h-60 flex-col justify-end overflow-hidden rounded-[var(--radius-bar)] focus-visible:outline-2 focus-visible:outline-offset-3 xl:min-h-[22rem]"
              >
                <PlaceholderFrame
                  label="Spotlight image"
                  tone="light"
                  className="absolute inset-0 h-full"
                />

                {/* Reads the title over any crop — the same bottom-up scrim the
                    hero and AI Lab bands use over their footage. */}
                <div
                  aria-hidden="true"
                  className="from-abyss-deep via-abyss-deep/85 absolute inset-x-0 top-1/4 bottom-0 bg-gradient-to-t to-transparent"
                />

                <div className="relative flex flex-col gap-2.5 p-5">
                  <h4 className="text-card text-ink-inverse">{menu.spotlight.title}</h4>
                  <p className="text-body text-ink-inverse/85">{menu.spotlight.body}</p>
                  <span
                    aria-hidden="true"
                    className="border-ink-inverse/45 text-ink-inverse group-hover/spotlight:bg-ink-inverse group-hover/spotlight:text-ink-strong group-hover/spotlight:border-ink-inverse mt-2 flex size-9 shrink-0 items-center justify-center self-end rounded-full border transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]"
                  >
                    <ArrowRight strokeWidth={1.75} className="size-4" />
                  </span>
                </div>
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
