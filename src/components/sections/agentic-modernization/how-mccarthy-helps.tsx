import { AMOD_HOW_WE_HELP } from '@/content/agentic-modernization';

/**
 * "How McCarthy Helps" — five subsections in a left-heading/right-body row
 * rhythm, the same `460fr/930fr` ratio the FAQ and Insights papers list use,
 * so the wide whitespace and text measure stay consistent with the rest of
 * the site rather than introducing a one-off layout.
 */
export function HowMcCarthyHelps() {
  return (
    <section id="how-mccarthy-helps" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <p className="text-eyebrow text-ink-muted uppercase">{AMOD_HOW_WE_HELP.eyebrow}</p>
        <h2 className="text-h2-soft text-ember-text mt-5 max-w-[34ch]">{AMOD_HOW_WE_HELP.heading}</h2>
      </div>

      <div className="border-hairline mt-12 border-t lg:mt-16">
        <div className="container-page">
          {AMOD_HOW_WE_HELP.items.map((item) => (
            <div
              key={item.title}
              className="border-hairline grid gap-4 border-b py-10 lg:grid-cols-[minmax(0,460fr)_minmax(0,930fr)] lg:gap-8 lg:py-12"
            >
              <h3 className="text-h3 text-ink max-w-[20ch]">{item.title}</h3>
              <p className="text-body-lg text-ink-muted max-w-[68ch]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
