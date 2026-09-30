import { MapPin } from 'lucide-react';

import { HeroWavefield } from '@/components/sections/hero/hero-wavefield';

interface ConsultingLocationsProps {
  readonly id?: string;
  readonly heading: string;
  readonly body: string;
  readonly locations: readonly string[];
}

/**
 * The locations band.
 *
 * A stylised field rather than a map: the deck names no real coordinates yet,
 * and an embedded map would either sit empty or point somewhere invented. The
 * hero's own wave artwork carries the panel, with each location listed as a
 * pinned label beside it. Swapping in a real map later replaces the panel and
 * leaves the copy alone.
 */
export function ConsultingLocations({ id, heading, body, locations }: ConsultingLocationsProps) {
  const headingId = id ? `${id}-heading` : 'locations-heading';

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="bg-surface-warm scroll-mt-32 py-[clamp(4rem,3rem+5vw,7rem)]"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id={headingId} className="text-h2 text-ink max-w-[16ch]">
            {heading}
          </h2>

          <p className="text-body-lg text-ink-muted mt-6 max-w-[52ch]">{body}</p>

          <ul className="mt-10 flex flex-col gap-4">
            {locations.map((location) => (
              <li key={location} className="border-hairline flex items-center gap-3 border-t pt-4">
                <MapPin
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="text-ember size-5 shrink-0"
                />
                <span className="text-h4 text-ink">{location}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-hidden="true"
          data-accent="verde"
          className="bg-surface-cool relative aspect-[4/3] overflow-hidden"
        >
          <HeroWavefield idPrefix="mc-locations" />
        </div>
      </div>
    </section>
  );
}
