interface ConsultingLogosProps {
  readonly id?: string;
  readonly heading: string;
  /** Client names exactly as the deck sets them — placeholders included. */
  readonly clients: readonly string[];
}

/**
 * The customer strip.
 *
 * Names, not marks: the deck lists bracketed placeholders rather than real
 * customers, and drawing logo shapes for them would invent brands McCarthy has
 * not named. Each sits in its own hairlined cell at the proportions a logo will
 * occupy, so real marks drop in without the grid moving.
 */
export function ConsultingLogos({ id, heading, clients }: ConsultingLogosProps) {
  const headingId = id ? `${id}-heading` : 'clients-heading';

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="bg-canvas scroll-mt-32 py-[clamp(4rem,3rem+5vw,7rem)]"
    >
      <div className="container-page">
        <h2 id={headingId} className="text-h2 text-ink max-w-[24ch]">
          {heading}
        </h2>

        <ul className="mt-12 grid grid-cols-2 gap-px sm:grid-cols-3 lg:mt-16 lg:grid-cols-6">
          {clients.map((client) => (
            <li
              key={client}
              className="border-hairline text-body text-ink-muted flex min-h-24 items-center justify-center border px-4 text-center"
            >
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
