import { INSIGHTS_HERO } from '@/content/insights';

/**
 * Insights page header.
 *
 * The floating header is `fixed`, so — unlike the homepage, which sits it
 * over a full-bleed hero — this section pads its top by the header's own
 * height plus inset so the heading doesn't render underneath the glass bar.
 */
export function InsightsHero() {
  return (
    <section className="bg-canvas pt-[calc(var(--header-band)+2.5rem)] pb-12 lg:pb-16">
      <div className="container-page">
        <p className="eyebrow-rule text-eyebrow text-ink uppercase">{INSIGHTS_HERO.eyebrow}</p>
        <h1 className="text-h2 text-ink mt-6 max-w-[18ch]">{INSIGHTS_HERO.heading}</h1>
        <p className="text-body-lg text-ink-muted mt-6 max-w-[62ch]">{INSIGHTS_HERO.body}</p>
      </div>
    </section>
  );
}
