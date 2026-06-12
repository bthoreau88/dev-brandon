# LIKENESS : THE GAME - OVS Agent Handoff Package V001

Start here. This package defines the production workflow, folder structure, registries, prompts, and agent rules for building LIKENESS : THE GAME and the matching interactive Three.js web companion.

## Order of Operations
1. Read `docs/00_OVS_Production_Workflow.md`.
2. Read `agents/AGENTS.md`.
3. Read the relevant agent file: `agents/CLAUDE.md`, `agents/CODEX.md`, or `agents/FABLE_THREEJS_PROMPT.md`.
4. Open the data registries in `data/` before creating assets or code.
5. Use `docs/03_Character_Reference_4Step_Template.md` before generating any 3D character.
6. For Unreal work, implement the vertical slice in milestones. Commit after every stable milestone.
7. For web work, build from the shared JSON schema so the site and game speak the same language.

## Non-Negotiable OVS Rules
- Face is the budget. Room is the antagonist. Camera is a witness. Image must feel playable.
- Do not hardcode story content in Blueprints or UI components.
- Do not rename folders without updating registries.
- Do not import assets directly into final folders. Use staging first.
- Do not generate 3D models from loose AI art. Use Ideation, Clean Sheet, Parts, Views.
- Keep the game, site, film stills, fashion assets, and music archive visually unified.

## Deliverables Included
- Production Bible PDF.
- Full markdown workflow.
- Reusable templates for characters, environments, mechanics, story, QA, and style.
- Agent handoff prompts for Claude Code, Codex, and Fable/Three.js style web building.
- CSV registries for assets, characters, mechanics, levels, prompts, and narrative beats.
