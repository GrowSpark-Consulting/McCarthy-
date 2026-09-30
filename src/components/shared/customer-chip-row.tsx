interface CustomerChipRowProps {
  readonly id?: string;
  readonly heading: string;
  /** Client names — bracketed placeholders until real customers are named. */
  readonly names: readonly string[];
}

/**
 * "Our customers" — a row of name chips rather than a logo strip, since no
 * real customer names or logos exist yet to reproduce the reference's
 * logo-grid treatment honestly.
 */
export function CustomerChipRow({ id, heading, names }: CustomerChipRowProps) {
  return (
    <section id={id} className="bg-surface-warm scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <h2 className="text-h2-soft text-ink">{heading}</h2>

        <ul className="mt-10 flex flex-wrap gap-3 lg:mt-12">
          {names.map((name) => (
            <li
              key={name}
              className="border-hairline text-body text-ink-muted rounded-full border bg-canvas px-5 py-3"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
