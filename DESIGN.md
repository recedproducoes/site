---
name: RECED Produções
description: Dark, cinematic single-page portfolio for a Christian audiovisual production house
colors:
  bg: "#0F0A08"
  bg-surface: "#171110"
  bg-elev: "#201816"
  accent: "#D6773A"
  text: "#F4EFEB"
  text-2: "#A99B92"
  border: "rgba(244,239,235,.10)"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.2rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1.02
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.12em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.18em"
  signature:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "clamp(2rem, 4vw, 3.2rem)"
    fontWeight: 300
    lineHeight: 1
rounded:
  sm: "2px"
  md: "3px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "clamp(32px,5vw,72px)"
  section-y: "clamp(80px,10vw,128px)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: "18px 28px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
  button-ghost-hover:
    textColor: "{colors.accent}"
  filter-chip-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: "11px 20px"
  filter-chip-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    rounded: "{rounded.sm}"
    padding: "11px 20px"
  card:
    backgroundColor: "{colors.bg-elev}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: RECED Produções

## Overview

**Creative North Star: "The Dark Stage"**

The site is a darkened stage lit by one instrument: a single warm accent picking out the details that matter, everything else held in near-black. Nothing competes with the product — real footage, real stages, real studio moments — for attention; the interface's job is to recede so the work reads as the protagonist. This is a deliberate rejection of two clichés the client named explicitly: the generic "site de igreja" (white background, sunset photography, script font) and the "clichê nicho gospel/worship" look (violet-electric gradients, rainbow waveform color). Instead the palette borrows its discipline from studio and stage lighting — warm, technical, and restrained rather than devotional-soft or neon-spiritual.

The system currently ships four selectable theme variants (Âmbar/Estúdio, Vermelho cirúrgico, Cobre queimado, Monocromático) through a runtime theme switcher (see the `PALETTES` map and `applyTheme()` in `index.html`'s component script). **Cobre queimado (burnt copper) is the normative default** — it is the configured default of the interactive theme prop, distinct from the Âmbar values hardcoded in the base `<body>` CSS, which only apply before the runtime theme is applied. Treat Cobre queimado's hex values as the system's source of truth; the other three palettes are valid alternate expressions of the same structure (same roles, different hue), not separate systems.

Layout stays a strict single column of full-bleed sections in fixed order (Hero → Sobre → Serviços → Portfólio → Prova social → Contato → Footer), scored by generous cinematic vertical rhythm rather than a dense corporate grid.

**Key Characteristics:**
- Near-black stage backdrop with one warm accent doing all the visual signaling
- Condensed, geometric, uppercase, wide-tracked display type — never serif for structural headings
- No box-shadows; depth comes from luminance steps between three background layers
- Generous cinematic vertical rhythm (80–128px between sections, not 48px)
- Real photography/video fills every visual slot; the chrome around it stays quiet

## Colors

Warm, near-monochrome dark palette with exactly one accent hue; all variation comes from luminance layering and the accent's own opacity, never from adding a second hue.

### Primary
- **Burnt Copper** (`#D6773A`): the single accent. Used for the active nav link, CTA button fills, active filter chip, hero headline emphasis word, section eyebrow labels, icon strokes, decorative rule lines, and stat numbers in Prova social. Appears in exactly one weight of use per element — never gradient-blended with a second hue.

### Neutral
- **Espresso Black** (`#0F0A08`) — page background (`--bg`), and the color CTA-button text sits on top of the accent fill.
- **Warm Charcoal** (`#171110`) — first elevation step (`--bg-surface`): alternating section backgrounds (Serviços, Prova social) that need to read as a distinct band without a hard border.
- **Ember Elevated** (`#201816`) — second elevation step (`--bg-elev`): cards, portfolio tiles, testimonial panels — anything that should read as "sitting on top of" the page.
- **Warm Bone** (`#F4EFEB`) — primary text color (`--text`); also the hover-state color for ghost links and nav items.
- **Muted Clay** (`#A99B92`) — secondary text (`--text-2`): body copy, captions, eyebrow sublabels, inactive nav links.
- **Ghost Border** (`rgba(244,239,235,.10)`) — the only border color in the system (`--border`): card outlines, section dividers, footer rule. Never a solid neutral gray; always this translucent wash over the background.

### Named Rules
**The One Signal Rule.** The accent is the only hue in the system. Every other color is a luminance step of near-black-to-bone. If a new element needs emphasis, raise its luminance or apply the accent — never introduce a new hue to differentiate it.

**The No-Line-On-Dark Rule.** Borders never use a flat gray; they use `rgba(text, .10)` so the same border value reads correctly across all four palette variants without per-theme border tuning.

## Typography

**Display Font:** Space Grotesk (with sans-serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)
**Signature Font:** Cormorant Garamond, italic, weight 300 (with serif fallback) — reserved exclusively for the "Hesed" wordmark treatment

**Character:** A geometric, condensed, technical sans (Space Grotesk) carries all structural weight — headlines read like stenciled stage signage — paired with a plain, quiet Inter for anything meant to be read at length. Cormorant Garamond is a single deliberate exception: it exists only to render the word "Hesed" itself with a softer, more reverent hand, marking that one word as the emotional/spiritual key underneath the otherwise technical surface.

### Hierarchy
- **Display** (700, `clamp(2.6rem,6.4vw,5.2rem)`, line-height 0.95, letter-spacing -0.01em): hero H1 only.
- **Headline** (700, `clamp(1.9rem,4vw,3.2rem)`, line-height ~1.02): section H2s (Serviços, Portfólio, Prova social, Contato).
- **Title** (600, 13–14px, line-height 1.4, letter-spacing 0.10–0.12em, uppercase): card/component headings (service card titles, portfolio tile titles).
- **Body** (400, 13.5–15px, line-height 1.65–1.75): paragraph copy, testimonial quotes. No max-width enforced numerically but columns stay narrow (max ~420–560px) by layout, not by a `ch` rule.
- **Label** (400, 9.5–11px, letter-spacing 0.16–0.32em, uppercase): nav links, eyebrows, button text, stat captions. This is the system's most distinctive typographic voice — nearly every non-paragraph, non-heading string in the page is a wide-tracked uppercase label.
- **Signature** (300 italic, `clamp(2rem,4vw,3.2rem)`, line-height 1): the "Hesed" wordmark, used twice (Portfólio close, Footer).

### Named Rules
**The Wide Label Rule.** Any UI microcopy that isn't a heading or a paragraph — nav, eyebrows, buttons, captions — is uppercase Inter with letter-spacing between 0.16em and 0.32em. This tracking is what reads as "produção/estúdio" rather than generic marketing copy.

## Layout

Single-column, full-bleed sections stacked in fixed order, no visible grid container — each section manages its own internal grid via CSS `grid-template-columns: repeat(auto-fit/auto-fill, minmax(...))`, which is how the design achieves responsive reflow without breakpoints. Horizontal padding is `clamp(20px,5vw,64px)` on every section; vertical section padding is `clamp(80px,10vw,128px)` (`clamp(48px,6vw,72px)` for the footer) — this generous vertical clamp is the "cinematic" rhythm referenced in the Overview. Internal gaps between elements use an 8-based scale: 4/8/16/20/24/32/48/56/64/72/88/96/128.

Grids collapse to a single column below their `minmax()` floor (300px for portfolio tiles, 250px for service cards, 230px for footer columns, 200px for stat blocks) — there are no explicit media-query breakpoints; the auto-fit/auto-fill grid itself defines responsive behavior.

## Elevation & Depth

No `box-shadow` anywhere in the system — flat by design, because shadows don't read against a near-black background. Depth is conveyed purely through luminance layering across three fixed steps: page background (darkest) → surface (section band) → elevated (card/tile), each roughly one perceptual step lighter than the last. A sticky header uses `backdrop-filter: blur(14px)` over a translucent background as its only depth cue, functioning as a glass layer rather than a shadow-cast one.

### Named Rules
**The Three-Layer Rule.** Depth has exactly three luminance steps (bg → surface → elev). Do not introduce a fourth; if something needs to feel "above" a card, use the accent or a border, not a fourth luminance step.

## Shapes

Uniform sharp-cornered geometry: `border-radius` is either `2px` (buttons, chips, footer social icons) or `3px` (cards, portfolio tiles, testimonial panels) — never a soft/pill radius except on genuinely circular elements (avatars, the play-button badge, the hero scroll-icon ring, which use `border-radius: 50%`). This near-flat corner treatment reads as technical/architectural rather than soft or app-like, consistent with the "studio, not app" character.

## Components

### Buttons
- **Shape:** 2px radius, near-square.
- **Primary (filled):** `background: accent`, `color: bg`, bold weight label text, `padding: 11–18px 16–28px`. Used for the site's actual conversions ("Solicitar orçamento", "Fale com a gente" WhatsApp CTA).
- **Hover:** background swaps from accent to the primary text color (Warm Bone), text color stays `bg` — the button briefly "goes white-hot" rather than darkening.
- **Ghost/Outline:** transparent background, 1px `border-color: border`, `color: text`, same label typography. Used for secondary navigation-style actions ("Conheça nossa história", "Ver todos os projetos").
- **Ghost hover:** border and text color both shift to accent.

### Chips (Portfolio filter)
- **Inactive:** transparent background, `color: text-2`, 1px `border-color: border`.
- **Active:** `background: accent`, `color: bg`, `border-color: accent`.
- **Hover (inactive only):** `border-color` shifts to accent while background stays transparent — a preview of the active state without committing to it.

### Cards / Containers
- **Corner Style:** 3px radius.
- **Background:** `bg-elev` (the lightest of the three layers) with a 1px `border` in the translucent Ghost Border color.
- **Shadow Strategy:** none — see Elevation & Depth; cards are distinguished by luminance + border only.
- **Hover:** border color shifts to accent (service cards, portfolio tiles) — the only interactive signal, no lift/transform.
- **Internal Padding:** 24–28px.

### Navigation
- Sticky top bar, translucent dark background with `blur(14px)` backdrop filter, bottom hairline border.
- Links are Label-scale uppercase text: active/current link (`#hero` by default) rendered in accent, all others in `text-2`, all transitioning to `text` on hover except the final CTA link, which stays accent-outlined and inverts to filled accent on hover.
- Mobile treatment is not explicitly implemented in the current markup (no hamburger/collapse pattern present) — nav currently relies on flex-wrap and shrinking gap clamps rather than a distinct mobile nav component.

### Image Slot (signature component)
A placeholder/media component (`<image-slot>`, defined in `image-slot.js`) used throughout instead of raw `<img>` tags for every content photo/video still to be sourced (hero background, about photo, service thumbnails, portfolio tiles, testimonial avatars, contact photo). Always paired with a `placeholder` attribute describing the real content intended for that slot (e.g. "Foto de palco / show ao vivo (fundo do hero)"), so the system stays honest about what is real content versus pending material rather than silently shipping stock imagery.

## Do's and Don'ts

### Do:
- **Do** keep the accent to a single hue system-wide; introduce new emphasis by raising luminance or accent opacity, never a second color (The One Signal Rule).
- **Do** use uppercase, wide-tracked (0.16–0.32em) Inter for all non-heading, non-paragraph microcopy (The Wide Label Rule).
- **Do** keep border-radius at 2–3px for rectangular elements; reserve `50%` strictly for genuinely circular elements (avatars, icon badges, rings).
- **Do** use the `<image-slot>` component with a descriptive `placeholder` for any media that isn't yet sourced, rather than a gray box or stock photo.
- **Do** reserve Cormorant Garamond italic exclusively for the "Hesed" signature moment; it must not spread into general body or heading use.

### Don't:
- **Don't** add `box-shadow` anywhere — depth is luminance-only (The Three-Layer Rule).
- **Don't** use a solid gray border; borders are always the translucent `rgba(text, .10)` wash so they survive palette switching.
- **Don't** fabricate testimonials, client counts, or portfolio content — the Prova social numbers and quotes currently in the markup are placeholder/example content pending real client material (see PRODUCT.md's Evidence on Hand); do not present them as final without confirming they are real.
- **Don't** default new work to the Âmbar CSS values without checking the runtime theme — Cobre queimado is the configured default; Âmbar is only the pre-JS fallback.
- **Don't** slide toward the "clichê site de igreja" (light background, sunset photography, script font) or the "clichê gospel/worship" look (violet-electric gradients, multicolor neon) — both are explicitly rejected anti-references for this system.
