'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { FAQS } from '@/content/homepage';
import { DURATION, EASE } from '@/lib/motion';
import { cn } from '@/lib/utils';

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
export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,460fr)_minmax(0,930fr)] lg:gap-8">
        <h2 className="text-h4 text-ink max-w-[16ch]">
          Answers to questions about <span className="text-ember-text">McCarthy</span>
        </h2>

        <div className="border-hairline border-t">
          {FAQS.map((faq, index) => {
            const isOpen = index === openIndex;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question} className="border-hairline border-b">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="text-faq text-ink hover:text-ember-text flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-[var(--duration-base)]"
                  >
                    {faq.question}
                    <ChevronDown
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className={cn(
                        'size-5 shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
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
                      <p className="text-body text-ink max-w-[70ch] pb-6">{faq.answer}</p>
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
