import { AMOD_VALUE_PROPS } from '@/content/agentic-modernization';

/**
 * Three value props. The reference marks each with a small icon/line
 * treatment — reproduced here as a short ember rule (the same device
 * `.eyebrow-rule` uses elsewhere) rather than reaching for Kyndryl's
 * proprietary iconography.
 */
export function ValueProps() {
  return (
    <section aria-label="Why McCarthy" className="bg-surface-warm py-[var(--section-py)]">
      <div className="container-page grid gap-10 md:grid-cols-3 md:gap-8">
        {AMOD_VALUE_PROPS.map((prop) => (
          <div key={prop.title} className="flex flex-col">
            <span aria-hidden="true" className="bg-ember block h-[2px] w-7" />
            <h3 className="text-card text-ink mt-5">{prop.title}</h3>
            <p className="text-body text-ink-muted mt-4">{prop.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
