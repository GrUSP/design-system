# GrUSP.org — Website UI kit

An interactive, high-fidelity recreation of the GrUSP marketing website, built entirely from the design-system tokens and components.

## Run it
Open `index.html`. It's a small client-side app with three click-through screens:

1. **Home** — hero, animated conference marquee, featured `ConferenceCard` grid, purple community band, yellow newsletter band.
2. **Conferences** — filterable line-up (click the `Tag` chips to filter by stack).
3. **Conference detail** — accent-coloured event hero, ticket card, `SpeakerCard` grid, schedule table.

Navigate via the header, the conference cards (open detail), and the "All conferences" links.

## Files
| File | Role |
|------|------|
| `index.html` | App shell + tiny state router |
| `kit.css` | Layout styles (composes DS tokens) |
| `data.js` | Sample conference / speaker data |
| `Chrome.jsx` | `SiteHeader` + `SiteFooter` |
| `HomeScreen.jsx` | Landing page |
| `ConferencesScreen.jsx` | Filterable grid |
| `ConferenceDetail.jsx` | Single-event page |

## Components used
`Button`, `ConferenceCard`, `SpeakerCard`, `Tag`, `Badge`, `Input` — all from `window.GrUSPDesignSystem_705bf7`.

## Notes
- This is a cosmetic recreation for prototyping, not production code.
- Photography is a single sample event photo; swap in real imagery per event.
- Conference dates/prices are illustrative.
