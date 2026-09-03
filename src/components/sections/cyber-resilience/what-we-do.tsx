import Image from 'next/image';

import { CYBER_WHAT_WE_DO } from '@/content/cyber-resilience';

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <h2 className="text-h2-soft text-ink max-w-[40ch]">{CYBER_WHAT_WE_DO.heading}</h2>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-video overflow-hidden rounded-[var(--radius-panel)]">
            <Image
              src="/videos/wave-loop-poster.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            {CYBER_WHAT_WE_DO.bodyParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-ink-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
