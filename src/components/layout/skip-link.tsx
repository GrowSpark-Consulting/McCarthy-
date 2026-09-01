/**
 * Keyboard "skip to content" affordance.
 *
 * Visually hidden until focused, then pinned over the header. It is the first
 * focusable element in the document, which is what lets keyboard and screen
 * reader users bypass the navigation (WCAG 2.4.1 Bypass Blocks).
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="focus-visible:bg-ember focus-visible:text-ink-inverse sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-100 focus-visible:inline-flex focus-visible:h-11 focus-visible:items-center focus-visible:rounded-full focus-visible:px-5 focus-visible:text-sm focus-visible:font-medium"
    >
      Skip to main content
    </a>
  );
}
