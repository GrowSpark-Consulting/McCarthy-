'use client';

import { motion } from 'framer-motion';

import { maskedLine, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

/** Delay between consecutive lines (seconds). */
const LINE_STAGGER = 0.085;

interface MaskedLinesProps {
  /** One entry per rendered line. */
  readonly lines: readonly string[];
  /** Delay before the first line starts, in seconds. */
  readonly delay?: number;
  /**
   * Drives the animation explicitly. Leave undefined to inherit the animation
   * state from a parent `motion` component — which is how the hero replays the
   * reveal every time a slide becomes active.
   */
  readonly play?: boolean;
  readonly className?: string;
  readonly lineClassName?: string;
}

/**
 * Headline reveal: each line rises out of its own clipping mask, staggered.
 *
 * The clipping wrapper carries a small vertical pad/negative-margin pair so
 * descenders (y, p, g) are not shaved off by `overflow-hidden`.
 *
 * Motion is opt-out at the provider level — `MotionConfig reducedMotion="user"`
 * strips the transform and leaves a plain fade for visitors who ask for it.
 */
export function MaskedLines({
  lines,
  delay = 0,
  play,
  className,
  lineClassName,
}: MaskedLinesProps) {
  const playbackProps =
    play === undefined
      ? {}
      : { initial: 'hidden' as const, animate: play ? ('visible' as const) : ('hidden' as const) };

  return (
    <motion.span
      variants={staggerContainer(LINE_STAGGER, delay)}
      {...playbackProps}
      className={cn('block', className)}
    >
      {lines.map((line, index) => (
        <span key={line} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
          <motion.span
            variants={maskedLine}
            className={cn('block will-change-transform', lineClassName)}
          >
            {line}
            {/* A trailing space collapses visually at the end of a block box,
                but keeps `textContent` readable as one sentence for crawlers
                and screen readers ("…transformation for the enterprise."). */}
            {index < lines.length - 1 ? ' ' : null}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
