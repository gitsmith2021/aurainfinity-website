# Aura Infinity — Design Constitution

> The single source of truth for the visual identity and design language of the
> Aura Infinity corporate website. Every page, section and component must follow
> this document. When code and this document disagree, this document wins —
> change the document first, then the code.

This is not a style guide for a marketing site. It is the design constitution
for a long-lived engineering brand. The goal is a website that still feels
correct in five years.

---

## 1. North Star

We are building the website of an **engineering company**, not a marketing
company. A visitor should leave thinking:

> "These people know exactly what they are building."
>
> "This company builds software with depth."

Every decision below exists to protect that impression. If a proposed addition
does not increase clarity, trust or craft, it does not ship.

---

## 2. Brand Personality

Aura Infinity is **calm, thoughtful, intelligent, confident and purposeful**.

It never shouts. It never exaggerates. Its confidence is earned — it comes from
engineering excellence, thoughtful design, platform architecture, and products
that solve real problems.

Three rules govern everything:

1. **Every page should feel intentional.** Nothing is there by accident.
2. **Every animation should have a purpose.** Motion clarifies; it never decorates.
3. **Every word should earn its place.** Cut anything that does not add meaning.

---

## 3. Design Philosophy

Design communicates **clarity** and is optimised for **trust**, not conversion
theatrics.

- Large typography
- Generous whitespace
- Minimal distractions
- Elegant composition
- Premium visual hierarchy

**Design for trust, not for marketing.**

### Learn from, never copy

Study the *philosophy* of Linear, Stripe, Vercel, Framer, Raycast and Arc —
restraint, hierarchy, craft, confidence. Do not imitate their layouts or lift
their components. We arrive at the same level of quality through our own
decisions.

### Never do

- Corporate templates
- Generic startup-website patterns
- Stock photography
- Fake dashboard screenshots
- AI-generated "office people"
- Huge gradients everywhere
- Excessive glassmorphism
- Gimmicky animations

---

## 4. Color System

Purple is the single accent — used with restraint, never as wallpaper. **No
rainbow colors. No neon. No glow as decoration.**

The site is **dual-tone**: sections alternate between dark and light bands (see
§6). Both tones share the same brand purple and the same *semantic* token names
(`background`, `surface`, `foreground`, `muted`, `border`, …). A section
declares its tone once, and every component inside resolves the same tokens to
the correct values. **Components never hardcode a color and never assume a
tone** — they style with semantic tokens so they look correct in either band.

### Dark tone (default — `.theme-dark`)

| Role               | Token              | Hex       |
| ------------------ | ------------------ | --------- |
| Primary (Aura)     | `brand`            | `#7C3AED` |
| Secondary purple   | `brand-soft`       | `#A855F7` |
| Accent purple      | `accent`           | `#C084FC` |
| Background          | `background`       | `#09090B` |
| Surface            | `surface`          | `#18181B` |
| Elevated surface   | `surface-elevated` | `#27272A` |
| Primary text       | `foreground`       | `#FAFAFA` |
| Secondary text     | `muted`            | `#A1A1AA` |
| Muted text         | `subtle`           | `#71717A` |
| Border             | `border`           | `#27272A` |
| Success            | `success`          | `#22C55E` |
| Warning            | `warning`          | `#F59E0B` |
| Danger             | `danger`           | `#EF4444` |

### Light tone (`.theme-light`)

| Role               | Token              | Hex       |
| ------------------ | ------------------ | --------- |
| Primary (Aura)     | `brand`            | `#7C3AED` |
| Emphasis purple    | `brand-soft`       | `#7C3AED` |
| Accent purple      | `accent`           | `#7C3AED` |
| Background          | `background`       | `#FFFFFF` |
| Surface            | `surface`          | `#FAFAFA` |
| Elevated surface   | `surface-elevated` | `#FFFFFF` |
| Primary text       | `foreground`       | `#18181B` |
| Secondary text     | `muted`            | `#52525B` |
| Muted text         | `subtle`           | `#71717A` |
| Border             | `border`           | `#E4E4E7` |

> On light bands the emphasis/accent purples resolve to the deeper `#7C3AED`
> so small text and eyebrows keep AA contrast. `brand` (the solid button fill)
> is identical in both tones. Status colors are shared.

### Usage rules

- **Purple is a scalpel, not a bucket.** Use it for the primary action, a single
  word of emphasis in a headline, focus rings, and active states. A section
  should rarely contain more than one purple element.
- **Backgrounds layer by elevation:** `background` → `surface` → `surface-elevated`.
  Separate planes with the `border` color and elevation, not with shadow.
- **Status colors are for status only** (badges, validation, system state),
  never for branding or decoration.
- Gradients, where used, stay within the purple family (`brand` → `brand-soft`)
  and appear at most once per viewport as a quiet ambient wash — never a hard,
  saturated band.

These tokens are defined in [`app/globals.css`](../app/globals.css) under
`@theme` and consumed as Tailwind utilities (`bg-surface`, `text-muted`,
`border-border`, …). Never hardcode a hex value in a component; always reference
the token.

---

## 5. Typography

Type is **one of the strongest design elements**. Treat it as such.

**Font:** Inter (loaded via `next/font`, variable `--font-inter`).

### Scale

| Role          | Size        | Weight  | Tracking          |
| ------------- | ----------- | ------- | ----------------- |
| Hero headline | 56–72px     | 700–800 | tight (`-0.02em`) |
| Section title | 36–48px     | 700     | tight (`-0.02em`) |
| Subtitle/lead | 20–24px     | 400–500 | normal            |
| Body          | 18px        | 400–500 | normal            |
| Small / label | 16px        | 500     | normal            |
| Caption       | 14px        | 500     | normal            |
| Eyebrow       | 12–13px     | 500–600 | wide (`0.18em`), uppercase |

### Rules

- **Headings:** weight 700–800, tight letter-spacing. Big, calm, confident.
- **Body:** weight 400–500, 18px base, line-height ~1.6 for comfortable reading.
- **Letter spacing is subtle** — tighten large headings slightly; never loosen
  body text. Only eyebrows use wide tracking.
- **Measure:** cap body line length around 65–75 characters (`max-w-2xl`/`3xl`).
- Use `text-balance` on headings and `text-pretty` on paragraphs to avoid
  ragged orphans.
- One accent word per headline maximum, set in `brand-soft`/`accent` — used to
  point at the idea, not to decorate.

---

## 6. Theme

The site is **dual-tone, not a user-toggled light/dark mode.** There is no theme
switcher. Instead, the page is composed of alternating **section bands** — some
dark, some light — to create rhythm and let key moments breathe. The tone of
each band is an editorial decision baked into the page, not a preference.

### How it works

- A band wraps its content in `.theme-dark` or `.theme-light`, which locally
  redefines the semantic color tokens. Everything inside resolves automatically.
- The document anchors in **dark**: the body background, the hero, and the
  footer are dark, so there is no flash on load and the brand reads as
  engineering-serious.
- Use the [`Section`](../components/Section.tsx) `tone` prop (or a band wrapper)
  to set tone — never restyle a component per section by hand.

### Rhythm

Alternate deliberately; never place two same-tone content bands back to back
unless they are visually distinct. The current landing rhythm is:

`Hero (dark) → Ecosystem (light) → Philosophy (dark) → Mission (light) →
Technology (dark) → Timeline (light) → Footer (dark)`

### Rules

- Both tones must feel equally intentional and premium — the light bands are
  crisp and calm (white/`#FAFAFA`), not a washed-out afterthought.
- Transitions between bands are clean color edges; do not blend them with large
  gradients.
- Purple, motion, typography and spacing rules are **identical** across tones.
  Only the surface/text/border tokens change.

---

## 7. Spacing & Layout

**Whitespace is a feature.** Do not compress sections to fit more in. Breathing
room is part of the message.

| Property                | Value           |
| ----------------------- | --------------- |
| Section vertical rhythm | 120–180px       |
| Content width           | 1200px          |
| Maximum width           | 1440px          |
| Gutter (mobile)         | 24px            |
| Gutter (desktop)        | 32–48px         |

### Rules

- Content column centers at **1200px** (`max-w-6xl` ≈ 1152px is acceptable as
  the reading column); the outer canvas may extend to **1440px** for full-bleed
  ambient elements.
- Section padding: `py-32` (128px) minimum on desktop, scaling toward 180px for
  major transitions; `py-24` on mobile. Never less.
- Prefer large, consistent margins over clever density. Comfortable reading
  beats information per pixel.
- Vertical rhythm is consistent and predictable — sections feel like chapters.

---

## 8. Components

### Buttons

| Variant   | Style                                        | Use                        |
| --------- | -------------------------------------------- | -------------------------- |
| Primary   | Solid `brand` purple, white text             | The single main action     |
| Secondary | Outline — `border`, transparent fill         | Supporting action          |
| Ghost     | Transparent, text only, subtle hover         | Tertiary / inline          |

- One primary button per view. Pills/rounded, generous horizontal padding.
- Hover is a gentle lift in tone/elevation — never a bounce or hard glow.

### Cards

- **20px border radius** (`rounded-card`).
- Soft borders (`border`), minimal shadow, **no heavy glow**.
- Separation comes from elevation (`surface` / `surface-elevated`) and border —
  not drop shadow.
- Glass effects used **sparingly**: a single faint backdrop blur at most, never
  stacked, never on every card in a dense grid.
- Hover: gentle ~4px rise and a barely-there border lightening. Nothing more.

### Forms

- Clean, simple, rounded, accessible.
- Visible labels, generous hit areas, clear focus rings (`brand`), honest error
  states using `danger`.
- No placeholder-as-label. Meet WCAG AA contrast against `surface`.

### Navigation

- **Transparent initially**, settling into a solid/elevated background after
  scroll. Sticky, minimal, quiet.
- Logo left, a short set of links, one contact affordance. No mega-menus.

---

## 9. Motion

Use **Framer Motion**. Animation should feel **expensive: slow, elegant,
intentional**. Motion exists to direct attention and explain change — never to
entertain.

**Allowed:** fade · slide · scale · gentle hover.

**Forbidden:** bounce · spin · rubber-band · parallax overuse · flying
elements · particle effects.

### Defaults

- **Easing:** a single shared ease-out curve, `cubic-bezier(0.22, 1, 0.36, 1)`,
  exported as `EASE` in [`lib/motion.ts`](../lib/motion.ts). Do not invent new
  curves per component.
- **Durations:** 500–800ms for entrances; 200–300ms for hover/interaction.
- **Distance:** entrances rise 12–24px and fade in. Small, calm displacement.
- **Reveal once:** scroll-triggered reveals fire a single time
  (`viewport={{ once: true }}`), with a short negative margin so they trigger
  slightly before fully in view.
- **Stagger:** group reveals (card grids, lists) stagger children 50–120ms.
- **Respect `prefers-reduced-motion`** — already enforced globally in
  `globals.css`. Never override it.

Shared primitives live in [`lib/motion.ts`](../lib/motion.ts) (`EASE`, `fadeUp`,
`stagger`) and the [`Reveal`](../components/Reveal.tsx) component. Reuse them
instead of writing ad-hoc variants.

---

## 10. Iconography

- **Lucide icons only.** Never mix icon libraries.
- **Outline style**, consistent stroke width (`1.75`).
- Consistent sizing — `20px` (`h-5 w-5`) in cards and inline, `24px` for
  feature emphasis. Pick a size per context and hold it.
- Icons support meaning; they are not decoration. One icon per concept.

---

## 11. Imagery

Trust is built with substance, not stock.

**Never use:** stock office photography · fake meetings · handshakes · smiling
executives · AI-generated people · fabricated dashboard screenshots.

**Use instead:**

- Real product screenshots
- Architecture diagrams
- Platform illustrations
- Abstract engineering graphics
- Geometric compositions

When real product imagery does not yet exist, prefer restrained geometric and
diagrammatic compositions over anything fake. An honest abstraction beats a
dishonest screenshot.

---

## 12. Copywriting

Write with quiet confidence. Explain. Never exaggerate.

**Banned words:** revolutionary · best · world-class · cutting-edge · next-
generation · disruptive · leading · innovative solutions — and any superlative
that asserts greatness instead of demonstrating it.

### Voice

- Simple, direct language. Short sentences. Concrete nouns.
- Describe what we build and why it matters — let the substance imply the
  quality.
- No fake statistics, no countdown urgency, no buzzword stacking.
- If a sentence would survive in internal engineering documentation, it is
  probably honest enough for the site.

---

## 13. Logo Usage

The logo is the **strongest brand asset**.

- Always use the official Aura Infinity **horizontal** logo (mark + wordmark).
- Maintain **generous clear space** around it — at minimum the height of the
  mark on every side.
- **Never** distort, stretch, recolor outside brand purple, rotate, or animate
  the logo.
- It sits quietly in the navigation and footer. It is presented, not performed.

---

## 14. Definition of Done (per page / component)

A contribution is ready only when **all** are true:

- [ ] Uses **only** theme tokens — no hardcoded colors, sizes off the scale, or
      stray fonts.
- [ ] Typography matches the scale; headings tight-tracked, body at 18px.
- [ ] Section spacing respects the 120–180px rhythm; nothing feels cramped.
- [ ] Motion uses shared `EASE`/primitives, is subtle, and honours reduced-motion.
- [ ] Lucide outline icons only, consistent size and stroke.
- [ ] No banned imagery and no banned copywriting words.
- [ ] Fully responsive and elegant from 320px to 1440px.
- [ ] Accessible: AA contrast, visible focus, semantic markup, keyboard-usable.
- [ ] Answers "yes" to: *does this make the brand feel more like a serious
      engineering company?*

---

## 15. Overall Goal

The Aura Infinity website should become one of the finest corporate software
websites built by an Indian engineering company. It should feel **timeless,
premium, elegant, minimal and confident**.

Every page communicates one message:

> We don't just build software.
> We build platforms that solve meaningful problems.
