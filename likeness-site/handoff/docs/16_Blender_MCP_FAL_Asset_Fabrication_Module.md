# 16 - Blender MCP + fal.ai Asset Fabrication Module

## Status
Optional expansion module. This does not replace the core Unreal/Three.js game pipeline. It enhances asset creation, validation, texture baking, material lookdev, animation tests, and procedural environment dressing before assets are promoted into LIKENESS : THE GAME.

## Purpose
Use this module when a project needs a stronger bridge between AI references, 3D mesh generation, Blender cleanup, PBR material creation, animation tests, and final export into Unreal or the Three.js/Fable web companion.

## OVS Rule
Blender is the fabrication lab. Unreal is the main playable build. Three.js is the companion interactive world. fal.ai and 3D Skills are providers, not directors. The OVS Production Bible remains the single source of truth.

## When To Use
- Baking high-poly to low-poly game assets.
- Generating or assembling draft GLB characters from approved reference images.
- Creating tileable PBR materials for motel rooms, props, wardrobe, evidence objects, and UI/world surfaces.
- Testing stylized shader passes before deciding whether they fit LIKENESS.
- Building animation studies for props, evidence, UI objects, keys, tapes, clocks, doors, and room fragments.
- Creating procedural dressing systems, such as plant scatter, debris scatter, motel dust, hallway clutter, photo walls, and environmental fragments.

## When Not To Use
- Do not use it to invent new characters outside the locked character registry.
- Do not bypass the 4-step character reference workflow.
- Do not treat a generated GLB as final without cleanup, retopology review, materials QA, and scale/origin checks.
- Do not allow shiny demo shaders to overwrite the LIKENESS visual language.
- Do not use live API keys inside project files or shared prompts.

## Required Baseline
- Claude Desktop or Claude Code with Blender connector access.
- Blender installed and available for MCP control.
- fal.ai MCP or another approved provider for PBR/image/video/3D generation.
- Git enabled in the project repository.
- Asset staging folders separated from approved game assets.

## Integration Position
This module sits between `03_Character_Reference_4Step_Template.md`, `assets/`, `unreal/`, and `web/`.

Flow:
1. OVS concept or locked reference.
2. 4-step reference pack: Ideation, Clean Sheet, Parts, Views.
3. Blender MCP fabrication pass.
4. PBR/retopo/bake/material QA.
5. Export as FBX, GLB, USD, texture maps, or Unreal-ready asset bundle.
6. Stage inside `/assets/_staging` or `/expansions/blender_mcp_fal/staging`.
7. Promote only after checklist approval.

## Setup Notes
The supplied workflow says the baseline stack is Blender connector plus fal.ai MCP. It also emphasizes that optional skills should only be added when a specific use case requires them. In this OVS package, those optional skills become tool slots, not dependencies.

## Smoke Test
First test should be a simple material scene, not a full character. Build a corner scene with floor, two walls, and one prop table. Generate four tileable PBR materials and wire them properly. Capture one screenshot. If this works, the Blender connector, fal.ai route, material assignment, and screenshot verification path are all functioning.

## Blender Asset Promotion Checklist
- File name uses OVS asset naming convention.
- Scale is correct for UE centimeters and web meters conversion.
- Origin/pivot is logical.
- Mesh normals are clean.
- UVs are non-overlapping where required.
- Materials are named and grouped.
- Textures have BaseColor, Normal, Roughness, Metallic/AO as needed.
- High-poly source is archived.
- Low-poly export is staged.
- Collision proxy is included for Unreal if needed.
- GLB/FBX export tested in a clean scene.
- Screenshot proof saved.
- Registry row added.

## Seven Approved Prompt Patterns

### 01 - Bake High To Low
Use when a high-poly sculpt/reference mesh needs a game-ready low-poly material pass.

Prompt route:
`I have a high-poly and a low-poly version of the same LIKENESS asset. Bake Normal and AO from high to low, Selected to Active, 2K, PNG output. Hide unrelated scene objects from render before baking, restore them after, connect Normal through a Normal Map node, multiply AO into Base Color, hide high-poly when done, then screenshot the result.`

### 02 - Generate/Assemble Draft Character From Images
Use only with approved reference packs. This is for previsualization, not final identity lock.

Prompt route:
`Using the approved LIKENESS reference images, generate draft GLB components through the approved 3D skill/provider, import into the open Blender scene, assemble without resetting the scene, preserve labels, then export a staging GLB and screenshot.`

### 03 - PATINA/PBR Material Lookdev
Use for Room 14 wallpaper, motel carpet, brass key, CRT plastic, bathroom tile, wet porcelain, wood frames, chain, tape shells, evidence bags, hallway paint, and wardrobe materials.

Prompt route:
`Build a small OVS material test corner. Generate tileable PBR materials for the specified LIKENESS surfaces. UV tile them correctly. Use warm practical lighting. Do not render cinematic shots; use Material Preview and capture one screenshot.`

### 04 - Toon/Outline Shader Test
Use only for style experiments, game UI stylization, or alternate non-core projects. LIKENESS mainline remains cinematic realism unless explicitly moved into stylized mode.

Prompt route:
`Apply a controlled toon shader pass to the selected multi-mesh character while keeping the existing texture maps. Use hard shading steps and optional outline, but skip open/thin geometry such as hair, straps, wires, or bows.`

### 05 - Procedural Iridescent Shader
Use for controlled OVS fashion/tech artifacts, not default LIKENESS environments. Possible use: cursed device, nightclub variant, GRLFND interface prop, or OVS branded object.

Prompt route:
`Replace the selected body material with a procedural chameleon/iridescent material driven by facing angle, metallic clearcoat, roughness noise, and controlled emission. Keep it as a test material until approved.`

### 06 - Multi-Stage Prop Animation
Use for keys, tapes, evidence stacks, photo frames, motel sign fragments, phone components, device fragments, chain locks, or UI object reveals.

Prompt route:
`Split merged loose-geometry islands into individual objects, then animate assembly over a specified duration with staggered timing, bounce/settle, and a clear left-to-right or depth-based order. Screenshot and export a preview clip if available.`

### 07 - Geometry Nodes Scatter/Dressing
Use for environment dressing systems. In LIKENESS, this becomes dust, pills, photos, receipts, leaves, gravel, carpet fibers, bathroom mold flecks, parking-lot debris, or hallway clutter.

Prompt route:
`Create a Geometry Nodes modifier that scatters a selected collection across a target surface using density, jitter, seed, scale min/max, align-to-normal, and ray height controls. Join the original geometry back in so the level surface remains visible.`

## OVS-Specific Asset Examples

Characters:
- THOREAU clean sheet to draft mesh.
- DRYA clean sheet to draft mesh.
- DARK variants as posture/animation rigs, not gore models.

Props:
- Brass key 14.
- CRT/VHS stack.
- Camcorder cracked lens.
- Motel desk bell.
- Chain lock.
- Black device.
- Locket tintype.
- Evidence photo frames.

Environments:
- Room 14 wall/floor/ceiling material set.
- Bathroom tile and mirror distortion material set.
- Hallway carpet and motel door material set.
- Parking lot gravel and wet asphalt.
- Dellwood signage.

## Export Rules
Unreal exports:
- Prefer FBX for skeletal or collision-heavy assets.
- Use GLB for quick prototype props.
- Use packed texture maps with clear naming.
- Collision meshes use `_COL` suffix.

Three.js exports:
- Prefer GLB with Draco or meshopt compression when appropriate.
- Keep material count low.
- Avoid huge texture maps for web.
- Provide a lightweight proxy version for interactive pages.

Archive:
- Keep source `.blend` files in `/expansions/blender_mcp_fal/exports/source_blend/` if used.
- Keep generated raw meshes separate from approved meshes.
- Never overwrite approved exports; version them.

## Human Review Gate
Before promotion, Brandon/OVS reviews:
- Does it still feel like LIKENESS?
- Is the object/story beat clear?
- Does it improve the game or just show off tooling?
- Is the mesh clean enough for the next pipeline stage?
- Can Unreal and Three.js share the asset without style drift?
