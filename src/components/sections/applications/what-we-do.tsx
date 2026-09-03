import { APPLICATIONS_WHAT_WE_DO } from '@/content/applications';

/** "WHAT WE DO" — heading, two paragraphs, and the brief's outcome bullet list. */
export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <h2 className="text-h2-soft text-ink max-w-[36ch]">{APPLICATIONS_WHAT_WE_DO.heading}</h2>

        <p className="text-body-lg text-ink-muted mt-6 max-w-[70ch]">{APPLICATIONS_WHAT_WE_DO.intro}</p>
        <p className="text-body-lg text-ink-muted mt-4 max-w-[70ch]">{APPLICATIONS_WHAT_WE_DO.lead}</p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {APPLICATIONS_WHAT_WE_DO.bullets.map((bullet) => (
            <li
              key={bullet}
              className="border-hairline text-body text-ink flex items-start gap-3 rounded-[var(--radius-panel)] border p-5"
            >
              <span aria-hidden="true" className="bg-ember mt-2 size-1.5 shrink-0 rounded-full" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
