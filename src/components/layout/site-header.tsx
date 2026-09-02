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
import { getMegaMenuId, PREFETCH_SITE_ROUTES, PRIMARY_CTA, PRIMARY_NAV } from '@/lib/navigation';
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
 * 16px from the top and both edges, 60px tall, 8px radius. Predominantly white
 * glass — 78% white over a 16px backdrop blur, so the hero reads faintly
 * through it — hairlined in white/40 and lifted by a soft shadow. Measured
 * from the live site at 1536/1440/768/390 — the inset and height hold at
 * every breakpoint.
 *
 * Behaviour: the glass tightens to 90% once the page leaves the hero, hides
 * on downward scroll and returns immediately on upward scroll.
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
  const activeMegaMenuItem = PRIMARY_NAV.find(
    (item) => item.megaMenu && getMegaMenuId(item.label) === activeMegaMenu,
  );

  return (
    <>
      <motion.header
        initial={{ y: '-140%' }}
        animate={{ y: isHidden && activeOverlay === null && activeMegaMenu === null ? '-140%' : '0%' }}
        transition={{ duration: DURATION.slow, ease: EASE.outExpo }}
        className="fixed inset-x-0 top-0 z-50 px-[var(--header-inset)] pt-[var(--header-inset)]"
      >
        <div
          ref={barRef}
          className={cn(
            'mx-auto flex h-[var(--header-height)] max-w-[120rem] items-center gap-3',
            'rounded-[var(--radius-bar)] px-4 backdrop-blur-[16px] lg:px-6',
            'transition-[background-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
            'border border-white/40 shadow-bar',
            isScrolled ? 'bg-white/90' : 'bg-white/78',
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
            className="ml-6 hidden lg:flex xl:ml-9"
            activeMegaMenu={activeMegaMenu}
            onToggleMegaMenu={toggleMegaMenu}
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
              className="border-ink/30 text-ink-strong hover:border-ink-strong hover:bg-ink/8 flex size-11 items-center justify-center rounded-full border transition-colors duration-[var(--duration-base)]"
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
              className="border-ink/30 text-ink-strong hover:border-ink-strong hover:bg-ink/8 flex size-11 items-center justify-center rounded-full border transition-colors duration-[var(--duration-base)] lg:hidden"
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
