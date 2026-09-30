import { CYBER_LATEST_NEWS } from '@/content/cyber-resilience';

/**
 * "Latest news" — listed in the brief's local nav, but the brief supplies no
 * distinct content for it (unlike every other nav item, which maps to a
 * described section). Rendered as an honest placeholder rather than filled
 * with invented headlines, so the anchor still resolves to something real.
 */
export function LatestNews() {
  return (
    <section id="latest-news" className="bg-surface-warm scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <h2 className="text-h2-soft text-ink">{CYBER_LATEST_NEWS.heading}</h2>
        <p className="text-body-lg text-ink-muted mt-6 max-w-[60ch]">{CYBER_LATEST_NEWS.placeholder}</p>
      </div>
    </section>
  );
}
