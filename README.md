# McCarthy — Web

The McCarthy homepage, rebuilt to match the layout and design system of
`https://www.kyndryl.com/in/en` as closely as possible, using McCarthy's own
brand, copy and assets.

Every dimension in this codebase was **measured from the live reference in a
real browser** (computed styles and bounding boxes at 1440, 1536, 768 and 390),
not estimated from a screenshot.

---

## 1. Method

1. **Analyse** — drove the reference with Playwright: extracted the full
   background-band map, every heading's position and typography, the button and
   card style census, image crops, and the container-width distribution. Saved
   as `inventory-*.json` / `bands-*.json` plus per-viewport slice captures.
2. **Tokenise** — turned the extracted values into the `@theme` block in
   `src/styles/globals.css`.
3. **Build** — one component per section, in the reference's order.
4. **Compare and refine** — rendered the build at the same viewports, compared
   slice by slice against the reference captures, and corrected. Four passes.

### What the measurements gave us

| Property             | Reference (measured)                                 | Implemented |
| -------------------- | ---------------------------------------------------- | ----------- |
| Header bar           | floating, inset 16px, 60px tall, 8px radius          | identical   |
| Content container    | 1376px inside a 1440px frame (32px gutters)          | identical   |
| Hero height          | 804px at a 900px viewport (~89svh)                   | 801px       |
| Hero headline        | 48px / 56px, weight 300, −0.48px tracking            | identical   |
| Headline column      | 522px wide, x=32                                     | identical   |
| Hero mobile headline | 40px / 51.2px, weight 300                            | identical   |
| Body copy            | 16px / 24px                                          | identical   |
| Content button       | 50px tall, 4px radius, 1px border, 12/16px padding   | identical   |
| Nav CTA              | 44px tall, fully rounded, 14px/500                   | identical   |
| Slide dots           | three 15px circles, 22.5px pitch, `#bbb` / `#717171` | identical   |
| Section break type   | 144px / 108px, weight 700, lowercase                 | identical   |
| Capability numerals  | outlined, ~110px                                     | identical   |

### Colour system

Extracted by area-weighted census of the live page:

| Token                                  | Value                                   | Role                    |
| -------------------------------------- | --------------------------------------- | ----------------------- |
| `--color-canvas`                       | `#ffffff`                               | primary surface         |
| `--color-surface-warm`                 | `#f2f1ee`                               | dominant secondary band |
| `--color-surface-cool`                 | `#eef1f1`                               | trust panel             |
| `--color-surface-mist`                 | `#f9f9f9`                               | promo split             |
| `--color-surface-mint`                 | `#e4f4f1`                               | connect band            |
| `--color-surface-slate`                | `#515151`                               | dark statement panel    |
| `--color-ink`                          | `#3d3c3c`                               | body and headings       |
| `--color-ink-muted`                    | `#6d6d6d`                               | secondary text          |
| `--color-ember`                        | `#fb512f`                               | brand blocks and rules  |
| `--color-ember-text`                   | `#ff462d`                               | accent headings         |
| `--color-link`                         | `#29707a`                               | inline links            |
| `--color-verde` → `--color-verde-dark` | `#1fa452` `#1b904b` `#187e3f` `#10592c` | trust panel ramp        |
| `--color-verde-bright`                 | `#4cdd84`                               | header CTA              |
| `--color-abyss` / `-deep`              | `#04191d` / `#010b0e`                   | hero ground             |

## 2. Section order

Matches the reference exactly:

hero → news strip → sticky in-page tabs → who we are → trust band →
**type break** → AI Lab feature → **type break** → capabilities → promo split →
insight grid → recognition split → **type break** → expertise → partners →
**type break** → careers → FAQ → connect → footer

## 3. Components

```
src/components/
├── layout/
│   ├── site-header.tsx      floating bar, scroll states, overlay owner
│   ├── header-nav.tsx       desktop nav (14px labels, 8/12px padding)
│   ├── mobile-menu.tsx      full-screen menu (code-split)
│   ├── search-overlay.tsx   site search (code-split)
│   ├── site-footer.tsx      wordmark, two link groups, legal row
│   └── skip-link.tsx
├── sections/
│   ├── hero/                hero, slide, controls, backdrop, wavefield
│   ├── news-strip.tsx       3-up evergreen strip
│   ├── section-tabs.tsx     sticky pill nav with scroll-spy
│   ├── who-we-are.tsx       copy column + ember brand panel
│   ├── trust-panels.tsx     four-panel horizontal accordion
│   ├── ai-lab.tsx           break + intro + full-bleed feature
│   ├── how-we-help.tsx      break + four numbered capabilities
│   ├── ai-native-promo.tsx  16:9 slot + ember heading
│   ├── insights-grid.tsx    asymmetric 2:1:1 article grid
│   ├── recognition-split.tsx  warm + slate statement panels
│   ├── expertise.tsx        break + intro + feature split
│   ├── partners.tsx         platform band with placeholder marks
│   ├── careers.tsx          break + three-column composition
│   ├── faq-accordion.tsx    accessible accordion
│   └── connect.tsx          mint band + sawtooth line art
├── shared/
│   ├── arrow-link.tsx       teal link + nudging chevron
│   ├── eyebrow.tsx          uppercase label + ember rule
│   ├── type-break.tsx       oversized section break (ghost / accent)
│   ├── placeholder-frame.tsx  marked photography slot
│   ├── brand-wordmark.tsx   original type-set mark
│   ├── masked-lines.tsx     per-line headline reveal
│   ├── app-loader.tsx       first-paint intro
│   └── structured-data.tsx  Organisation + WebSite JSON-LD
└── ui/
    ├── button.tsx           variant × shape × size contract
    └── icon-button.tsx
```

## 4. Responsive

Verified at **320, 375, 425, 640, 768, 1024, 1280, 1440, 1920** — no horizontal
overflow and no console errors at any width. The headline steps 40px → 48px
exactly as the reference does; grids collapse 4→2→1, the trust accordion becomes
a stack, and the nav collapses into the full-screen menu below `lg`.

## 5. Accessibility

The reference is reproduced visually, but several of its patterns are not
accessible and were rebuilt properly rather than copied:

- ARIA carousel pattern with a real `tablist`, `inert` off-screen slides, and a
  polite announcer that stays silent while auto-rotating.
- A pause control for the auto-rotating hero (WCAG 2.2.2) — the reference has
  none. Ours is always focusable and fades in on hover/focus, so the default
  composition is unchanged.
- FAQ built from native buttons with `aria-expanded` / `aria-controls`.
- Overlays: focus trap, Escape to close, focus restored to the trigger, scroll
  lock that also pauses Lenis.
- Skip link, single `<h1>`, labelled landmarks, visible focus rings, 32px hit
  areas on the 15px dots (WCAG 2.5.8).
- Everything degrades under `prefers-reduced-motion`, enforced both in Framer
  (`MotionConfig reducedMotion="user"`) and in CSS.

## 6. Performance

- Server components by default; the client boundary starts at `AppProviders`.
- Mobile menu and search are dynamically imported on first open.
- Hero and feature artwork are inline vector (~4 KB) rather than photographs:
  no image requests, sharp at every DPR, no LCP cost.
- Animation is transform/opacity only; pointer parallax writes CSS variables
  from a single rAF instead of re-rendering React.
- Fonts self-hosted via `next/font` with generated fallback metrics.
- Production build: **17.1 kB route JS / 180 kB First Load JS**.

## 7. Deliberate differences from the reference

These are content and licensing decisions, not layout ones — every slot keeps
the reference's position, crop and rhythm.

| Slot               | Reference                             | Here                                         | Why                                              |
| ------------------ | ------------------------------------- | -------------------------------------------- | ------------------------------------------------ |
| News strip         | press releases                        | evergreen insight/framework/lab links        | no news yet                                      |
| Trust band         | analyst awards (ISG, Gartner, IDC)    | philosophy, AI Lab, methodology, engineering | no analyst recognition                           |
| Case-study feature | named client + portrait               | AI Lab demo over the site's own artwork      | no verified client engagement                    |
| Recognition panel  | Gartner Magic Quadrant                | published methodology                        | no analyst recognition                           |
| Expertise feature  | attributed executive quote + portrait | unattributed market observation              | no verified spokesperson                         |
| Partner band       | AWS / Cisco / SAP marks               | neutral placeholder plates                   | no confirmed partnerships; marks are trademarked |
| Careers            | "Most Loved Workplace" award          | honest culture statement                     | no such award                                    |
| All photography    | stock/commissioned photos of people   | marked placeholder frames                    | no verified McCarthy photography                 |
| Social icons       | brand glyphs                          | labelled text link                           | trademarked marks                                |
| Display typeface   | TWK Everett (licensed)                | Inter Tight (closest open equivalent)        | licence                                          |

Body copy uses **Roboto**, which is what the reference uses and is openly
licensed.

## 8. Getting started

```bash
npm install
cp .env.example .env.local     # set NEXT_PUBLIC_SITE_URL
npm run dev
```

| Script              | Purpose                                  |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | development server                       |
| `npm run build`     | production build (type-checks and lints) |
| `npm start`         | serve the production build               |
| `npm run typecheck` | `tsc --noEmit`                           |
| `npm run lint`      | ESLint                                   |
| `npm run format`    | Prettier                                 |

## 9. Hero video

The hero plays `public/videos/hero-wave.mp4` (1920x1080, 20s, silent, 4.7 MB) as
one continuous loop behind all three slides, so it never restarts when the copy
rotates. It is declared in `src/content/hero-slides.ts`:

```ts
export const HERO_BACKGROUND: HeroMedia | undefined = {
  videoSrc: '/videos/hero-wave.mp4',
  posterSrc: '/videos/hero-wave-poster.jpg',
};
```

Set it to `undefined` and the hero falls back to the vector wave artwork with no
other change.

Behaviour, in `components/sections/hero/hero-video.tsx`:

- The 37 KB poster frame carries the first paint; the video fades in only once
  the browser reports `canplay`, so the LCP element is never 4.7 MB of video and
  there is no black or half-decoded frame.
- `preload="metadata"` keeps the payload off the critical path.
- Muted + `playsInline` + `autoPlay` — the exact combination mobile browsers
  require to permit inline autoplay.
- Under `prefers-reduced-motion` the video never plays; the poster is rendered
  through `next/image` instead.
- Footage is left untinted. The per-slide accent glow applies only to the vector
  fallback — washing teal footage with ember only muddies it, and the reference
  runs the same untinted footage under every slide.

The poster was generated from frame 0.6s of the source video.

Recommended encode for replacements: H.264 MP4, 1920x1080, 6-20s seamless loop,
**no audio track**, 2-4 Mbps, `-movflags +faststart`.

## 10. Known follow-ups

1. `PREFETCH_SITE_ROUTES` in `src/lib/navigation.ts` is `false` while the
   destination pages are unbuilt; flip it to `true` once they ship.
2. Placeholder frames are waiting on real photography — dropping images in
   changes no layout.
3. Search filters the navigation model; swap in a real index when there is
   content to index.
4. Lighthouse has not been run in this environment; the build is structured for
   it — run it against `npm start` before launch.
5. `scripts/*.cjs` were added by a separate process and are unused by this
   build.
6. `public/kyndryl-assets/` (~290 MB) is scraped third-party material and is not
   referenced by any component — see the table in section 7. It should be
   deleted before deploy; everything in `public/` ships.
