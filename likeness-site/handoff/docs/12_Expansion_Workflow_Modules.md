# 12 - OVS Expansion Workflow Modules

## Purpose

These modules are not the base game. They are controlled accelerators for the LIKENESS ecosystem: Unreal vertical slice, Three.js interactive web companion, OVS marketing rollout, and reference/asset production. The existing core workflow remains the source of truth.

## Expansion Law

1. Core story and gameplay remain authored first.
2. AI-generated worlds are prototypes until art-directed and optimized.
3. Gaussian splats are visual surfaces, not gameplay truth.
4. Campaign-video skills are marketing/reference tools, not tone directors.
5. External guides support learning and checklist coverage; they do not become project authority.
6. Every expansion asset must enter staging, pass QC, then move to approved.
7. Every agent must report what changed, what it did not touch, and what needs human review.

## The Four Added Expansion Tracks

### Track A - Image-Blaster Rapid World Prototyping

Best use cases:
- Quick Room 14 alternate layout experiments.
- Dellwood motel exterior mood studies.
- Lobby, hallway, bathroom, stairwell, parking lot, and dream-space previsualization.
- Ambient room tone and object-specific SFX placeholders.
- Three.js companion prototypes where speed matters more than final fidelity.

Do not use for:
- Final hero geometry without cleanup.
- Character identity work.
- Gameplay collision without validation.
- Anything that must preserve exact floor-plan continuity.

Pipeline:
1. Place one clean OVS-approved concept image into `/expansions/image_blaster/input/`.
2. Ask the agent to blast it with confirmation at each step.
3. Collect generated `.spz`, `.glb`, `.obj`, `.mp3`, preview screenshots, and metadata.
4. Move outputs into `/expansions/_staging/image_blaster/<date>_<scene>/`.
5. Run QC: scale, collision, lighting, mood, file size, polygon count, texture naming, legal/licensing note.
6. Convert approved static environment splat into either a Three.js Spark.js test or an Unreal NanoGS test.
7. Rebuild final hero level manually when the scene becomes canonical.

### Track B - Nano Gaussian Splatting Unreal Test Layer

Best use cases:
- Static haunted environment capture layers.
- Real-world scan experiments.
- Browser-to-Unreal parity tests.
- Optional photogrammetry mood backgrounds.

Do not use for:
- Dynamic destructible gameplay.
- Interactive props requiring precise collision.
- Character rendering.
- Lighting-critical scenes that require full Lumen response.

Pipeline:
1. Install the plugin in the Unreal project's `Plugins/` folder.
2. Use UE5.6/UE5.7-compatible builds only.
3. Import `.ply` splat files and generate Gaussian Splat Assets.
4. Drag assets into a test map, never directly into the production Room 14 map first.
5. Pair splat visual with invisible collision mesh or authored blocker geometry.
6. Use tiled/sliced splats when scenes are large.
7. Test console commands and performance settings.
8. Capture before/after screenshots and FPS notes.

### Track C - Higgsfield Claude Skills Campaign + Reference Expansion

Best use cases:
- OVS social hooks.
- LIKENESS teaser reels.
- Fashion/lookbook experiments for OVS wardrobe language.
- Cinematic motion-reference prompts.
- Marketing variations for the film/game/site shared universe.

Do not use for:
- Replacing the locked character identity sheets.
- Turning LIKENESS into generic UGC style.
- Any content that violates the project's restraint/no-gore law.
- Unapproved automated posting or generation.

Pipeline:
1. Install skills only in a separate marketing/reference workspace.
2. Add an OVS-specific `CLAUDE.md` override.
3. Use only approved style commands: `/01-cinematic`, `/02-3d-cgi`, `/10-music-video`, `/11-social-hook`, `/12-brand-story`, `/13-fashion-lookbook`.
4. Rewrite every prompt through the LIKENESS visual DNA before generating.
5. Require screenshot confirmation before clicking Generate.
6. Store outputs in `/expansions/_staging/higgsfield/<campaign>/`.
7. Promote only prompt text, motion ideas, and approved still/video outputs into `/assets/`.

### Track D - Unreal Engine Guide Learning + Checklist Expansion

Best use cases:
- Building a study roadmap.
- Checking if a feature belongs in Blueprint, C++, Niagara, PCG, Lumen, Nanite, MetaHuman, or Python.
- Creating a weekly learning board for Project and Portfolio IV alignment.
- Expanding the production bible with missing technical topics.

Do not use for:
- Blindly copying code.
- Treating the guide as official Epic documentation.
- Replacing project-specific architecture decisions.

Pipeline:
1. Use it as a reference index.
2. Convert relevant topics into LIKENESS checklists.
3. Link every chosen concept to a concrete project need.
4. Validate implementation details against official docs or current engine behavior.
5. Add lessons learned to `/build_notes/` and `TASK_BOARD.md`.

## Expansion Promotion Gate

An output moves from expansion to production only if it passes:
- Story fit.
- Visual DNA fit.
- Technical viability.
- Performance sanity.
- File organization compliance.
- Naming convention compliance.
- License/source note.
- Human approval.

## Folder Routing

- Experimental outputs: `/expansions/_staging/`
- Approved expansion assets: `/expansions/_approved/`
- Rejected or obsolete tests: `/expansions/_archive/`
- Canonical production assets: `/assets/`
- Registries: `/data/`
- Agent instructions: `/agents/`
