'use client';

import { useMemo, useRef, useState, type FormEvent } from 'react';

import { motion } from 'framer-motion';
import { ChevronRight, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useOverlay } from '@/hooks/use-overlay';
import { DURATION, EASE, fadeUp, staggerContainer } from '@/lib/motion';
import { PREFETCH_SITE_ROUTES, searchDestinations } from '@/lib/navigation';
import { siteConfig } from '@/lib/site-config';

const RESULT_STAGGER = 0.04;

interface SearchOverlayProps {
  readonly id: string;
  readonly onClose: () => void;
}

/**
 * Site search.
 *
 * Filters the destinations the site actually has (`lib/navigation.ts`) as you
 * type, rather than posting to a results page that does not exist yet. New
 * entries in the navigation model become searchable the moment they are
 * declared. Enter follows the first match; Escape closes; focus is trapped and
 * restored to the trigger.
 */
export function SearchOverlay({ id, onClose }: SearchOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [query, setQuery] = useState('');

  useOverlay({ containerRef, open: true, onClose, initialFocusRef: inputRef });

  const results = useMemo(() => searchDestinations(query), [query]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [first] = results;
    if (!first) return;
    router.push(first.href);
    onClose();
  };

  return (
    <motion.div
      ref={containerRef}
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label={`Search ${siteConfig.name}`}
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: DURATION.fast, ease: EASE.outQuint } }}
      transition={{ duration: DURATION.base, ease: EASE.outExpo }}
      className="bg-abyss-deep/97 fixed inset-0 z-70 overflow-y-auto overscroll-contain backdrop-blur-2xl"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        exit={{ y: -14 }}
        transition={{ duration: DURATION.slow, ease: EASE.outExpo }}
        className="container-page pb-16"
      >
        <div className="flex h-[var(--header-band)] items-center justify-end">
          <button
            type="button"
            aria-label="Close search"
            onClick={onClose}
            className="border-ink-inverse/35 text-ink-inverse hover:border-ink-inverse hover:bg-ink-inverse/10 flex size-11 items-center justify-center rounded-full border transition-colors"
          >
            <X aria-hidden="true" strokeWidth={1.75} className="size-[1.15rem]" />
          </button>
        </div>

        <form role="search" onSubmit={handleSubmit} className="mt-4">
          <label htmlFor="site-search-input" className="text-eyebrow text-ink-inverse/60 uppercase">
            Search
          </label>

          <div className="border-ink-inverse/25 focus-within:border-ink-inverse/70 mt-3 flex items-center gap-4 border-b pb-4">
            <Search
              aria-hidden="true"
              strokeWidth={1.5}
              className="text-ink-inverse/60 size-5 shrink-0"
            />
            <input
              ref={inputRef}
              id="site-search-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="AI agents, workforce, the Lab…"
              autoComplete="off"
              enterKeyHint="go"
              aria-describedby="site-search-status"
              className="text-h3 text-ink-inverse placeholder:text-ink-inverse/35 w-full bg-transparent font-light focus:outline-none"
            />
          </div>
        </form>

        <p id="site-search-status" aria-live="polite" className="sr-only">
          {`${results.length} ${results.length === 1 ? 'result' : 'results'} available.`}
        </p>

        <motion.ul
          variants={staggerContainer(RESULT_STAGGER, 0.05)}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col"
        >
          {results.map((destination) => (
            <motion.li key={destination.href} variants={fadeUp}>
              <Link
                href={destination.href}
                prefetch={PREFETCH_SITE_ROUTES}
                onClick={onClose}
                className="group/link border-ink-inverse/12 text-ink-inverse/85 hover:text-ink-inverse flex items-center justify-between gap-6 border-b py-5 transition-colors"
              >
                <span className="flex flex-col gap-1">
                  <span className="text-body-lg">{destination.label}</span>
                  {destination.description ? (
                    <span className="text-body text-ink-inverse/55">{destination.description}</span>
                  ) : null}
                </span>
                <ChevronRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="text-ink-inverse/50 size-5 shrink-0 transition-transform group-hover/link:translate-x-1"
                />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {results.length === 0 ? (
          <p className="text-body-lg text-ink-inverse/70 mt-8">
            Nothing matches “{query}”. Try “agents”, “workforce” or “Lab”.
          </p>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
