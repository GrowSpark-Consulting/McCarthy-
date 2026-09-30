'use client';

import { motion } from 'framer-motion';

import { MaskedLines } from '@/components/shared/masked-lines';
import { ButtonLink } from '@/components/ui/button';
import { AUDIT_HERO } from '@/content/ai-audit';
import { fadeUp, staggerContainer } from '@/lib/motion';

const CONTENT_STAGGER = 0.12;

/** Nodes in the decorative workflow diagram, as percentages of the panel. */
const FLOW_NODES = [
  { x: 14, y: 26, label: 'Workflows' },
  { x: 50, y: 14, label: 'Systems' },
  { x: 84, y: 30, label: 'Data' },
  { x: 32, y: 66, label: 'Cost' },
  { x: 68, y: 74, label: 'Impact' },
] as const;

/** Edges between those nodes, by index. */
const FLOW_EDGES = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [1, 4],
  [2, 4],
] as const;

/**
 * AI Audit hero.
 *
 * Follows the site's existing hero grammar — masked line reveal, staggered
 * supporting copy, the same button shapes — but on the light canvas the rest of
 * the page uses, as an asymmetric two-column layout rather than a carousel.
 *
 * The right-hand panel is an original diagram of the audit's subject matter
 * (workflows, systems, data, cost, impact) rather than stock AI imagery.
 */
export function AuditHero() {
  return (
    <section
      aria-labelledby="audit-hero-heading"
      className="bg-canvas relative overflow-hidden pt-[calc(var(--header-band)+2rem)] pb-[var(--section-py)] lg:pt-[calc(var(--header-band)+4rem)]"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
        <motion.div
          variants={staggerContainer(CONTENT_STAGGER, 0.05)}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="eyebrow-rule text-eyebrow text-ink uppercase">
            {AUDIT_HERO.eyebrow}
          </motion.p>

          <motion.h1
            id="audit-hero-heading"
            variants={fadeUp}
            className="text-h2 text-ink mt-7 max-w-[18ch]"
          >
            <MaskedLines lines={[AUDIT_HERO.heading]} />
          </motion.h1>

          <motion.p variants={fadeUp} className="text-body text-ink mt-6 max-w-[54ch]">
            {AUDIT_HERO.body}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href={AUDIT_HERO.primary.href} variant="ember" className="font-semibold">
              {AUDIT_HERO.primary.label}
              <span aria-hidden="true">→</span>
            </ButtonLink>

            <ButtonLink href={AUDIT_HERO.secondary.href} variant="outline">
              {AUDIT_HERO.secondary.label}
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-surface-warm relative overflow-hidden rounded-2xl p-6 sm:p-8"
        >
          <div aria-hidden="true" className="relative aspect-[4/3] w-full">
            <svg viewBox="0 0 100 75" className="absolute inset-0 size-full" role="presentation">
              {FLOW_EDGES.map(([from, to]) => {
                const a = FLOW_NODES[from];
                const b = FLOW_NODES[to];
                if (!a || !b) return null;

                return (
                  <line
                    key={`${from}-${to}`}
                    x1={a.x}
                    y1={a.y * 0.75}
                    x2={b.x}
                    y2={b.y * 0.75}
                    stroke="var(--color-ember)"
                    strokeWidth={0.35}
                    opacity={0.45}
                  />
                );
              })}

              {FLOW_NODES.map((node, index) => (
                <g key={node.label}>
                  <circle
                    cx={node.x}
                    cy={node.y * 0.75}
                    r={index === 4 ? 3.2 : 2.2}
                    fill={index === 4 ? 'var(--color-ember)' : 'var(--color-canvas)'}
                    stroke="var(--color-ember)"
                    strokeWidth={0.5}
                  />
                  {/* Labels live inside the SVG so they scale with the diagram
                      and need no positional inline styles. */}
                  <text
                    x={node.x}
                    y={node.y * 0.75 + 6}
                    textAnchor="middle"
                    fill="var(--color-ink-muted)"
                    fontSize={2.6}
                    fontFamily="var(--font-sans)"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <dl className="border-hairline mt-6 grid gap-x-6 gap-y-4 border-t pt-6 sm:grid-cols-2">
            {AUDIT_HERO.signals.map((signal) => (
              <div key={signal.label}>
                <dt className="text-eyebrow text-ink-muted uppercase">{signal.label}</dt>
                <dd className="text-body text-ink mt-1">{signal.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
