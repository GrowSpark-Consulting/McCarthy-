'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, Search } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeaderNav } from '@/components/layout/header-nav';
import { MegaMenu } from '@/components/layout/mega-menu';
import { BrandWordmark } from '@/components/shared/brand-wordmark';
import { ButtonLink } from '@/components/ui/button';
import { useHeaderScrollState } from '@/hooks/use-header-scroll-state';
import { DURATION, EASE } from '@/lib/motion';
import {
  getMegaMenuId,
  hasDarkHero,
  PREFETCH_SITE_ROUTES,
  PRIMARY_CTA,
  PRIMARY_NAV,
} from '@/lib/navigation';
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
 * 16px from the top and both edges, 12px radius, and 56/60/68px tall as the
 * viewport widens. It floats over the hero — the hero starts behind it and is
 * never pushed down.
 *
 * One treatment on every ground: light glass, every value a `--nav-glass-*`
 * token. 55% white where it floats on a full-bleed hero (`hasDarkHero`) so the
 * footage still reads through it, 66% over a light page, 82% once scrolled —
 * all on a 20px backdrop blur at 120% saturation, hairlined in white/30 and
 * lifted by a shadow light enough to read as lift rather than weight. Labels
 * are ink-strong throughout: 5:1 against the thinnest of those grounds, and
 * the readable pairing against glass this light.
 *
 * Behaviour: pointing at the bar — anywhere on it, not just a link — fills it
 * to 92% white over 300ms; releasing returns it to whichever ground the route
 * and scroll position call for. The glass tightens to 82% once the page leaves
 * the hero, and an open mega menu or overlay holds the filled state so the
 * labels never strand themselves over a panel. Nothing ever snaps to a solid
 * white strip — the blur holds through every state. The bar hides on downward
 * scroll and returns immediately on upward scroll.
 */
export function SiteHeader() {
  const { isScrolled, isHidden } = useHeaderScrollState();
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay>(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const closeOverlay = useCallback(() => setActiveOverlay(null), []);
  const closeMegaMenu = useCallback(() => setActiveMegaMenu(null), []);

  const openSearch = useCallback(() => {
    setActiveMegaMenu(null);
    setActiveOverlay('search');
  }, []);

  const openMobileMenu = useCallback(() => {
    setActiveMegaMenu(null);
    setActiveOverlay('menu');
  }, []);

  const toggleMegaMenu = useCallback((id: string) => {
    setActiveOverlay(null);
    setActiveMegaMenu((previous) => (previous === id ? null : id));
  }, []);

  useEffect(() => {
    setActiveOverlay(null);
    setActiveMegaMenu(null);
  }, [pathname]);

  // Outside click / Escape close the mega menu without the full modal
  // machinery `useOverlay` gives the mobile menu and search — it's a
  // dropdown, not a dialog, so focus should stay free.
  useEffect(() => {
    if (!activeMegaMenu) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (barRef.current?.contains(target) || megaMenuRef.current?.contains(target)) {
        return;
      }

      setActiveMegaMenu(null);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeMegaMenu]);

  const isMenuOpen = activeOverlay === 'menu';
  const isSearchOpen = activeOverlay === 'search';
  // The thinnest glass only while the bar genuinely sits on the hero: still at
  // the top, and with nothing open beneath it the labels would strand over.
  const isOverHero =
    hasDarkHero(pathname) && !isScrolled && activeMegaMenu === null && activeOverlay === null;

  // Matches the shell rather than sitting on it: the same glass one step
  // lighter, a hairline rather than a hard ring, never a heavy dark circle.
  const iconButtonClass =
    'flex size-11 items-center justify-center rounded-full border border-[var(--nav-control-border)] bg-[var(--nav-control-bg)] text-ink-strong transition-colors duration-[var(--duration-base)] hover:border-ink/35 hover:bg-[var(--nav-control-bg-hover)]';
  const activeMegaMenuItem = PRIMARY_NAV.find(
    (item) => item.megaMenu && getMegaMenuId(item.label) === activeMegaMenu,
  );

  return (
    <>
      <motion.header
        initial={{ y: '-140%' }}
        animate={{
          y: isHidden && activeOverlay === null && activeMegaMenu === null ? '-140%' : '0%',
        }}
        transition={{ duration: DURATION.slow, ease: EASE.outExpo }}
        className="fixed inset-x-0 top-0 z-50 px-[var(--header-inset)] pt-[var(--header-inset)]"
      >
        <div
          ref={barRef}
          className={cn(
            'group/bar mx-auto flex h-[var(--header-height)] max-w-[120rem] items-center gap-3',
            'rounded-[var(--radius-bar)] border px-5 lg:px-6 xl:px-8',
            'transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-[var(--ease-out-quint)]',
            'shadow-bar border-[var(--nav-glass-border)] backdrop-blur-[var(--nav-glass-blur)] backdrop-saturate-[var(--nav-glass-saturate)]',
            'hover:bg-[var(--nav-glass-bg-active)]',
            isOverHero
              ? 'bg-[var(--nav-glass-bg)]'
              : isScrolled
                ? 'bg-[var(--nav-glass-bg-scrolled)]'
                : 'bg-[var(--nav-glass-bg-page)]',
          )}
        >
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="shrink-0 transition-opacity duration-[var(--duration-base)] hover:opacity-85"
          >
            <BrandWordmark size="sm" tone="ember" />
          </Link>

          <HeaderNav
            className="ml-5 hidden lg:flex xl:ml-9"
            activeMegaMenu={activeMegaMenu}
            onToggleMegaMenu={toggleMegaMenu}
            tone="ink"
          />

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
              className={iconButtonClass}
            >
              <Search aria-hidden="true" strokeWidth={1.75} className="size-[1.15rem]" />
            </button>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls={MOBILE_MENU_ID}
              aria-haspopup="dialog"
              onClick={openMobileMenu}
              className={cn(iconButtonClass, 'lg:hidden')}
            >
              <Menu aria-hidden="true" strokeWidth={1.75} className="size-[1.15rem]" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {activeMegaMenuItem?.megaMenu ? (
          <MegaMenu
            key={activeMegaMenu}
            ref={megaMenuRef}
            id={activeMegaMenu as string}
            label={activeMegaMenuItem.label}
            menu={activeMegaMenuItem.megaMenu}
            onClose={closeMegaMenu}
          />
        ) : null}
      </AnimatePresence>

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
