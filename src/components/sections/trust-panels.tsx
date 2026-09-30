'use client';

import { useEffect, useRef, useState, type PointerEvent } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { ArrowLink } from '@/components/shared/arrow-link';
import { TRUST_PANELS, type TrustPanel } from '@/content/homepage';
import { cn } from '@/lib/utils';

/** Panel surface per position, matching the reference's four-green ramp. */
const TONE_CLASS: Record<TrustPanel['tone'], string> = {
  verde: 'bg-verde',
  'verde-mid': 'bg-verde-mid',
  'verde-deep': 'bg-verde-deep',
  'verde-dark': 'bg-verde-dark',
};

/**
 * Section 6 — the trust band.
 *
 * The reference runs a horizontal accordion here: a pale copy panel on the left
 * and four coloured panels on the right, one expanded and the rest collapsed to
 * numbered strips, inside a 16px-radius container.
 *
 * Below `lg` the accordion becomes a stack, which is what the reference does
 * too — a horizontal accordion has nowhere to expand on a phone.
 */
export function TrustPanels() {
  const [activeIndex, setActiveIndex] = useState(0);

  const step = (delta: number) =>
    setActiveIndex((current) => (current + delta + TRUST_PANELS.length) % TRUST_PANELS.length);

  // Hover opens a strip too (mouse only, so touch keeps tap-to-open). A short
  // intent delay stops strips flicking open as the cursor passes across them.
  const hoverTimer = useRef<number | undefined>(undefined);
  const cancelHover = () => window.clearTimeout(hoverTimer.current);
  const hoverTo = (event: PointerEvent, index: number) => {
    if (event.pointerType !== 'mouse') return;
    cancelHover();
    hoverTimer.current = window.setTimeout(() => setActiveIndex(index), 120);
  };

  useEffect(() => cancelHover, []);

  return (
    <section aria-labelledby="trust-heading" className="bg-canvas pb-[var(--section-py)]">
      <div className="px-2">
        <div className="grid overflow-hidden rounded-[var(--radius-panel)] lg:grid-cols-[minmax(0,500fr)_minmax(0,935fr)]">
          {/* Copy panel */}
          <div className="bg-surface-cool flex flex-col justify-between gap-10 p-8 lg:p-12">
            <h2 id="trust-heading" className="text-h2 max-w-[12ch]">
              How we build trust.
              <br />
              <span className="text-ember">Proof you can use.</span>
            </h2>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous panel"
                onClick={() => step(-1)}
                className="text-ink hover:bg-ink/8 flex size-10 items-center justify-center rounded-full transition-colors"
              >
                <ChevronLeft aria-hidden="true" strokeWidth={1.5} className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next panel"
                onClick={() => step(1)}
                className="text-ink hover:bg-ink/8 flex size-10 items-center justify-center rounded-full transition-colors"
              >
                <ChevronRight aria-hidden="true" strokeWidth={1.5} className="size-5" />
              </button>
            </div>
          </div>

          {/* Accordion */}
          <div className="flex flex-col lg:h-[29.375rem] lg:flex-row">
            {TRUST_PANELS.map((panel, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={panel.index}
                  onPointerEnter={(event) => hoverTo(event, index)}
                  onPointerLeave={cancelHover}
                  className={cn(
                    'relative flex min-w-0 flex-col overflow-hidden transition-[flex-grow] duration-[var(--duration-slow)] ease-[var(--ease-out-expo)]',
                    TONE_CLASS[panel.tone],
                    isActive ? 'lg:grow-[10]' : 'lg:grow',
                  )}
                >
                  {/* Fills the whole strip so any point in the column selects it; the
                      panel link below sits above it and keeps its own click. */}
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-label={`Go to slide ${index + 1}: ${panel.title}`}
                    aria-describedby={`trust-panel-body-${index}`}
                    onClick={() => setActiveIndex(index)}
                    className="focus-visible:outline-ink-inverse flex w-full cursor-pointer flex-col items-start gap-6 p-8 text-left focus-visible:outline-2 focus-visible:-outline-offset-4 lg:flex-1 lg:p-10"
                  >
                    <span
                      aria-hidden="true"
                      className="bg-ink-inverse/15 text-body text-ink-inverse flex size-11 shrink-0 items-center justify-center rounded-full font-medium"
                    >
                      {panel.index}
                    </span>

                    <span
                      className={cn(
                        'flex flex-col gap-4 opacity-100 transition-opacity duration-[var(--duration-base)]',
                        !isActive && 'lg:opacity-0 lg:hidden',
                      )}
                    >
                      <span className="text-h3-solid text-ink-inverse max-w-[22ch]">
                        {panel.title}
                      </span>
                      <span
                        id={`trust-panel-body-${index}`}
                        className="text-body text-ink-inverse/85 max-w-[46ch]"
                      >
                        {panel.body}
                      </span>
                    </span>

                    {/* Collapsed strips show only the numeral, as in the reference. */}
                    <span className="sr-only">{panel.title}</span>
                  </button>

                  <div
                    className={cn(
                      'px-8 pb-8 lg:absolute lg:bottom-10 lg:left-10 lg:px-0 lg:pb-0',
                      !isActive && 'lg:hidden',
                    )}
                  >
                    <ArrowLink href={panel.link.href} tone="inverse">
                      {panel.link.label}
                    </ArrowLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
