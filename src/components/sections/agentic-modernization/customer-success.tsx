import { Workflow } from 'lucide-react';
import Image from 'next/image';

import { ArrowLink } from '@/components/shared/arrow-link';
import { AbstractTile } from '@/components/shared/abstract-tile';
import { AMOD_CUSTOMER_SUCCESS } from '@/content/agentic-modernization';

/**
 * Customer success — two story cards on a soft warm surface, each topped with
 * its photograph (an `AbstractTile` stands in if a story has none). Titles are explicit
 * placeholders (see `content/agentic-modernization.ts`), so a small note
 * says so rather than letting a fabricated customer outcome read as real.
 */
export function CustomerSuccess() {
  return (
    <section id="customer-success" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <h2 className="text-h2-soft text-ink max-w-[26ch]">{AMOD_CUSTOMER_SUCCESS.heading}</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 lg:mt-16">
          {AMOD_CUSTOMER_SUCCESS.stories.map((story) => (
            <article
              key={story.title}
              className="bg-surface-warm flex flex-col overflow-hidden rounded-[var(--radius-panel)]"
            >
              {story.image ? (
                <div className="relative aspect-[3/2] overflow-hidden rounded-[var(--radius-panel)]">
                  <Image
                    src={story.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <AbstractTile icon={Workflow} tone="verde" className="aspect-[3/2] rounded-[var(--radius-panel)]" />
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-8 lg:px-12 lg:pt-10 lg:pb-12">
                <h3 className="text-h3-lg text-ink max-w-[26ch]">{story.title}</h3>

                <div className="mt-6">
                  <ArrowLink href={story.link.href}>{story.link.label}</ArrowLink>
                </div>
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
