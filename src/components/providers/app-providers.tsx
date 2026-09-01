'use client';

import type { ReactNode } from 'react';

import { MotionConfig } from 'framer-motion';

import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import { EASE } from '@/lib/motion';

interface AppProvidersProps {
  readonly children: ReactNode;
}

/**
 * Single client boundary for every app-wide provider.
 *
 * Keeping this in one component means `app/layout.tsx` stays a server component
 * (smaller HTML payload, no client bundle for metadata) while still giving the
 * tree smooth scrolling and a global motion configuration.
 *
 * `reducedMotion="user"` makes Framer Motion honour the OS setting for every
 * animation in the tree, including ones a component forgets to guard.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: EASE.outQuint }}>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </MotionConfig>
  );
}
