import { Reveal } from '@/components/shared/reveal';
import { cn } from '@/lib/utils';
import type { ConsultingPerson } from '@/types/consulting';

interface ConsultingPeopleProps {
  readonly id?: string;
  readonly heading: string;
  readonly people: readonly ConsultingPerson[];
  /** Three across for a leadership row, four for a wider team grid. */
  readonly columns?: 3 | 4;
  /** Optional action beneath the grid, e.g. the deck's "Show more". */
  readonly action?: React.ReactNode;
}

/**
 * A profile grid.
 *
 * The portrait slot is a plain tinted field, not a silhouette or an avatar
 * initial: the decks name no one yet, and drawing a face — even a generic one —
 * would invent a person the copy does not have. When real headshots arrive they
 * drop into the same slot without touching the grid.
 */
export function ConsultingPeople({
  id,
  heading,
  people,
  columns = 3,
  action,
}: ConsultingPeopleProps) {
  const headingId = id ? `${id}-heading` : 'people-heading';

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="bg-surface-warm scroll-mt-32 py-[clamp(4rem,3rem+5vw,7rem)]"
    >
      <div className="container-page">
        <h2 id={headingId} className="text-h2 text-ink max-w-[22ch]">
          {heading}
        </h2>

        <ul
          className={cn(
            'mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16',
            columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3',
          )}
        >
          {people.map((person, index) => (
            <li key={`${person.name}-${index}`}>
              <Reveal delay={index * 0.05}>
                <article className="flex flex-col">
                  <div
                    aria-hidden="true"
                    className="bg-surface-cool border-hairline aspect-[4/5] w-full border"
                  />

                  <h3 className="text-card text-ink mt-6">{person.name}</h3>
                  <p className="text-body text-ink-muted mt-2">{person.title}</p>
                  <p className="text-legal text-ink-muted mt-1">{person.meta}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        {action ? <div className="mt-12">{action}</div> : null}
      </div>
    </section>
  );
}
