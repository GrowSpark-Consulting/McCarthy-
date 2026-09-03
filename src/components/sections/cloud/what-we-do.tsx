import { CLOUD_WHAT_WE_DO } from '@/content/cloud';

/** "WHAT WE DO" — the brief supplies only a heading and one paragraph here, no media. */
export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <h2 className="text-h2-soft text-ink max-w-[30ch]">{CLOUD_WHAT_WE_DO.heading}</h2>
        <p className="text-body-lg text-ink-muted mt-6 max-w-[70ch]">{CLOUD_WHAT_WE_DO.body}</p>
      </div>
    </section>
  );
}
