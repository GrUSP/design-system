---
name: grusp-design
description: Use this skill to generate well-branded interfaces and assets for GrUSP (the Italian web-dev community & conference organiser — phpday, jsday, reactjsday, vueday, cssday and more), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colours, type, fonts, logos and UI-kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill first — it is the full design guide (brand voice, colour, typography, the heavy-keyline visual motifs, iconography) and a manifest of everything available. Then explore the other files:

- `styles.css` + `tokens/` — the CSS custom properties (colours, type, spacing, elevation) and `@font-face` rules. Link `styles.css` to inherit the whole system.
- `assets/` — real logos (the grumpy-cat "TIGNA" lockups), brand fonts (Grota Rounded, Proxima Nova), and sample photography. Copy these out; never redraw the mascot or logotype.
- `components/` — reusable React components. After the compiler runs they are available at `window.GrUSPDesignSystem_705bf7`; each has a `.prompt.md` with usage.
- `ui_kits/website/` — a working recreation of grusp.org to crib layout and composition from.
- `guidelines/` — foundation specimen cards.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and produce static HTML files for the user to view. If working on production code, copy the assets and apply the rules here to design as an expert in the GrUSP brand.

Key brand cues to never lose: tiny palette of **black + electric yellow `#FFE900` + heritage purple**, **Grota Rounded** display type, the **heavy black keyline + hard offset shadow** ("poster/sticker") treatment, pill-shaped controls, lowercase conference names, and a warm, inclusive, bilingual (IT/EN) voice.

If the user invokes this skill without other guidance, ask them what they want to build or design, ask a few focused questions, and act as an expert designer who outputs either HTML artifacts or production code, depending on the need.
