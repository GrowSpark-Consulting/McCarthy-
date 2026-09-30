import { UserRound } from 'lucide-react';

import { AbstractTile, type AbstractTileTone } from '@/components/shared/abstract-tile';
import { AMOD_TEAM } from '@/content/agentic-modernization';

/** Rotated across the grid so eight adjacent tiles don't read as one flat colour. */
const TONES: readonly AbstractTileTone[] = ['ember', 'verde', 'abyss', 'mist'];

/**
 * Meet the team — a 4×2 grid on desktop (2 columns on mobile), matching the
 * reference's proportions. Portraits are `AbstractTile`s rather than gray
 * boxes or generated faces — a tasteful, obviously-placeholder stand-in,
 * since no real McCarthy team photography exists yet. Names and roles are
 * bracketed placeholders per `content/agentic-modernization.ts`, not
 * invented people.
 */
export function Team() {
  return (
    <section id="meet-the-team" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <h2 className="text-h2-soft text-ink">Meet the team</h2>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-10">
          {AMOD_TEAM.map((member, index) => (
            <div key={index} className="flex flex-col">
              <AbstractTile
                icon={UserRound}
                tone={TONES[index % TONES.length]}
                className="aspect-square rounded-[var(--radius-panel)]"
              />
              <p className="text-card text-ink mt-5">{member.name}</p>
              <p className="text-body text-ink-muted mt-1">{member.role}</p>
              <p className="text-legal text-ink-muted mt-1">McCarthy</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
