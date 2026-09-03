import { VideoPlaceholder } from '@/components/shared/video-placeholder';
import { CYBER_WHAT_WE_DO } from '@/content/cyber-resilience';

/**
 * "WHAT WE DO" — the brief explicitly calls for a video block here
 * ("(video placeholder — 0:00 / [runtime])"), with no caption text supplied.
 * Reuses the wave art already used for this page's own hero is avoided —
 * the office-dashboard photo reads as a security-operations scene instead.
 */
export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <h2 className="text-h2-soft text-ink max-w-[40ch]">{CYBER_WHAT_WE_DO.heading}</h2>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-14">
          <VideoPlaceholder
            imageSrc="/videos/wave-loop-poster.jpg"
            duration={CYBER_WHAT_WE_DO.video.duration}
            className="aspect-video"
          />

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
