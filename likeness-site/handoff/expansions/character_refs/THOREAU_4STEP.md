# THOREAU — 4-Step Reference Pack (gate before ANY 3D)

`CHR_THOREAU_001`. Run these four steps **in order**. No 3D model is generated from loose
art — the model is built from the Clean Sheet + Parts + Views that pass QC. OVS six-part
form. Identity lock is law.

**IDENTITY LOCK (must hold in every output):** Black man, early 30s, medium-deep warm
brown skin, **round gold glasses**, **mustache and goatee**, guarded intelligent presence.
**Drift risk to reject:** generic AI face, age shift, missing glasses, wrong facial hair,
over-glamorization.

---

## Step 1 · IDEATION — lock concept, silhouette, mood
> Cinematic character ideation, THOREAU — a guarded, intelligent man in his early 30s,
> the unreliable narrator of a motel-noir psychological horror. Black man, medium-deep
> warm brown skin, round gold glasses, mustache and goatee, charcoal worn layers, a thin
> chain. Mood: calm-on-the-surface, watchful, tired. Generate 6–12 variants exploring
> silhouette and presence. ARRI-realism, restrained.
> **Do NOT yet:** T-pose, white background, orthographic accuracy.
> **Output:** selected concept + a written identity-lock statement.

## Step 2 · CLEAN SHEET — modeling reference
> Single full-body character sheet of THOREAU, neutral A-pose, facing camera, **flat
> even neutral lighting, plain off-white/neutral background**, no perspective distortion,
> no grade, no vignette. Skin real-world texture (pores, faint stubble). Wardrobe locked:
> charcoal hoodie/jacket, gray crew tee, dark trousers, round gold glasses, thin chain.
> **Do NOT:** poster lighting, dramatic shadow, lens distortion, motion.
> **Output:** one clean full-body hero sheet (the modeling master).

## Step 3 · PARTS — protect the high-risk details
Isolated sheets, each on neutral background, matching materials/scale, named:
- `THOREAU_PART_glasses` — round gold frames, exact shape, on a neutral surface.
- `THOREAU_PART_face` — front + 3/4, mustache/goatee groom, skin detail.
- `THOREAU_PART_hands` — relaxed, neutral.
- `THOREAU_PART_jacket` — charcoal layer, weave, worn cuffs.
- `THOREAU_PART_chain` — thin neck chain.
> **Do NOT:** redesign parts or change materials between sheets.
> **Output:** part sheets with IDs.

## Step 4 · VIEWS — the modeling blueprint
> Orthographic turnaround of THOREAU in the locked wardrobe: **front, left side, back,
> three-quarter**. Identical proportions across all views, neutral light, neutral
> background, no perspective. Consistent height/build.
> **Acceptance:** if the model can't be recognized in silhouette, face, wardrobe, and
> prop language from front + side, it is **NOT READY**.
> **Output:** orthographic view pack → handed to Blender/3D (see `../blender_fal/`).

---

## QC gate before promotion (per docs/03 + Blender module)
Identity holds · glasses + facial hair correct · neutral light/background on sheets ·
proportions consistent across views · materials named · no glamour drift. Stage in
`/expansions/_staging/character_refs/thoreau/`, QC, then `_approved/`.
