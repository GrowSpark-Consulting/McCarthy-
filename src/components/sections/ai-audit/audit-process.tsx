'use client';

import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import { AUDIT_PROCESS, AUDIT_STAGES } from '@/content/ai-audit';
import { fadeUp, staggerContainer } from '@/lib/motion';

const CARD_STAGGER = 0.09;

/**
 * "What happens during an AI Audit?" — four stage cards.
 *
 * Reuses the homepage capability grid's visual language (outlined numeral,
 * light 32px title, body copy) but as raised cards on the warm surface, which
 * is what separates this page's rhythm from the homepage's flat columns.
 *
 * Cards reveal once on scroll, and the hover lift is a transform so it stays on
 * the compositor.
 *
 * The reveal is driven by `useInView` feeding the `animate` prop rather than by
 * `whileInView`: in Framer Motion v13 the gesture prop does not propagate the
 * variant down to the children, which left every card stuck at `opacity: 0`
 * after the section had scrolled past.
 */
export function AuditProcess() {
  const listRef = useRef<HTMLOListElement>(null);
  const isInView = useInView(listRef, { once: true, amount: 0.15 });

  return (
    <section
      id="audit-process"
      aria-labelledby="audit-process-heading"
      className="bg-surface-warm scroll-mt-28 py-[var(--section-py)]"
    >
      <div className="container-page">
        <h2 id="audit-process-heading" className="text-h2-soft text-ink max-w-[20ch]">
          {AUDIT_PROCESS.heading}
        </h2>

        <p className="text-body text-ink mt-5 max-w-[60ch]">{AUDIT_PROCESS.body}</p>

        <motion.ol
          ref={listRef}
          variants={staggerContainer(CARD_STAGGER, 0.05)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
        >
          {AUDIT_STAGES.map((stage) => (
            <motion.li
              key={stage.index}
              variants={fadeUp}
              className="bg-canvas group/card border-hairline hover:border-ember/40 flex flex-col rounded-2xl border p-7 transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-out-quint)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgb(0_0_0/0.35)] motion-reduce:hover:translate-y-0"
            >
              <p
                aria-hidden="true"
                className="numeral-outline font-display text-[clamp(3rem,2rem+2.5vw,4rem)]"
              >
                {stage.index}
              </p>

              <h3 className="text-h3 text-ink mt-7">
                <span className="sr-only">{`Stage ${stage.index}: `}</span>
                {stage.title}
              </h3>

              <p className="text-body text-ink mt-4 flex-1">{stage.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
