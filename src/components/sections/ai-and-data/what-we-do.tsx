import Image from 'next/image';

import { AI_DATA_WHAT_WE_DO } from '@/content/ai-and-data';

/**
 * "WHAT WE DO" — a plain image beside the copy, not the video-player
 * treatment (play button, duration readout) an earlier pass used here: no
 * real video exists, and that chrome read as a broken/fake control rather
 * than a polished visual. Reuses the office-dashboard photo already used in
 * the Applications hero — a data-insights scene, which fits this section
 * better than the wave art already spent on this page's own hero.
 */
export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <h2 className="text-h2-soft text-ink lg:hidden">{AI_DATA_WHAT_WE_DO.heading}</h2>

        <div className="relative aspect-video overflow-hidden rounded-[var(--radius-panel)]">
          <Image
            src="/videos/hero-ai-office-poster.jpg"
            alt="Team reviewing an AI-driven data insights dashboard"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-h2-soft text-ink hidden max-w-[24ch] lg:block">{AI_DATA_WHAT_WE_DO.heading}</h2>
          <p className="text-body-lg text-ink-muted mt-6">{AI_DATA_WHAT_WE_DO.body}</p>
        </div>
      </div>
    </section>
  );
}
