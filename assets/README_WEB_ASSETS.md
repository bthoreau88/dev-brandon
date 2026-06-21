# Web Assets — what the site loads at runtime

This is the **live drop zone**. Files here are served by the site (under
`/dev-brandon/assets/...`) and read directly by the Three.js companion. Only
**approved** outputs land here (staged + QC'd first — see
`../../handoff/expansions/README_DROP_ZONES.md`).

```
public/assets/
  splats/    .spz / .ply Gaussian splats   → /room-14 via Spark.js
  models/    .glb / .gltf meshes + props   → /room-14 via GLTFLoader
  textures/  .jpg / .png / .ktx2 maps
  audio/     .mp3 room tone / SFX
```

## To go live in Room 14
1. Drop the approved file here (e.g. `splats/room14_v01.spz`).
2. Tell me the filename — I add the loader to `src/components/companion/Room14.tsx`
   (Spark.js for splats, GLTFLoader for models), behind the existing card fallback for
   phones / low-memory devices.
3. Rebuild + publish; the "Diorama Alpha" label comes off.

## Rules
- Keep individual files reasonable (splats sliced into tiles if large).
- Always keep a fallback image/card path — never ship a splat-only scene.
- Reference assets by path through the shared registry where possible, not hardcoded
  strings in scene logic.
