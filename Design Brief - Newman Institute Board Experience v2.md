# Design Brief — *The Work Ahead* (Board Experience, v2)

**Project:** A cinematic, single-page web experience for the Newman Institute for AI and the Common Good.
**Primary audience:** The Newman University Board of Trustees.
**Job to be done:** Make the Institute feel real, inevitable, and mission-rooted — while supporting a concrete decision to launch and finance it. Drop jaws, then earn the vote.

---

## The reframing (why v2 exists)

v1 was built for the eventual campus audience — four internal paths for students, faculty, staff, and alumni. It was clean and on-brand, but it was the wrong artifact for the room it was shown to. A trustee viewing v1 saw none of what they were being asked to decide: no market signal, no record of earned capacity, no financial discipline, no ask. The most persuasive assets in the proposal — the Hanover data, the named anchors, the federal appropriation, the registrar pilot, and the *Magnifica Humanitas* encyclical — appeared nowhere.

**v2 fuses the emotional vision with board-grade proof, and rebuilds the execution to be genuinely cinematic.** The internal-launch version remains the right next step; this is the artifact that wins the decision that makes it possible.

### Specific upgrades from v1
- Reframed around the **Board decision** while keeping the experience feeling like Newman, not a finance deck.
- Added a **market-urgency beat** (Hanover data as animated evidence) and a **decision beat** (the $500K structure, scenarios, accountability, isolated upside).
- Made the **Catholic mission and the encyclical the centerpiece**, not a passing mention — the one argument no competitor can copy.
- Replaced the inert v1 motion with real **scroll-choreographed reveals, animated counters, and a drawn-on-view map**.
- Replaced the geographically wrong pseudo-map with a **recognizable Kansas map** and correctly placed cities.
- Fixed the **dead contact link** (v1 used `david.cochran@…`; corrected to `cochrand@newmanu.edu`).
- Upgraded display type to an **editorial serif (Fraunces)** for gravity without trendiness.

---

## Core message

**AI is changing the Heartland. Newman is preparing people to meet it with wisdom.**

The Institute is not primarily about technology. It is about human formation, dignified work, responsible governance, regional partnership, and the common good in an AI-shaped world — and Newman is uniquely positioned, by mission and by record, to lead it.

The three convictions a trustee should leave with:
1. The moment is real and time-bound — demand is current and the lane is contestable.
2. Only Newman combines the moral framework, the neutrality, and the proven delivery to fill it.
3. The ask is disciplined — patient capital, downside-tested, with quarterly accountability.

---

## Narrative structure (the built experience)

1. **The Moment (hero).** Living mosaic of Newman faces and Heartland work; the human person is the hero, AI is the context. Headline states the thesis; a quiet scroll cue invites the journey.
2. **The Moment Is Now.** Hanover signal as animated counters (68% / 81% / 74%) resolving into a single tension line: the risk was never that AI would arrive, but that the region adopts it without wisdom.
3. **The Answer.** Not an AI lab or a training catalog — an operating vehicle. Convene · Equip · Transform as three weighted panels.
4. **Why Only Newman.** The emotional and intellectual hinge. The *Magnifica Humanitas* pull-quote given full typographic weight; four advantages (moral framework, structural neutrality, proven delivery, rural Kansas roots).
5. **The Work Already Earned.** Momentum timeline (2019→2026) with proof callouts (5 cohorts, 100+ trained, 160 at one employer, 3 rural sites, MS Applied AI Fall 2026). A scaling decision, not a startup bet.
6. **The Philosophy.** Eight commitments as an interactive wall, sequenced from human dignity to the common good; selecting one carries it forward.
7. **The Region.** A recognizable Kansas map with animated convening lines from Wichita and toggleable academic / employer / civic-college layers. Regional infrastructure, not a campus project.
8. **The Decision.** The $500K patient-capital structure, the 10% quasi-endowment, six accountability measures, a Bear/Base/Bull scenario chart, and the appropriation + statewide grant framed explicitly as upside the plan does not need.
9. **The Invitation.** Closing immersive call: "This is not something Newman is announcing. It is something Newman is building." Three actions; a benediction line on dignity, work, and the common good.

---

## Visual identity

**Tone:** Refined, civic, Catholic, regional, and alive. No generic "AI future" aesthetic — no purple gradients, robot heads, circuit boards, or floating brains. The visual memory to leave behind: *a living mosaic of Newman people and Heartland places drawn into shared purpose.*

**Palette**
- Newman navy `#071d49` / deep navy `#04122e` — institutional depth, the dominant field.
- Newman scarlet `#9e2a2f` — brand continuity, used sparingly for emphasis.
- Warm gold `#c8a45a` / bright gold `#e4c178` — wisdom, decision, invitation.
- Limestone `#f4eee1` / paper `#fbf7ee` — Catholic-institutional clarity and breathing room.
- Civic teal `#2f7d7a` — networks, connection, public trust.
- Charcoal ink `#1a2233` — body text.

**Typography**
- Display: **Fraunces** (variable, optical sizing) — editorial, dignified, contemplative.
- Body / UI: **Inter** — clean, contemporary, highly legible.

**Motion** (slow, deliberate, meaningful)
- Staggered mosaic assembly on load; gentle hero parallax.
- Scroll-linked section reveals.
- Number counters that animate into view.
- Map connection lines that draw on first view; a pulsing Wichita hub.
- Scenario bars that grow on view.
- A strong `prefers-reduced-motion` mode that disables all of the above.

---

## Content voice

Clear, elevated, human, invitational. Words to use: formation, judgment, work, wisdom, dignity, responsibility, community, the common good, the Heartland. Avoid corporate AI hype, fear-based messaging, dense theological exposition, and vendor product copy. For the board specifically, finance language is welcome — but it arrives as discipline and protection, never as a pitch.

---

## Technical direction (as built)

- **No-build, single-page**: `index.html` + `styles.css` + `script.js`, vanilla — opens by double-click or `python3 -m http.server`. Easy to hand to University Relations and IT.
- Generated SVG map and animated counters in dependency-free JavaScript.
- Google Fonts (Fraunces, Inter) over the network; everything else self-contained.

### Accessibility
- Semantic landmarks and heading order; skip link.
- Keyboard-operable controls with visible focus states.
- `aria-live` regions for the philosophy detail and map.
- Full `prefers-reduced-motion` fallback.
- Mobile-first responsive layout; no horizontal overflow.

---

## Production hand-off (for University Relations / IT)

- Replace placeholder photography with an approved, curated set; confirm every displayed figure is cleared for the intended audience.
- Confirm partner names and any logos approved for display before public use (figures here are phrased to avoid unapproved partner names where possible).
- Decide the host: a NewmanU.edu page, an internal page, or a standalone microsite.
- For a production internal launch, re-introduce the four audience paths (students/faculty/staff/alumni) as a layer beneath this board narrative.
- Re-verify all numbers against the final approved Board Proposal before external distribution.

## Success criteria

The experience succeeds if it feels unmistakably Newman; is memorable without being flashy; frames AI as a human-formation and common-good question; makes the Institute feel concrete rather than abstract; and gives the Board both the conviction and the evidence to say yes.
