# Room 14 — Image-Blaster Splat Input Prompt (OVS V001)

Engineered for **image-to-world / Gaussian-splat** reconstruction, not just a hero still.
Drop the resulting image into `/expansions/image_blaster/input/`, then run the blast.

---

## 1 · CONCEPT IMAGE PROMPT (six-part OVS skeleton)

**01 · PROJECT LOCK**
LIKENESS : THE GAME, OVS V001, The Dellwood motel — Room 14. Photoreal cinematic
interior, motel-noir psychological horror, single STATIC environment, no people.

**02 · SCENE**
A worn 1970s American motel room seen as a wide establishing interior. A queen bed
with a dark coverlet; a low wooden desk against the wall holding a small lamp and an
old CRT television showing soft static; an open doorway to a tiled bathroom with a
mirror just visible at the edge; on the desk, a brass key with a "14" diamond tag, a
small tintype locket, a single black VHS tape, and a small matte black device. Stained
carpet, dated wallpaper, heavy curtains drawn over the window. 3:14 AM. Lived-in, quiet,
wrong in small ways.

**03 · CAMERA / LENS**
Wide establishing interior, 24–28mm equivalent, eye-level (slightly elevated), DEEP
focus — everything sharp front-to-back, no shallow depth of field. One coherent
vanishing point, no tilt. The whole room legible: floor, all four wall zones, the
ceiling edge, and every key prop in frame.

**04 · LIGHT / COLOR**
Motivated practicals only: warm tungsten desk lamp as key from one side; faint teal
threshold spill from the bathroom doorway; a thin cold sliver at the curtain edge.
Naturalistic desaturation, GENTLE green-cyan shadow crush (keep geometry readable),
warm material tones preserved, distressed brass accents. Even enough exposure that
every surface is legible — the heavy OVS grade is re-applied in-engine later.

**05 · CONTINUITY**
Brass key reads old/worn, not shiny gold. CRT shows soft static. Mirror present but
NOT dominating the frame. Evidence props grouped on the desk. Dellwood character:
dated, damp, restrained.

**06 · NEGATIVE**
no people, no figures, no reflection of a person, no text, no UI, no watermark,
no heavy fog or haze, no extreme bloom, no pure-black crushed shadows hiding geometry,
no shallow depth of field, no motion blur, no fisheye, no neon, no sci-fi, no gore,
no glossy CGI sheen.

---

## 2 · WHY THESE CONSTRAINTS (splat-readiness)

Gaussian-splat / image-to-world tools reconstruct geometry from the picture, so the
input must be:
- **Wide + single coherent perspective** — gives the room volume to rebuild.
- **Deep focus, sharp everywhere** — blur destroys reconstruction detail.
- **Readable structure** — don't crush shadows to black or bury the room in haze
  (you lose walls/corners). Re-grade AFTER the splat exists.
- **Minimal large mirrors/glass** — reflective surfaces confuse reconstruction; keep
  the mirror small and off-axis.
- **No people** — static environment only; characters come from the locked 4-step packs.
- High resolution, 16:9 or 4:3.

---

## 3 · RUN STEPS (per docs/12 — Track A)

1. Place ONE clean, approved image in `/expansions/image_blaster/input/`.
2. Blast it **with confirmation at each step**.
3. Collect outputs: `.spz` (the splat) + any `.glb` / `.obj` / `.mp3` + preview
   screenshots + metadata.
4. **QC gate:** scale · collision (needs a separate collider mesh) · lighting · mood ·
   file size · polygon count · texture naming · license/source note.
5. Move the approved `.spz` to `/expansions/_staging/image_blaster/<date>_room14/`.
6. **Send me the `.spz`** (the file, or a public URL) + the input image — I wire it into
   `/room-14` via Spark.js, keeping the image/card fallback for phones.

---

## 4 · OPTIONAL EXTRA ANGLES (for /motel later)

Run the same recipe, swapping scene + the room stays static & people-free:
- **Front Office** — ledger, desk bell, pegboard of keys, a single sodium lamp.
- **Dellwood Hallway** — repeating numbered doors, one sconce mid-hall, door 14 ajar.

Same camera/light/negative rules. These give the motel map real splat rooms too.
