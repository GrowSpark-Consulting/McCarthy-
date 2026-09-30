import Image from 'next/image';

import { AMOD_INTRO } from '@/content/agentic-modernization';

/**
 * The reference's large introductory statement, paragraph, and — immediately
 * after it, before the value props — a large feature image. Reuses the
 * hero's own office photography (real, already-approved footage, not a
 * downloaded stock image) since "a modern operation for the AI era" is
 * exactly what it shows.
 */
export function Intro() {
  return (
    <section aria-labelledby="amod-intro-heading" className="bg-canvas pb-[var(--section-py)]">
      <div className="container-page">
        <h2 id="amod-intro-heading" className="text-h2-soft text-ink max-w-[28ch]">
          {AMOD_INTRO.statement}
        </h2>

        <p className="text-body-lg text-ink-muted mt-8 max-w-[64ch]">{AMOD_INTRO.body}</p>
      </div>

      <div className="container-page relative mt-12 aspect-[16/9] overflow-hidden rounded-[var(--radius-panel)] lg:mt-16 lg:aspect-[21/9]">
        <Image
          src="/videos/hero-ai-office-poster.jpg"
          alt="Team reviewing an AI-driven operations dashboard"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
