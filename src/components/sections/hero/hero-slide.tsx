'use client';

import { motion } from 'framer-motion';

import { MaskedLines } from '@/components/shared/masked-lines';
import { ButtonLink } from '@/components/ui/button';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';
import type { HeroSlide as HeroSlideModel } from '@/types/hero';

const CONTENT_STAGGER = 0.14;
const CONTENT_DELAY = 0.12;

interface HeroSlideProps {
  readonly slide: HeroSlideModel;
  readonly index: number;
  readonly total: number;
  readonly isActive: boolean;
}

/**
 * One hero slide.
 *
 * Geometry is measured from the reference at 1440x900: a 522px copy column,
 * 48px/56px light headline, 24px to the 16px subhead, 40px to a 50px-tall
 * 4px-radius outlined CTA.
 *
 * Off-screen slides are `inert`, so a keyboard user can never tab into a CTA
 * that is scrolled out of sight. Only the first slide carries the `<h1>`.
 */
export function HeroSlide({ slide, index, total, isActive }: HeroSlideProps) {
  const Heading = index === 0 ? motion.h1 : motion.h2;

  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}: ${slide.eyebrow}`}
      aria-hidden={!isActive}
      inert={!isActive}
      className="relative flex min-w-0 flex-[0_0_100%] items-end"
    >
      <motion.div
        variants={staggerContainer(CONTENT_STAGGER, CONTENT_DELAY)}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        className="container-page w-full"
      >
        <Heading variants={fadeUp} className="text-hero text-ink-inverse max-w-[32.625rem]">
          <MaskedLines lines={slide.headline} />
        </Heading>

        <motion.p
          variants={fadeUp}
          className="text-body text-ink-inverse mt-6 max-w-[32.625rem] font-light"
        >
          {slide.subhead}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <ButtonLink
            href={slide.cta.href}
            prefetch={PREFETCH_SITE_ROUTES}
            aria-label={slide.cta.ariaLabel ?? slide.cta.label}
            variant="outline-inverse"
            shape="control"
            size="control"
            tabIndex={isActive ? undefined : -1}
            className="w-full font-semibold sm:w-auto"
          >
            {slide.cta.label}
          </ButtonLink>
        </motion.div>
      </motion.div>
    </div>
  );
}
