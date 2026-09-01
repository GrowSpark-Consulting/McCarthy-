'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';
import { ChevronRight, Search, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BrandWordmark } from '@/components/shared/brand-wordmark';
import { ButtonLink } from '@/components/ui/button';
import { useOverlay } from '@/hooks/use-overlay';
import { DURATION, EASE, fadeUp, staggerContainer } from '@/lib/motion';
import { PREFETCH_SITE_ROUTES, PRIMARY_CTA, PRIMARY_NAV } from '@/lib/navigation';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

const ROW_STAGGER = 0.055;

interface MobileMenuProps {
  readonly id: string;
  readonly onClose: () => void;
  readonly onOpenSearch: () => void;
}

/**
 * Full-screen navigation for viewports below `lg`.
 *
 * The panel repeats the floating bar's geometry at the top so the wordmark
 * stays anchored and only the trigger appears to morph into a close button.
 * Loaded on demand, so it never ships in the desktop bundle.
 */
export function MobileMenu({ id, onClose, onOpenSearch }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useOverlay({ containerRef, open: true, onClose });

  return (
    <motion.div
      ref={containerRef}
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      tabIndex={-1}
      initial={{ opacity: 0, y: '-1.5%' }}
      animate={{ opacity: 1, y: '0%' }}
      exit={{
        opacity: 0,
        y: '-1.5%',
        transition: { duration: DURATION.base, ease: EASE.outQuint },
      }}
      transition={{ duration: DURATION.slow, ease: EASE.outExpo }}
      className="bg-abyss-deep/98 fixed inset-0 z-60 flex flex-col overflow-y-auto overscroll-contain backdrop-blur-2xl lg:hidden"
    >
      <div className="flex h-[var(--header-band)] shrink-0 items-center justify-between px-[calc(var(--header-inset)+1rem)]">
        <Link href="/" onClick={onClose} aria-label={`${siteConfig.name} home`}>
          <BrandWordmark size="sm" tone="ember" />
        </Link>

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={onClose}
          className="border-ink-inverse/35 text-ink-inverse hover:border-ink-inverse hover:bg-ink-inverse/10 flex size-11 items-center justify-center rounded-full border transition-colors"
        >
          <X aria-hidden="true" strokeWidth={1.75} className="size-[1.15rem]" />
        </button>
      </div>

      <motion.div
        variants={staggerContainer(ROW_STAGGER, 0.08)}
        initial="hidden"
        animate="visible"
        className="container-page flex flex-1 flex-col gap-10 pt-4 pb-12"
      >
        <nav aria-label="Primary" className="flex flex-col">
          {PRIMARY_NAV.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <motion.div key={item.href} variants={fadeUp}>
                <Link
                  href={item.href}
                  prefetch={PREFETCH_SITE_ROUTES}
                  onClick={onClose}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'group/link border-ink-inverse/12 flex items-center justify-between gap-4 border-b py-5',
                    'transition-colors duration-[var(--duration-base)]',
                    isActive ? 'text-ink-inverse' : 'text-ink-inverse/85 hover:text-ink-inverse',
                  )}
                >
                  <span className="text-h3 font-light">{item.label}</span>
                  <ChevronRight
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="text-ink-inverse/50 size-5 shrink-0 transition-transform duration-[var(--duration-base)] group-hover/link:translate-x-1"
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <motion.div variants={fadeUp} className="flex flex-col gap-3">
          <ButtonLink
            href={PRIMARY_CTA.href}
            prefetch={PREFETCH_SITE_ROUTES}
            onClick={onClose}
            aria-label={PRIMARY_CTA.ariaLabel ?? PRIMARY_CTA.label}
            variant="verde"
            shape="pill"
            size="control"
            block
          >
            {PRIMARY_CTA.label}
          </ButtonLink>

          <button
            type="button"
            onClick={onOpenSearch}
            className="border-ink-inverse/35 text-body text-ink-inverse hover:border-ink-inverse hover:bg-ink-inverse/10 inline-flex min-h-[3.125rem] w-full items-center justify-center gap-2 rounded-full border px-4 py-3 transition-colors duration-[var(--duration-base)]"
          >
            <Search aria-hidden="true" strokeWidth={1.75} className="size-4" />
            Search {siteConfig.name}
          </button>
        </motion.div>

        <motion.p variants={fadeUp} className="text-eyebrow text-ink-inverse/55 uppercase">
          {siteConfig.locations.join(' · ')}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
