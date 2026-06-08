# The Work Ahead — Board Experience (v2)

A cinematic, single-page web experience for the Newman Institute for AI and the Common Good,
built to support a Board of Trustees decision while making the Institute feel real, mission-rooted,
and inevitable.

## What changed from v1

v2 is reframed for the **Board** (decision + wow), not only the internal campus audience:

- **New "The Moment Is Now" beat** — the Hanover market signal (68% high/critical priority,
  81% deploying or piloting, 74% interested in a Newman cohort) as animated, board-grade evidence.
- **"Why Only Newman" centerpiece** — the *Magnifica Humanitas* encyclical and Catholic social
  teaching framed as the strategic moat no competitor can copy.
- **"The Work Already Earned"** — momentum timeline + real proof points (5 cohorts, 100+ trained,
  160 at one employer, 3 rural Kansas sites, MS Applied AI Fall 2026).
- **A real, recognizable Kansas map** with geographically placed cities and animated convening
  lines from Wichita; toggleable academic / employer / civic-college layers.
- **"The Decision" beat** — the $500K patient-capital structure, the 10% quasi-endowment, the six
  quarterly accountability measures, a Bear/Base/Bull scenario chart, and the Moran appropriation +
  statewide grant framed as upside that the plan does not depend on.
- **Cinematic execution** — living-mosaic hero with legible faces, scroll-choreographed reveals,
  animated counters, a fixed scroll-progress bar, film-grain texture, Fraunces editorial display type.
- **Fixes** — corrected contact email to `cochrand@newmanu.edu` (v1 linked a dead address),
  rebuilt motion (v1's reveals were inert), replaced the pseudo-map.

## Open locally

```bash
cd "BOT Web Experience v2"
python3 -m http.server 8765
# then open http://localhost:8765/
```

Or double-click `index.html` (a local server renders fonts/animation a touch more reliably).

## Files

- `index.html` — page structure and board narrative
- `styles.css` — Newman visual system, motion, responsive + reduced-motion
- `script.js` — counters, philosophy wall, generated Kansas map, scenario bars, scroll state
- `assets/` — Newman brand marks and optimized photography (shared with v1)

## Accessibility

Semantic landmarks, skip link, keyboard-operable controls, visible focus states, `aria-live`
regions, full `prefers-reduced-motion` fallback, and a mobile-first responsive layout.

## Notes for production hand-off (University Relations / IT)

- Replace placeholder photography with an approved, curated image set; confirm any numbers cleared
  for display.
- Confirm partner names/logos approved for display before public use.
- Decide host: NewmanU.edu page, internal page, or standalone microsite.
- All figures here are drawn from the v14 Board Proposal and the Vision draft; re-verify against the
  final approved proposal before external distribution.
