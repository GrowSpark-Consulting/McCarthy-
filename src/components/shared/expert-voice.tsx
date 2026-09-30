import { Quote, UserRound } from 'lucide-react';

import { ArrowLink } from '@/components/shared/arrow-link';
import { AbstractTile } from '@/components/shared/abstract-tile';
import type { LinkRef } from '@/content/homepage';

interface ExpertVoiceProps {
  readonly id?: string;
  readonly heading: string;
  readonly quote: string;
  readonly name: string;
  readonly title: string;
  /** Omit when the source content doesn't supply a profile link — no destination is invented. */
  readonly profileLink?: LinkRef;
}

/**
 * "Expert voices" — a dark band with a pull-quote beside a portrait. No real
 * headshot exists yet, so the portrait is an `AbstractTile` (a tasteful,
 * obviously-placeholder stand-in) rather than a stock or generated photo of
 * a person, the same convention the Agentic Modernization team grid uses.
 */
export function ExpertVoice({ id, heading, quote, name, title, profileLink }: ExpertVoiceProps) {
  return (
    <section id={id} className="bg-abyss scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,563fr)_minmax(0,877fr)] lg:items-center lg:gap-14">
        {/* `verde`, not `abyss` — the section itself is already dark, so an `abyss`-tone tile would blend into the background instead of reading as a distinct portrait. */}
        <AbstractTile
          icon={UserRound}
          tone="verde"
          className="aspect-[4/3] rounded-[var(--radius-panel)] lg:aspect-square"
        />

        <div>
          <h2 className="text-h2-soft text-ink-inverse max-w-[24ch]">{heading}</h2>

          <blockquote className="mt-8 flex gap-4">
            <Quote aria-hidden="true" strokeWidth={1.5} className="text-verde-bright mt-1 size-8 shrink-0" />
            <p className="text-body-lg text-ink-inverse/90 max-w-[52ch]">{quote}</p>
          </blockquote>

          <div className="mt-8">
            <p className="text-card text-ink-inverse">{name}</p>
            <p className="text-body text-ink-inverse/70 mt-1">{title}</p>
            <p className="text-legal text-ink-inverse/70">McCarthy</p>

            {profileLink ? (
              <div className="mt-4">
                <ArrowLink href={profileLink.href} tone="inverse">
                  {profileLink.label}
                </ArrowLink>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
