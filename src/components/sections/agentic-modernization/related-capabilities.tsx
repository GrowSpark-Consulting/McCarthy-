import { ArrowLink } from '@/components/shared/arrow-link';
import { AMOD_CAPABILITIES } from '@/content/agentic-modernization';

/** Related capabilities — three columns, each linking to a real, existing McCarthy destination. */
export function RelatedCapabilities() {
  return (
    <section aria-labelledby="amod-capabilities-heading" className="bg-surface-warm py-[var(--section-py)]">
      <div className="container-page">
        <h2 id="amod-capabilities-heading" className="text-h2-soft text-ink">
          {AMOD_CAPABILITIES.heading}
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
          {AMOD_CAPABILITIES.items.map((item) => (
            <article key={item.title} className="flex flex-col">
              <h3 className="text-card text-ink">{item.title}</h3>
              <p className="text-body text-ink-muted mt-4 flex-1">{item.body}</p>

              <div className="mt-6">
                <ArrowLink href={item.link.href}>{item.link.label}</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
