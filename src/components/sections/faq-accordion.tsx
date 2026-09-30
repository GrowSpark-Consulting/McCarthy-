'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { FAQS, type FaqEntry } from '@/content/homepage';
import { DURATION, EASE } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface FaqAccordionProps {
  /** Left-column heading. Defaults to the homepage's. */
  readonly heading?: React.ReactNode;
  readonly items?: readonly FaqEntry[];
  /** Anchor target, so a page's jump navigation can address the section. */
  readonly id?: string;
  /**
   * `split` is the homepage's heading-beside-rows layout; `stacked` puts the
   * heading above full-width rows at a larger question size, the way a
   * consulting page carries its FAQ.
   */
  readonly layout?: 'split' | 'stacked';
}

/**
 * Section 21 — the FAQ accordion.
 *
 * Measured from the reference: a left heading column, then full-width rows at
 * 20px/28px with a chevron on the right and hairline rules between them.
 *
 * Built as native buttons with `aria-expanded` / `aria-controls` and a region
 * per answer, so it is operable by keyboard and understood by screen readers —
 * the reference's own accordion is not.
 */
export function FaqAccordion({
  heading = (
    <>
      Answers to questions about <span className="text-ember-text">McCarthy</span>
    </>
  ),
  items = FAQS,
  id = 'faq',
  layout = 'split',
}: FaqAccordionProps) {
  const isStacked = layout === 'stacked';
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={id} className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div
        className={cn(
          'container-page',
          isStacked
            ? 'flex flex-col gap-10 lg:gap-14'
            : 'grid gap-10 lg:grid-cols-[minmax(0,460fr)_minmax(0,930fr)] lg:gap-8',
        )}
      >
        <h2 className={cn('text-ink', isStacked ? 'text-h2 max-w-[20ch]' : 'text-h4 max-w-[16ch]')}>
          {heading}
        </h2>

        <div className="border-hairline border-t">
          {items.map((faq, index) => {
            const isOpen = index === openIndex;
            const panelId = `${id}-panel-${index}`;
            const buttonId = `${id}-button-${index}`;

            return (
              <div key={faq.question} className="border-hairline border-b">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={cn(
                      'text-ink hover:text-ember-text flex w-full items-center justify-between gap-6 text-left transition-colors duration-[var(--duration-base)]',
                      isStacked ? 'text-h4 py-7 lg:py-8' : 'text-faq py-6',
                    )}
                  >
                    {faq.question}
                    <ChevronDown
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className={cn(
                        'shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
                        isStacked ? 'size-6' : 'size-5',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="panel"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: DURATION.base, ease: EASE.outQuint }}
                      className="overflow-hidden"
                    >
                      <p
                        className={cn(
                          'text-ink max-w-[70ch]',
                          isStacked ? 'text-body-lg text-ink-muted pb-8' : 'text-body pb-6',
                        )}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
