# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (vanilla), no framework. Confirmed in `uploads/RECED/reced-producoes-design-brief.md`.

## Users

Two audiences with similar weight:
- Igrejas e ministérios de louvor — pastores e líderes de louvor buscando produção audiovisual (clipes, cobertura de eventos ao vivo, conteúdo institucional) para servir à mensagem da igreja.
- Artistas/cantores gospel independentes — músicos cristãos buscando clipes autorais e serviços técnicos de mixagem e masterização.

Both evaluate the site to decide whether to reach out (WhatsApp CTA), based on portfolio quality and trust signals.

## Product Purpose

RECED Produções is a Christian audiovisual production company. The site is an institutional portfolio/showcase (quem somos, vídeos, contato) whose job is to demonstrate production quality and convert visitors into WhatsApp contacts. Success is a qualified contact/inquiry, not e-commerce or self-serve signup.

## Positioning

The name comes from the biblical word *hesed* — God's loyal, constant, merciful love. RECED frames its work as worship, not just content production: "A arte também é adoração." The differentiator claimed is a broader real scope than the YouTube channel suggests (the channel shows worship music/covers, but the actual service list also includes live event coverage, institutional/social content, and audio mixing/mastering) combined with technical excellence in service of a message, not just aesthetics.

## Operating Context

- Existing channels: YouTube (@RECEDPRODUÇÕES) and Instagram (@recedproducoes), with existing content (clipes autorais, covers, louvor ao vivo, conteúdo de adoração/fé).
- The site is single-page with scroll and a fixed top nav, seven sections in this fixed order: Hero, Sobre, Serviços, Portfólio, Prova social, Contato, Footer.
- Portfólio section needs a JS-vanilla filterable grid: Todos / Música / Eventos / Institucional. Mixagem/Masterização is intentionally excluded from the portfolio grid in v1 (own CTA for orçamento instead); a future "antes/depois" audio section is a possible later addition, not current scope.
- Contato is a WhatsApp CTA, not a form, duplicated in the fixed nav and in a closing section before the footer.

## Capabilities and Constraints

Confirmed services (broader than the YouTube channel alone suggests):
1. Música / Clipes autorais — composição à produção completa.
2. Cobertura de eventos ao vivo — cultos, conferências, eventos.
3. Institucional / Redes sociais — conteúdo de marca.
4. Mixagem e Masterização — serviço técnico de pós-produção de áudio, no portfolio link, own quote CTA.

Open/undecided product facts:
- Final content roster for the portfolio grid, per category, is not yet supplied (video/thumbnail material to be gathered).
- Final hero/sobre copy (positioning line, mission summary) may still evolve; current copy in `index.html` is a working draft, not necessarily final client-approved text.

## Brand Commitments

- Name: RECED Produções. Existing logo files are supplied (`assets/reced-logo-*`, `uploads/RECED/Reced_Logo/*`); logo is monochrome (B&W) and does not itself fix a color palette.
- Logo reading: geometric sans-serif condensed type with straight-cut interruptions (e.g. in "E"/"C"); icon mashes up microphone + soundwave + film/camera reel, signaling a multimedia (audio + video) producer, not just a clip channel.
- Confirmed aesthetic direction: dark, cinematic, dramatic (studio/stage), explicitly not light-clean-minimalist and not warm-organic clichés; the reasoning on record is that the product (clips, live stage/studio footage) must stay the visual protagonist and the site should avoid the generic "site de igreja" look (white background, sunset photo, script font).
- Palette discipline fixed by the client: a single accent color; variation comes from that accent's own opacity/luminance, never from introducing additional hues.
- Current implementation (`index.html`) uses palette option A from the brief (âmbar/estúdio: bg `#0D0C0B`, accent `#C9A227`) — the brief itself records this as not yet a final client decision among options A–G, with the consultant's own recommendation leaning toward B (vermelho cirúrgico) or G (monocromático). Treat A as the incumbent working choice unless the user says otherwise.
- Typography direction confirmed as geometric/technical for display type (currently Space Grotesk), not serif/classic, to avoid clashing with the logo. Current stack also uses Inter (body) and Cormorant Garamond (loaded but not obviously used yet).

## Evidence on Hand

- Real assets: logo files (multiple variants), existing YouTube/Instagram channels with real content.
- No testimonials, client counts, or case-study numbers exist yet — the design brief lists "prova social" material as an open pending item. Do not fabricate testimonials, numbers, or client logos for the Prova social section; state the absence and use placeholder/image-slot patterns already established in `image-slot.js` until real material is supplied.
- Portfolio video/thumbnail content per category is not yet gathered — treat as pending, same rule against fabrication.

## Product Principles

1. The product (audiovisual work) is the visual protagonist — the interface recedes; darkness and restraint exist to let real photo/video content carry the page.
2. Single-accent color discipline is non-negotiable — never introduce a second hue to create variety; use the one accent's opacity/luminance instead.
3. Never fabricate proof — testimonials, numbers, and portfolio content are real-material-only; represent absence honestly rather than inventing evidence.
4. Serve two audiences (churches/ministries and independent gospel artists) without splitting the page into two tracks — services and portfolio categories already span both.
5. Avoid the "clichê site de igreja" and the "clichê nicho gospel/worship" visual defaults called out in the design brief (light/warm/sunset/script-font churches look; violet-electric worship-tech look) — the differentiation is deliberate, not accidental.

## Accessibility & Inclusion

No product-specific accessibility requirement has been established beyond standard web accessibility practice.
