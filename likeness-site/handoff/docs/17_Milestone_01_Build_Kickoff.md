# 17 - MILESTONE 01 BUILD KICKOFF

## LIKENESS : THE GAME - V004 STARTER BUILD

Milestone 01 converts the OVS production bible into an executable development foundation. This is not the game yet. It is the controlled project base that prevents drift once Unreal, Three.js, Blender, image-to-world tools, Gaussian splats, and campaign prompt systems begin moving in parallel.

## Core Objective

Create a clean repository with a working Unreal project skeleton, a matching Three.js interactive web skeleton, shared data registries, source-control checkpoints, and a repeatable QA report format.

## OVS Law For This Milestone

- Face is the budget.
- Room is the antagonist.
- Camera is a witness.
- Image must feel playable.
- Every system must be modular, replaceable, and expandable.
- No placeholder may become permanent without being promoted through QA.

## Required Inputs

Use these files first:

1. `README_START_HERE.md`
2. `docs/00_OVS_Production_Workflow.md`
3. `docs/09_Agent_Handoff_Prompt_Block.md`
4. `docs/10_ThreeJS_Fable_Web_Handoff.md`
5. `docs/11_Unreal_Claude_Setup.md`
6. `docs/16_Blender_MCP_FAL_Asset_Fabrication_Module.md`
7. `data/*.csv`
8. `agents/AGENTS.md`
9. `agents/CLAUDE.md`
10. `agents/CODEX.md`

## Build Sequence

### Step 01 - Repository Verification

Create or verify:

```text
/LIKENESS_THE_GAME/
  /docs
  /agents
  /data
  /unreal
  /web
  /assets
  /expansions
  /qa
  /build_notes
```

Initialize Git before touching engine files.

```bash
git init
git status
git add README_START_HERE.md docs agents data
git commit -m "chore: initialize LIKENESS game production foundation"
```

### Step 02 - Unreal Skeleton

Create an Unreal 5.7 project or verify the existing project. The preferred starting template is Third Person, because LIKENESS requires readable body presence, motel exploration, hallway traversal, and cinematic over-shoulder framing.

Create these conceptual folders inside `/Content/OVS_LIKENESS/`:

```text
Blueprints
Characters
Cinematics
Data
Environments
Materials
Meshes
Props
UI
Audio
VFX
Tests
```

Do not import final assets during Milestone 01. Only create folder architecture, dummy data assets, and proof maps.

### Step 03 - Three.js / Fable Web Skeleton

The web project must mirror the Unreal structure. It is not a separate art direction. It is the public-facing interactive companion for the same world.

Create:

```text
/web/milestone_01_starter/
  package.json
  src/main.js
  src/scene/OVSSceneController.js
  src/data/registryLoader.js
  public/data/*.json
```

### Step 04 - Shared Registry Bridge

Convert the CSV registries into JSON copies for web use. Keep the CSV as the source of truth.

Required registries:

- `asset_manifest.csv`
- `character_registry.csv`
- `mechanics_registry.csv`
- `level_registry.csv`
- `narrative_beats.csv`
- `prompt_registry.csv`
- `expansion_registry.csv`
- `blender_asset_workflow_registry.csv`
- `milestone_01_task_board.csv`

### Step 05 - First Proof Map

Create one empty test map:

```text
L_OVS_M01_Room14_Graybox
```

It needs only:

- Player start
- Basic mannequin or capsule
- Camera boom test
- 3 graybox walls
- 1 door proxy
- 1 mirror proxy
- 1 interactable prop proxy
- debug label system

### Step 06 - First Web Proof Scene

Create a minimal Three.js scene with:

- cream / black / muted olive UI treatment
- motel room placeholder cube layout
- basic camera orbit or locked cinematic camera
- JSON-loaded title metadata
- one clickable Room 14 marker

### Step 07 - QA Capture

Every agent must output a report in `qa/milestone_01/` containing commands run, files created, files modified, screenshots captured, tests passed, tests failed, risks, and the next recommended prompt.

## Acceptance Criteria

Milestone 01 is complete when Git is initialized, the folder structure exists, the Unreal folder plan exists or project skeleton has been created, the web starter can be installed and launched, the shared registry strategy exists, no core project files are overwritten blindly, and an agent session report is produced.

## Stop Condition

After Milestone 01, stop. Do not proceed into gameplay mechanics, final visual assets, character implementation, or Gaussian splat experiments until the user approves the foundation.
