import { NEWS_HERO } from '@/content/news';

/**
 * News page header — same structure and classes as `InsightsHero`, padded
 * below the fixed glass header.
 */
export function NewsHero() {
  return (
    <section className="bg-canvas pt-[calc(var(--header-band)+2.5rem)] pb-12 lg:pb-16">
      <div className="container-page">
        <p className="eyebrow-rule text-eyebrow text-ink uppercase">{NEWS_HERO.eyebrow}</p>
        <h1 className="text-h2 text-ink mt-6 max-w-[18ch]">{NEWS_HERO.heading}</h1>
        <p className="text-body-lg text-ink-muted mt-6 max-w-[62ch]">{NEWS_HERO.body}</p>
      </div>
    </section>
  );
}
