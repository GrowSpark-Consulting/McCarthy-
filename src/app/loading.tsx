/**
 * Route-level loading state.
 *
 * Streamed instantly by the App Router while a route segment resolves. It
 * mirrors the hero's layout — gutters, header offset, block rhythm — so the
 * skeleton occupies the same space the real content will, and nothing jumps
 * when it swaps in (no layout shift, no CLS penalty).
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-canvas relative flex min-h-[var(--hero-min-height)] w-full flex-col justify-center pt-[var(--header-height)]"
    >
      <div className="container-page w-full animate-pulse pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="bg-ink/8 h-[clamp(2.5rem,5.4vw,5rem)] w-[min(100%,34rem)] rounded-sm" />
        <div className="bg-ink/8 mt-4 h-[clamp(2.5rem,5.4vw,5rem)] w-[min(100%,28rem)] rounded-sm" />
        <div className="bg-ink/6 mt-9 h-4 w-[min(100%,30rem)] rounded-sm" />
        <div className="bg-ink/6 mt-3 h-4 w-[min(100%,22rem)] rounded-sm" />
        <div className="bg-ink/8 mt-11 h-13 w-full max-w-[20rem] rounded-full" />
      </div>

      <span className="sr-only">Loading content</span>
    </div>
  );
}
