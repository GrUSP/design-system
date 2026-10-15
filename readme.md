# GrUSP Design System

The brand & UI system for **GrUSP** — *Associazione Gruppo Utenti e Sviluppatori PHP Italiani*. Since 2003, GrUSP has been the reference point in Italy for good practices in web development, organising ~23 events a year (phpday, jsday, reactjsday, vueday, angularday, cssday, containerday, Kerning, rubyday and more), the GrUSP Academy workshops, and a 5,000-strong developer community.

> "A welcoming, friendly and diverse environment where anyone can feel at ease."

This project is a **design system**: global CSS tokens, real brand fonts & logos, reusable React components, and a click-through recreation of the grusp.org website. A compiler bundles the components into `_ds_bundle.js` and indexes the tokens — consuming projects link `styles.css` and read components from `window.GrUSPDesignSystem_705bf7`.

---

## Sources

Everything here is derived from official material the GrUSP team provided, plus the public site:

- **GRUSP MANUAL 2020** (`uploads/GRUSP MANUAL 2020_web.pdf`) — official brand book. Source of truth for the master palette and the per-conference accent colours.
- **Official logo pack** (`uploads/grusp *.png`) — the full-colour primary (purple TIGNA cat), the calligraphic alternate, the monochrome black "yellow-eyes" lockups, grayscale variants, and yellow/dark header banners. Cleaned copies live in `assets/logos/`.
- **Brand fonts** (`uploads/*.otf`) — **Grota Rounded** (display) and **Proxima Nova** + **Proxima Nova Condensed** (text). Self-hosted in `assets/fonts/`.
- **Brand collateral** (`uploads/intro_Grusp_Tigna.mp4`, `Totem-GrUSP-180x100.pdf`, `Sticker EXA TUTTIFRUTTI.pdf`) — the official logo-reveal animation, a large-format totem and a sticker sheet. Archived in `assets/brand/`.
- **grusp.org** — live website (WordPress), for copy, tone, IA and imagery.

> Fonts are the genuine licensed brand families supplied by the team. **JetBrains Mono** (code/labels) is a system addition, not from the manual — see *Typography*.

---

## Content fundamentals

How GrUSP writes.

- **Voice: warm, plain, peer-to-peer.** They speak as **"we"** to **"you"** — *"We organize events to train and connect people"*, *"Take part in our next events"*. Never corporate or salesy.
- **Inclusive first.** Diversity, accessibility and the Code of Conduct are front-and-centre, stated plainly and proudly (*"where anyone can feel at ease"*). This is a value, not a footnote.
- **Bilingual IT 🇮🇹 / EN.** English-language pages still drop in Italian warmth — *"certamente!"*, *"Entra a far parte della nostra Community"*. A light sprinkle of Italian is on-brand; never machine-stiff.
- **Lowercase event names.** Conferences are written lowercase as wordmarks: *phpday*, *jsday*, *reactjsday*, *vueday*, *cssday*. Keep them lowercase even at the start of a line.
- **Casing.** Sentence case for headlines and UI. Reserve ALL-CAPS for tiny mono kickers/labels (e.g. `// SINCE 2003`).
- **Tone seasoning.** Friendly, a little cheeky (the mascot is a *grumpy* cat, after all), never ironic at the community's expense. Emoji appear sparingly and genuinely — 💛 ❤ 👋 🎓 — usually around community/affection. Don't carpet-bomb emoji.
- **Concrete > buzzwords.** Real dates, real cities, real people. Avoid "synergy/leverage/cutting-edge" filler.
- **Examples:** "Become our speaker!", "Why attend", "Join the workshop", "Subscribe to get updates on upcoming events and initiatives!", "made with 💛 in Italy".

---

## Visual foundations

The GrUSP look is **bold, rounded and a little punk** — high-contrast black-and-yellow with a heavy hand-drawn outline, softened by the friendly Grota Rounded letterforms and the grumpy-cat mascot.

- **Colour.** Master palette is deliberately tiny: **black `#000000`**, **electric yellow `#FFE900`**, **white**, and two heritage purples (**light `#7F72B1`**, **deep `#4C3E8B`**). Black does the structural work; yellow is the one electric accent (the cat's eyes); purple is the secondary/heritage voice. Each *conference* then carries its own accent (phpday blue, vueday green, reactjsday cyan, kerning red…) — see `--c-*` tokens. Backgrounds are mostly **clean white** or **full-black** sections, with occasional saturated **purple** or **yellow** bands for rhythm. No gradients as a rule (the heritage banner has a subtle radial vignette at most).
- **Typography.** **Grota Rounded** (Black/ExtraBold) for all display & headings — rounded, chunky, friendly; tight tracking at large sizes. **Proxima Nova** for body & UI — clean humanist sans. **Proxima Nova Condensed** for big stats and tight numeric accents. **JetBrains Mono** for kickers, labels and code.
- **The heavy keyline.** The single most identifiable motif: a **solid black outline** (2–4px) around the mascot, logos, cards and controls. Pair it with a **hard offset shadow** (`--offset-*`) for the poster/sticker feel — no blur, just a flat black (or yellow) drop behind the shape.
- **Corners.** Soft and generous — radii 8–28px on cards and controls, pill (`999px`) for buttons, tags and badges. Nothing sharp; everything echoes Grota's roundness.
- **Cards.** Two recipes: **poster** (white fill, 2px black border, hard offset shadow) for anything wanting brand presence; **plain** (1px hairline + soft shadow) for dense/quiet UI. Brand/dark cards swap the fill to purple/black.
- **Shadows.** Two systems: *soft* (`--shadow-*`, gentle blur for menus/toasts) and *hard offset* (`--offset-*`, the signature flat sticker shadow). Don't mix the two on one element.
- **Motion.** Friendly and quick. Hovers nudge **−1/−2px and deepen the offset shadow** (the sticker "lifts"); presses **translate down and shrink slightly** (`scale(.985)`). Toggle thumbs use a gentle overshoot (`--ease-pop`). One ambient effect: a slow horizontal **marquee** of conference names. The signature brand animation is the **logo reveal** (`assets/brand/tigna-intro.mp4`): TIGNA starts asleep, the calligraphic *Grusp* script draws in, and the eyes snap open to the alert yellow stare — playful, ~8s, on a clean white field. Everything respects `prefers-reduced-motion`.
- **Hover / press states.** Primary button: black → deep-purple on hover. Accent: yellow → deeper yellow. Secondary/outline & cards: lift + larger offset shadow on hover, settle on press. Tags: hover paints **yellow**; selected paints **black**.
- **Transparency & blur.** Used sparingly — the sticky header is white at ~86% opacity with a 12px backdrop blur; translucent white panels sit on dark bands. Otherwise surfaces are solid.
- **Imagery.** Real event photography — warm, candid, people-focused (audiences, speakers, hallway track). Frame photos in the **black keyline + offset shadow** treatment. Never stocky or sterile.
- **Focus.** Visible 3px purple ring (`--ring`) on every interactive control.

---

## Iconography

- **No bundled icon font.** GrUSP's own site is icon-light; its personality comes from the **mascot** and **logotype**, not a UI icon set. There is no proprietary glyph library in the brand material.
- **The mascot ("TIGNA").** The grumpy cat head is the brand's hero graphic — use the real PNG lockups in `assets/logos/`, never redraw it. The **primary logo is the full-colour version** (purple TIGNA + yellow eyes + black GRUSP, `grusp-squared.png`), with the calligraphic script as its colour alternate. The **black "yellow-eyes" lockups** (`grusp-primary-*`) are the **monochrome / single-colour** version, for b&w or one-colour contexts.
- **UI icons → Lucide.** For functional UI glyphs (calendar, pin, mail, arrows, close, share) use **[Lucide](https://lucide.dev)** — a rounded, 2px-stroke open-source set whose weight matches Grota and the brand keyline. Load from CDN, or inline small SVGs at `stroke-width:2–2.2`, `stroke-linecap:round`. *This is a documented substitution: GrUSP ships no icon set of its own, and Lucide's rounded stroke is the closest match to the brand's feel.*
- **Emoji** are allowed sparingly as affordances/affection (💛 📅 📍 👋 🎓), consistent with the site's own voice. Don't build core UI out of emoji.
- **Unicode glyphs** like `→ ✦ ✺ ×` are used as lightweight decorative/arrow marks.

---

## Typography substitution note

The display & text families (**Grota Rounded**, **Proxima Nova**, **Proxima Nova Condensed**) are the **genuine licensed brand fonts**, supplied by the team and self-hosted as `.otf` in `assets/fonts/`. The only addition is **JetBrains Mono** (downloaded from Google Fonts) for code and mono kickers — the brand book specifies no monospace, so this is a tasteful, clearly-flagged utility choice. Swap it if GrUSP standardises on a different mono.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (only `@import`s the token + base layers). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills front-matter so the system works as a downloadable Claude skill.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `elevation.css` · `base.css`

**`assets/`**
- `logos/` — **full-colour primary** (`grusp-squared`), calligraphic colour alternate (`grusp-wordmark`), **monochrome / single-colour** lockups (`grusp-primary-*`), grayscale (`grusp-grey-*`), header banners, Academy.
- `fonts/` — Grota Rounded, Proxima Nova (+Condensed), JetBrains Mono.
- `images/` — sample event photography.
- `brand/` — official collateral: the **TIGNA logo-reveal video** (`tigna-intro.mp4`) + poster, and two print source files — the **large-format totem** (`totem-grusp-180x100.pdf`, 180×100cm roll-up) and the **sticker sheet** (`sticker-exa-tuttifrutti.pdf`). The PDFs are heavy vector art (no inline preview); open them in a vector tool. They reinforce the same motifs — full-colour TIGNA, heavy black keyline, electric yellow.

**`components/`** (read from `window.GrUSPDesignSystem_705bf7`)
- `core/` — `Button`, `IconButton`, `Badge`, `Tag`, `Avatar`, `Card`
- `forms/` — `Input`, `Switch`
- `conference/` — `ConferenceCard`, `SpeakerCard` *(domain components)*

**`guidelines/`** — foundation specimen cards (Colors · Type · Spacing · Brand) shown in the Design System tab.

**`ui_kits/website/`** — interactive recreation of grusp.org (home · conferences · event detail). See its own `README.md`.

---

## Using it

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, ConferenceCard } = window.GrUSPDesignSystem_705bf7;
</script>
```

Reach for **semantic tokens** (`--text-body`, `--surface-card`, `--border-ink`) in product code; the base scales (`--ink-700`, `--purple-500`) sit behind them.
