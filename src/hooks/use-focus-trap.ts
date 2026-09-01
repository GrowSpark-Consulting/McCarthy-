'use client';

import { useEffect, type RefObject } from 'react';

/** Elements that can receive keyboard focus inside an overlay. */
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/**
 * Confines Tab / Shift+Tab to the given container while `active` is true, moves
 * initial focus inside it, and returns focus to the trigger on close.
 *
 * This is what makes the mobile menu and the search overlay usable with a
 * keyboard or a screen reader instead of leaving focus stranded on the page
 * behind them (WCAG 2.4.3 Focus Order, 2.1.2 No Keyboard Trap).
 *
 * @param containerRef The overlay element.
 * @param active Whether the trap is engaged.
 * @param initialFocusRef Optional element to focus first (defaults to the first
 * tabbable child).
 */
export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  active: boolean,
  initialFocusRef?: RefObject<HTMLElement | null>,
): void {
  useEffect(() => {
    const container = containerRef.current;

    if (!active || !container) {
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusable = (): HTMLElement[] =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (element) => element.offsetParent !== null || element === document.activeElement,
      );

    // Move focus in on the next frame so entrance animations do not fight it.
    const focusFrame = window.requestAnimationFrame(() => {
      const [first] = getFocusable();
      (initialFocusRef?.current ?? first ?? container).focus({ preventScroll: true });
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') {
        return;
      }

      const focusable = getFocusable();

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) {
        return;
      }

      const activeElement = document.activeElement;

      if (event.shiftKey && (activeElement === first || activeElement === container)) {
        event.preventDefault();
        last.focus();
        return;
      }

      if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      container.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [containerRef, active, initialFocusRef]);
}
