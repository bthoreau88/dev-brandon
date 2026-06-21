# Blender + MCP + FAL — Asset Fabrication Module (V003)

The path to **real game-ready 3D** (meshes/PBR), as opposed to Gaussian splats. Optional
expansion. Sits **after** the 4-step reference system and **before** engine import.

## Tool chain
- **Blender** with an **MCP** connector (required).
- **fal.ai** MCP / approved generation provider (required for generation tasks).
- Git, staging folders, the asset registry, screenshot QA.

## Hard guardrail
> Do not generate final game assets from loose concept art. Use it **after** the 4-step
> reference system (Ideation, Clean Sheet, Parts, Views — see `../character_refs/`).

## 7 approved techniques (prompt packs)
1. **Bake high→low** — normal + AO maps from a high-poly to a game-res low-poly.
2. **Draft character GLB from approved images** — only post-reference (4-step passed).
3. **PBR material test corner** — the smoke test: floor + 2 walls + 1 table, 4 tileable
   materials, warm preview light, one screenshot.
4. **Toon / outline shader pass** — controlled test.
5. **Iridescent material** — controlled test.
6. **Multistage prop animation** — e.g. the chain lock, the camcorder.
7. **Geometry Nodes scatter dressing** — dust, debris, photo scatter systems.

## Output formats
- **Unreal:** `FBX` (skeletal / collision-heavy) or `GLB` (quick prototypes). Collision
  meshes use the **`_COL`** suffix.
- **Three.js (this site):** optimized `GLB`, low material count, light texture budget →
  drops into `public/assets/models/` and loads in `/room-14`.

## LIKENESS asset targets
Room 14 wall/floor/ceiling materials, bathroom tile, mirror distortion, brass key 14,
camcorder, CRT + VHS stack, desk bell, chain lock, black device, locket, photo frames,
parking-lot gravel, wet asphalt, Dellwood signage, dust/debris/photo scatter.

## Promotion QC gate (staging → approved)
Clean mesh · correct scale · clean UVs · named materials · texture maps · collision proxy
(when needed) · clean import test · screenshot proof · **registry update** (`asset_manifest.csv`).

## Human review questions (before promote)
Does it still feel like LIKENESS? Does the object serve story or mechanics? Does it improve
the game (not just show off tooling)? Is it technically clean? Can Unreal **and** Three.js
share it without style drift?

## Routing
Stage in `/expansions/_staging/blender_fal/<date>_<asset>/` → QC → `/expansions/_approved/`
→ engine `Content/` (game) and/or `public/assets/models/` (web).
