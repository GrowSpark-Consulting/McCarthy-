'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

export interface Capability {
  readonly title: string;
  readonly body: string;
}

export interface CapabilityTab {
  readonly label: string;
  readonly capabilities?: readonly Capability[];
  /** Shown when this tab has no supplied content yet, instead of inventing any. */
  readonly placeholder?: string;
}

interface CapabilityTabsProps {
  readonly id?: string;
  readonly eyebrow: string;
  readonly heading: string;
  readonly tabs: readonly CapabilityTab[];
}

/**
 * "How [Company] Helps" — a tab strip switching between capability-card
 * panels. An accessible tabs pattern (`role="tablist"`/`"tab"`/`"tabpanel"`,
 * arrow-key navigation, one panel in the DOM at a time) rather than a
 * decorative row of buttons, since the reference's own tabs aren't
 * keyboard-operable.
 */
export function CapabilityTabs({ id, eyebrow, heading, tabs }: CapabilityTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsId = id ?? 'capability-tabs';
  const activeTab = tabs[activeIndex];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;

    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (activeIndex + direction + tabs.length) % tabs.length;
    setActiveIndex(nextIndex);
    document.getElementById(`${tabsId}-tab-${nextIndex}`)?.focus();
  };

  return (
    <section id={id} className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <p className="text-eyebrow text-ink-muted uppercase">{eyebrow}</p>
        <h2 className="text-h2-soft text-ember-text mt-5 max-w-[34ch]">{heading}</h2>

        <div
          role="tablist"
          aria-label={heading}
          className="border-hairline mt-10 flex gap-2 overflow-x-auto border-b lg:mt-12"
        >
          {tabs.map((tab, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={tab.label}
                type="button"
                role="tab"
                id={`${tabsId}-tab-${index}`}
                aria-selected={isActive}
                aria-controls={`${tabsId}-panel-${index}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={handleKeyDown}
                className={cn(
                  'text-nav relative shrink-0 px-4 py-3 whitespace-nowrap transition-colors duration-[var(--duration-base)]',
                  isActive ? 'text-ink-strong' : 'text-ink-muted hover:text-ink-strong',
                )}
              >
                {tab.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    'bg-ember absolute inset-x-0 -bottom-px h-[2px] transition-opacity duration-[var(--duration-base)]',
                    isActive ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </button>
            );
          })}
        </div>

        {activeTab ? (
          <div
            key={activeIndex}
            role="tabpanel"
            id={`${tabsId}-panel-${activeIndex}`}
            aria-labelledby={`${tabsId}-tab-${activeIndex}`}
            tabIndex={0}
            className="pt-10 lg:pt-12"
          >
            {activeTab.capabilities && activeTab.capabilities.length > 0 ? (
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {activeTab.capabilities.map((capability) => (
                  <article key={capability.title} className="flex flex-col">
                    <span aria-hidden="true" className="bg-ember block h-[2px] w-7" />
                    <h3 className="text-card text-ink mt-5">{capability.title}</h3>
                    <p className="text-body text-ink-muted mt-4">{capability.body}</p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-body text-ink-muted max-w-[60ch]">
                {activeTab.placeholder ?? '[Content for this tab to be supplied]'}
              </p>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
