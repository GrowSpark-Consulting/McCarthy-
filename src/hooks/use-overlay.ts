'use client';

import { useEffect, type RefObject } from 'react';

import { useFocusTrap } from '@/hooks/use-focus-trap';
import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll';

interface UseOverlayOptions {
  /** The overlay's root element. */
  readonly containerRef: RefObject<HTMLElement | null>;
  /** Whether the overlay is currently open. */
  readonly open: boolean;
  /** Called on Escape. */
  readonly onClose: () => void;
  /** Element to focus on open, instead of the first tabbable child. */
  readonly initialFocusRef?: RefObject<HTMLElement | null>;
}

/**
 * The three behaviours every modal overlay on the site needs, in one place:
 * focus trapping (with focus restored to the trigger), a body scroll lock that
 * also pauses Lenis, and Escape-to-close.
 *
 * Used by both the mobile menu and the search overlay so the two can never
 * drift apart in how they behave for keyboard and screen-reader users.
 */
export function useOverlay({
  containerRef,
  open,
  onClose,
  initialFocusRef,
}: UseOverlayOptions): void {
  useFocusTrap(containerRef, open, initialFocusRef);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);
}
