'use client';

import { motion } from 'framer-motion';

import { fadeUp } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface RevealProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  /** Delay before this block starts, in seconds. Use to stagger siblings. */
  readonly delay?: number;
}

/**
 * Scroll-triggered entrance for a block of section content.
 *
 * Reuses the site's existing `fadeUp` variant and its shared timing, so a
 * revealed section moves exactly like the hero copy rather than inventing a
 * second motion language. It fires once, at 15% visibility, and never gates
 * content: the markup is server-rendered and present for crawlers and for
 * anyone whose JavaScript has not run — only the opacity is animated.
 *
 * `MotionConfig reducedMotion="user"` in `AppProviders` strips the transform
 * for visitors who ask for reduced motion, leaving a plain fade.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
