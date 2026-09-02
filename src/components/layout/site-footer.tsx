import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { BrandWordmark } from '@/components/shared/brand-wordmark';
import { FOOTER_GROUPS, FOOTER_LEGAL, type LinkRef } from '@/content/homepage';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';
import { siteConfig } from '@/lib/site-config';

/**
 * Section 23 — the footer.
 *
 * Measured from the reference: the warm `#f2f1ee` band, a 40px wordmark, social
 * marks pinned top-right, two link groups each headed by a 28px title with an
 * ember rule and split into two sub-columns, then a legal row separated by
 * pipes.
 *
 * The reference shows third-party social glyphs; those are trademarked marks,
 * so the same slot carries a labelled link instead — same position, same
 * weight, nothing reproduced that isn't ours.
 *
 * Groups and the legal row are overridable: a page whose own copy deck sets a
 * different footer passes its own, and every other page keeps the site-wide
 * one untouched.
 */
interface FooterGroup {
  readonly heading: string;
  readonly columns: readonly (readonly LinkRef[])[];
}

interface SiteFooterProps {
  /** Link groups. Defaults to the site-wide set. */
  readonly groups?: readonly FooterGroup[];
  /** Legal row. Defaults to the site-wide set. */
  readonly legal?: readonly LinkRef[];
}

export function SiteFooter({ groups = FOOTER_GROUPS, legal = FOOTER_LEGAL }: SiteFooterProps = {}) {
  return (
    <footer className="bg-surface-warm pt-14 pb-10 lg:pt-16">
      <div className="container-page">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <Link href="/" aria-label={`${siteConfig.name} home`}>
            <BrandWordmark size="md" tone="ember" />
          </Link>

          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${siteConfig.name} on LinkedIn (opens in a new tab)`}
            className="bg-ink-strong text-legal text-ink-inverse hover:bg-ember flex h-9 items-center gap-1.5 px-3 transition-colors duration-[var(--duration-base)]"
          >
            LinkedIn
            <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="size-3.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {groups.map((group) => (
            <div key={group.heading}>
              <h2 className="text-h4 text-ink after:bg-ember after:mt-3 after:block after:h-[3px] after:w-12">
                {group.heading}
              </h2>

              <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {group.columns.map((column, columnIndex) => (
                  <ul key={columnIndex} className="flex flex-col gap-5">
                    {column.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          prefetch={PREFETCH_SITE_ROUTES}
                          className="text-body text-ink hover:text-ember transition-colors duration-[var(--duration-base)]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-hairline mt-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t pt-8">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {legal.map((link, index) => (
              <li key={link.href} className="flex items-center gap-3">
                {index > 0 ? <span aria-hidden="true" className="bg-ink/25 h-3 w-px" /> : null}
                <Link
                  href={link.href}
                  prefetch={PREFETCH_SITE_ROUTES}
                  className="text-legal text-ink hover:text-ember transition-colors duration-[var(--duration-base)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-legal text-ink-muted">
            {siteConfig.locations.join(' · ')} · © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
