'use client';

import { useCallback, useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, Search } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeaderNav } from '@/components/layout/header-nav';
import { BrandWordmark } from '@/components/shared/brand-wordmark';
import { ButtonLink } from '@/components/ui/button';
import { useHeaderScrollState } from '@/hooks/use-header-scroll-state';
import { DURATION, EASE } from '@/lib/motion';
import { PREFETCH_SITE_ROUTES, PRIMARY_CTA } from '@/lib/navigation';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

/** Overlays are fetched the first time they open, never on initial load. */
const MobileMenu = dynamic(
  () => import('@/components/layout/mobile-menu').then((module) => module.MobileMenu),
  { ssr: false },
);

const SearchOverlay = dynamic(
  () => import('@/components/layout/search-overlay').then((module) => module.SearchOverlay),
  { ssr: false },
);

const MOBILE_MENU_ID = 'mobile-navigation';
const SEARCH_OVERLAY_ID = 'site-search';

type ActiveOverlay = 'menu' | 'search' | null;

/**
 * Site header.
 *
 * Reproduces the reference's floating bar rather than a full-bleed strip: inset
 * 16px from the top and both edges, 60px tall, 8px radius, translucent dark
 * glass over the hero. Measured from the live site at 1536/1440/768/390 — the
 * inset and height hold at every breakpoint.
 *
 * Behaviour: the bar darkens once the page leaves the hero, hides on downward
 * scroll and returns immediately on upward scroll.
 */
export function SiteHeader() {
  const { isScrolled, isHidden } = useHeaderScrollState();
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay>(null);
  const pathname = usePathname();

  const closeOverlay = useCallback(() => setActiveOverlay(null), []);
  const openSearch = useCallback(() => setActiveOverlay('search'), []);

  useEffect(() => {
    setActiveOverlay(null);
  }, [pathname]);

  const isMenuOpen = activeOverlay === 'menu';
  const isSearchOpen = activeOverlay === 'search';

  return (
    <>
      <motion.header
        initial={{ y: '-140%' }}
        animate={{ y: isHidden && activeOverlay === null ? '-140%' : '0%' }}
        transition={{ duration: DURATION.slow, ease: EASE.outExpo }}
        className="fixed inset-x-0 top-0 z-50 px-[var(--header-inset)] pt-[var(--header-inset)]"
      >
        <div
          className={cn(
            'mx-auto flex h-[var(--header-height)] max-w-[120rem] items-center gap-3',
            'rounded-[var(--radius-bar)] px-4 backdrop-blur-xl lg:px-6',
            'transition-[background-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
            isScrolled ? 'bg-abyss-deep/92 shadow-bar' : 'bg-abyss/55',
          )}
        >
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="shrink-0 transition-opacity duration-[var(--duration-base)] hover:opacity-85"
          >
            <BrandWordmark size="sm" tone="ember" />
          </Link>

          <HeaderNav className="ml-6 hidden lg:flex xl:ml-9" />

          <div className="ml-auto flex items-center gap-2">
            <ButtonLink
              href={PRIMARY_CTA.href}
              prefetch={PREFETCH_SITE_ROUTES}
              aria-label={PRIMARY_CTA.ariaLabel ?? PRIMARY_CTA.label}
              variant="verde"
              shape="pill"
              size="nav"
              className="hidden sm:inline-flex"
            >
              {PRIMARY_CTA.label}
              <span
                aria-hidden="true"
                className="bg-verde-ink/12 flex size-7 items-center justify-center rounded-full transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/button:translate-x-0.5"
              >
                <ArrowRight strokeWidth={1.75} className="size-4" />
              </span>
            </ButtonLink>

            <button
              type="button"
              aria-label={`Search ${siteConfig.name}`}
              aria-expanded={isSearchOpen}
              aria-controls={SEARCH_OVERLAY_ID}
              aria-haspopup="dialog"
              onClick={openSearch}
              className="border-ink-inverse/35 text-ink-inverse hover:border-ink-inverse hover:bg-ink-inverse/10 flex size-11 items-center justify-center rounded-full border transition-colors duration-[var(--duration-base)]"
            >
              <Search aria-hidden="true" strokeWidth={1.75} className="size-[1.15rem]" />
            </button>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls={MOBILE_MENU_ID}
              aria-haspopup="dialog"
              onClick={() => setActiveOverlay('menu')}
              className="border-ink-inverse/35 text-ink-inverse hover:border-ink-inverse hover:bg-ink-inverse/10 flex size-11 items-center justify-center rounded-full border transition-colors duration-[var(--duration-base)] lg:hidden"
            >
              <Menu aria-hidden="true" strokeWidth={1.75} className="size-[1.15rem]" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen ? (
          <MobileMenu
            key="mobile-menu"
            id={MOBILE_MENU_ID}
            onClose={closeOverlay}
            onOpenSearch={openSearch}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen ? (
          <SearchOverlay key="search-overlay" id={SEARCH_OVERLAY_ID} onClose={closeOverlay} />
        ) : null}
      </AnimatePresence>
    </>
  );
}
