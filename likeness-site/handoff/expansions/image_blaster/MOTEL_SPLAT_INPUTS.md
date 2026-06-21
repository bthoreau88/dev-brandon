# Motel Splat Inputs — Front Office & Hallway (Image-Blaster)

Companion inputs to `ROOM14_SPLAT_INPUT_PROMPT.md`. Same splat-readiness rules apply:
**wide single perspective · deep focus everywhere · readable structure (gentle crush) ·
minimal mirror/glass · no people · no text/UI · 16:9 or 4:3.** Re-grade in-engine after.

These give `/motel` and `/room-14` real splat rooms beyond Room 14 itself.

---

## A · FRONT OFFICE (LOC_DELLWOOD_OFFICE_001)
**SCENE** — The Dellwood front office at night. A worn check-in counter, a desk bell, a
pegboard of numbered room keys behind it, a guest ledger open on the counter, a small
sodium desk lamp, dated wood paneling, a dead potted plant. 3:14 AM. No people.
**CAMERA** — Wide interior, 24–28mm, eye-level, deep focus, one vanishing point, no tilt.
The whole office legible: counter, pegboard wall, floor, ceiling edge.
**LIGHT** — One warm sodium desk lamp as key; faint cold spill from a window; gentle
shadow crush so structure stays readable.
**NEGATIVE** — no people, no text on the ledger/keys, no heavy haze, no shallow DOF, no
neon, no sci-fi, no glossy CGI.

## B · DELLWOOD HALLWAY (LOC_DELLWOOD_HALLWAY_001)
**SCENE** — A repeating motel corridor. Numbered doors down one side, a single sconce
mid-hall, worn runner carpet, the Room 14 door slightly ajar with a thin warm leak. 3:14
AM. No people.
**CAMERA** — One-point perspective down the corridor, 24–28mm, eye-level, deep focus,
central vanishing point on the far end.
**LIGHT** — The mid-hall sconce as the only motivated source; a thin warm leak from Room
14; deep but readable shadow at the ends.
**NEGATIVE** — no people, no figures, no readable signage, no haze, no shallow DOF, no
portal/glow effects, no sci-fi.

---

## Run + hand-off
Image-Blaster (confirm each step) → collect `.spz` → QC (scale/collision/mood/file size) →
`/expansions/_staging/image_blaster/<date>_<scene>/` → `_approved/` →
`public/assets/splats/`. Then tell me the path and I wire the splat into `/motel` /
`/room-14` via Spark.js, keeping the card fallback.
