import { Workflow } from 'lucide-react';
import Image from 'next/image';

import { ArrowLink } from '@/components/shared/arrow-link';
import { AbstractTile } from '@/components/shared/abstract-tile';
import { AMOD_CUSTOMER_SUCCESS } from '@/content/agentic-modernization';

/**
 * Customer success — two story cards. The first reuses the existing
 * abstract wave footage (real, already-approved asset); the second is an
 * `AbstractTile`, since no second photo exists. Titles are explicit
 * placeholders (see `content/agentic-modernization.ts`), so a small note
 * says so rather than letting a fabricated customer outcome read as real.
 */
export function CustomerSuccess() {
  return (
    <section id="customer-success" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <h2 className="text-h2-soft text-ink max-w-[26ch]">{AMOD_CUSTOMER_SUCCESS.heading}</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 lg:mt-16">
          {AMOD_CUSTOMER_SUCCESS.stories.map((story, index) => (
            <article key={story.title} className="flex flex-col">
              {index === 0 ? (
                <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-panel)]">
                  <Image
                    src="/videos/wave-loop-poster.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <AbstractTile icon={Workflow} tone="verde" className="aspect-[16/10] rounded-[var(--radius-panel)]" />
              )}

              <h3 className="text-h3-lg text-ink mt-6 max-w-[26ch]">{story.title}</h3>

              <div className="mt-6">
                <ArrowLink href={story.link.href}>{story.link.label}</ArrowLink>
              </div>
            </article>
          ))}
        </div>

        <p className="text-legal text-ink-muted mt-10 max-w-[60ch]">
          Placeholder stories, shown until real McCarthy customer outcomes are ready to publish.
        </p>
      </div>
    </section>
  );
}
