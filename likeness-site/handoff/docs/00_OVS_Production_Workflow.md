# LIKENESS : THE GAME - OVS Production Bible and Pipeline V001

## Locked Intention
LIKENESS : THE GAME is the playable extension of the LIKENESS universe: a psychological romantic horror / Afrosurreal chamber-game built around Room 14, doubles, memory distortion, surveillance, argument loops, and the idea that the room remembers what love edits out.

The production must move as one system: film language, game systems, character references, 3D models, Unreal gameplay, and the Three.js interactive web companion all share one visual grammar, one character-lock discipline, and one asset registry.

## Core Stack
- Main Game: Unreal Engine 5.7, Blueprint-first with C++ only where scalability requires it.
- Agent Development: Claude Code / Codex operating from the project root, with AGENTS.md, CLAUDE.md, CODEX.md, task boards, and commit checkpoints.
- UE Agent Bridge: UnrealClaude and/or VibeUE style MCP tooling for editor inspection, screenshots, Blueprint edits, level manipulation, material iteration, and Python execution inside Unreal.
- Asset Lab: Blender with MCP support, plus AI-to-3D providers only after references pass QC.
- Web Companion: Three.js / React / Vite, with optional Spark.js for splat-based rooms and Fable-style prompt-to-3D web prototyping.
- Reference System: Ideation, Clean Sheet, Parts, Views. No 3D model is created from a loose concept image.

## OVS Build Law
Face is the budget. Room is the antagonist. Camera is a witness. The image must feel playable.

Every asset, scene, and gameplay feature must answer four questions:
1. Does it support the LIKENESS story loop?
2. Is it consistent with the OVS visual DNA?
3. Can it be reused, swapped, or expanded without breaking the structure?
4. Can an agent understand where it belongs, what it depends on, and how to test it?

## Visual DNA
- Camera: ARRI Alexa 35 / Alexa Mini LF language, 35mm to 65mm equivalent for narrative shots, 2.39:1 capture framing for promo stills, playable third-person and first-person capture modes for the game.
- Lenses: Cooke S4/Panchro, Cooke Anamorphic/i, Panavision T-Series equivalent visual behavior.
- Grade: naturalistic desaturation, green-cyan crush in shadows, warm skin preservation, subtle magenta in mids only where story tension requires it.
- Lighting: tungsten practicals against sourceless teal, deep negative fill, soft motivated rim light, volumetric haze only when it helps the room feel haunted by memory.
- Texture: real skin, real fabric, real motel surfaces, chipped brass, stained carpet, humid mirror, rain on glass, dust, fingerprints, tape wear.
- Forbidden: plastic skin, superhero gloss, generic horror blue, gore escalation, overdesigned weapons, unmotivated neon cyberpunk, collage look, concept art presentation when a gameplay frame is required.

## Main Experience
The MVP is not an open-world game. It is a controlled vertical slice that proves tone, identity, mechanics, and pipeline.

Player Promise:
You explore The Dellwood motel and Room 14 as THOREAU, while the space gradually contradicts memory, identity, and relationship history. The player is not trying to kill monsters. The player is trying to understand which version of a conversation is real.

Primary Game Loop:
Explore room -> inspect object -> trigger memory distortion -> compare double-state clue -> choose response/action -> room state changes -> tape/mirror/hallway contradicts player memory -> progress deeper.

Secondary Loop:
Collect evidence fragments -> assemble relationship timeline -> unlock altered room states -> discover doubles -> reveal which body, voice, and memory belongs to whom.

## Pillars
1. Psychological Investigation: the main tension comes from evidence, unreliable memory, and identity drift.
2. Chamber-Horror Spatial Design: Room 14, hallway, office, bathroom, and exterior repeat with small but meaningful changes.
3. Identity-Locked Performance: THOREAU, DRYA, and doubles must stay recognizable across cinematics, gameplay, posters, and web.
4. Playable Cinematography: every camera state should feel like an independent film still, but still support movement and interaction.
5. Expandable Multiverse: the game, website, film campaign, fashion, music, and future episodes share a database and visual rulebook.

## Narrative Foundation
Premise: Two people argue in a motel room, but the conversation keeps being answered by the wrong double. The player gradually realizes that the room is not replaying the past. It is editing it.

Core Tagline: A room for two. A night for four.

Motif Bank:
- Brass key 14
- Desk bell
- Motel ledger
- Locket tintype
- Black device
- Camcorder tape
- Bathroom mirror lag
- Crooked family photos
- Chain lock
- Rain, parking-lot sodium, old carpet, wet glass

## Characters
### THOREAU
Black man in early 30s, medium-deep warm brown skin, oval-rectangular face, calm guarded eyes, mustache and goatee, round gold wire-frame glasses, small nose ring, grounded masculine posture. He carries restraint, intelligence, shame, suspicion, and unresolved tenderness.

### DRYA
Black woman around late 20s, warm medium-brown skin, curvy dancer's body around medium build, long curls or braids, piercings and jewelry language, guarded emotional intelligence. She should never drift into a generic model, horror victim, or glamour-only figure.

### DARK VARIANTS
Doubles are not monsters first. They are wrongness through posture, timing, gaze, breath, and response delay. No gore is needed. The most important effect is emotional recognition with one detail out of sync.

## Reference Pipeline - Ideation, Clean Sheet, Parts, Views
No character or prop goes into 3D until it passes this four-stage reference sequence.

### Step 1 - Ideation
Goal: lock concept, silhouette, personality, style, and emotional language. Generate freely. Do not care about pose, orthographic views, white background, or technical correctness yet.

Input: story role, personality, visual DNA, material language, wardrobe, references, and do-not-change identity notes.

Output: 4 to 12 concept candidates. Select one visual anchor and write a short identity lock.

### Step 2 - Clean Character Sheet
Goal: produce modeling-ready reference. Full body, neutral A-pose or relaxed T-pose, white or neutral background, even lighting, no dramatic camera distortion, all key accessories visible.

Output: one clean hero sheet with front full body and readable details.

### Step 3 - Parts
Goal: isolate any high-risk element that will collapse in full-body generation or in 3D conversion. Examples: head, glasses, chain, hat, shoes, coat, hands, props, mirror device, motel key, locket, weaponless defensive object, bracelet, pendant.

Output: individual part sheets with matching material, scale notes, and naming IDs.

### Step 4 - Views
Goal: convert art into a modeling blueprint. Generate front, side, back, and optional three-quarter orthographic references only for forms that matter.

Output: multi-view turnarounds and no-drift instructions.

Acceptance Rule: If the model cannot be recognized in silhouette, face, wardrobe, and prop language from front and side, it is not ready for Tripo, Hunyuan3D, Rodin, Meshy, Blender, MetaHuman, or Unreal import.

## Unreal Development Pipeline
### Phase 0 - Repository and Project Preflight
- Create root folder.
- Initialize Git before agent edits.
- Add README_START_HERE.md, AGENTS.md, CLAUDE.md, CODEX.md, TASK_BOARD.md.
- Create Unreal project with source control enabled.
- Set fixed folder architecture for Content/OVS_LIKENESS.
- Add asset registry CSVs before importing assets.
- Commit: `chore: initialize likeness game foundation`.

### Phase 1 - Vertical Slice Definition
The first build must contain only:
- Player controller.
- THOREAU placeholder or temp mannequin.
- Room 14 greybox.
- Hallway greybox.
- Inspectable object system.
- One mirror-lag event.
- One tape playback event.
- One room-state swap.
- One menu/pause UI.
- One end-of-slice title card.

### Phase 2 - Movement and Camera
- Third-person exploration camera.
- First-person inspect camera.
- Cinematic fixed-camera trigger volumes for OVS still capture.
- Player walk speed slow enough to preserve dread.
- No arcade sprint in the first vertical slice unless narratively justified.

### Phase 3 - Interaction System
Core Blueprint classes:
- BP_OVS_InteractableBase
- BP_OVS_InspectableObject
- BP_OVS_MemoryTrigger
- BP_OVS_RoomStateController
- BP_OVS_TapePlayer
- BP_OVS_MirrorLagController
- BP_OVS_DoublePresenceActor
- BP_OVS_SaveState
- WBP_OVS_InspectUI

All interactables must use Data Assets or structured tables so story objects can be swapped without Blueprint surgery.

### Phase 4 - Room State System
Room 14 exists in states:
- State 00: Normal arrival.
- State 01: Argument residue.
- State 02: Mirror lag.
- State 03: Double occupancy.
- State 04: Tape contradiction.
- State 05: Final memory lock.

Each state can override lighting, prop placement, audio bed, texture decals, mirror behavior, interactable availability, and camera triggers.

### Phase 5 - Narrative Data
Create a data-driven story model:
- Character registry.
- Object registry.
- Memory fragment registry.
- Dialogue bark registry.
- Tape registry.
- Room-state registry.
- Evidence timeline.

No hardcoded story text inside Blueprint graphs. Store text in Data Tables / JSON so the same story data can feed Unreal, the website, captions, and promo material.

### Phase 6 - 3D Asset Import
- FBX or GLB imports land in Content/OVS_LIKENESS/Art_Staging first.
- No asset enters Core until named, scaled, material-checked, and added to asset_manifest.csv.
- Skeletal characters require skeleton, rig, material instances, LOD plan, animation test, and identity QC sheet.
- Environment assets require collision, lightmap/virtual shadow behavior, Nanite eligibility, material instances, and optimization notes.

### Phase 7 - Lighting and Lookdev
- Establish master post-process volume.
- Define LUT or grade values.
- Build Room 14 lighting rigs by state.
- Lock playable frame rate targets before polish.
- Build screenshot/capture cameras for marketing stills.

### Phase 8 - Audio
- Room tone, HVAC, neon buzz, rain, distant road, floor creak, bathroom drip.
- Character breath and micro-foley for presence.
- Tape playback degradation.
- Mirror lag audio smear.
- Music only when story escalation requires it.

### Phase 9 - QA and Playtest
Every build must test:
- Boot to menu.
- New game starts.
- Player can move and inspect.
- Objects do not disappear between states unless specified.
- Mirror event triggers once or repeats intentionally.
- Save state loads.
- No broken collision.
- No unassigned materials.
- No identity drift in generated character assets.
- No concept-art placeholders masquerading as gameplay capture.

### Phase 10 - Export and Campaign Capture
- Export 16:9 gameplay stills.
- Export 2.39:1 cinematic stills.
- Export 4:5 IG posters.
- Export 9:16 reels clips.
- Export no-UI capture and UI capture separately.

## Three.js / Interactive Web Companion Pipeline
Purpose: build a web companion that feels like the same haunted motel universe, not a separate promo site.

Core Routes:
- / : OVS / LIKENESS landing page.
- /motel : interactive Dellwood motel map.
- /room-14 : playable micro-room scene.
- /tapes : tape archive.
- /characters : THOREAU / DRYA / doubles identity cards.
- /evidence : object timeline.
- /fashion : OVS wardrobe artifacts.
- /music : music and ambience archive.
- /devlog : production notes.

Tech Structure:
- React + Vite + TypeScript.
- Three.js for 3D rooms.
- Zustand or similar small state store.
- JSON data shared with Unreal narrative registries.
- Optional Spark.js for gaussian splat room scans or generated 3DGS environments.
- GSAP / Theatre.js / Rive for interface motion if needed.

Web Interaction Loop:
Browse map -> enter room -> inspect object -> reveal tape/evidence -> unlock alternate visual state -> route to film/game/fashion/music artifact.

Visual Thread:
- Same Room 14 key props.
- Same typography rules.
- Same color palette.
- Same character locks.
- Same motel state names.
- Same taglines and OVS brand hierarchy.

## Interchangeable Template System
The entire production is built around registries, not fixed one-off prompts. Each character, prop, level, mechanic, and story beat has an ID, status, source, dependencies, and acceptance criteria.

Registry Naming:
- CHR_THOREAU_001
- CHR_DRYA_001
- CHR_DARK_THOREAU_001
- LOC_DELLWOOD_ROOM14_001
- LOC_DELLWOOD_HALLWAY_001
- PROP_KEY14_001
- PROP_LOCKET_001
- MECH_INSPECT_001
- MECH_MIRROR_LAG_001
- BEAT_ARGUMENT_RESIDUE_001

Asset Status Values:
- IDEA
- REF_IN_PROGRESS
- REF_LOCKED
- MODEL_IN_PROGRESS
- MODEL_QC
- ENGINE_READY
- IMPLEMENTED
- NEEDS_REPAIR
- LOCKED

## Agent Operating Rules
Agents are helpful only when the project tells them what matters. Every agent must:
1. Read README_START_HERE.md first.
2. Read AGENTS.md and CLAUDE.md / CODEX.md before editing.
3. Never rename folders without updating registries.
4. Never import assets without logging them in asset_manifest.csv.
5. Never hardcode story content in logic files.
6. Commit after each stable milestone.
7. Use screenshots for visual verification.
8. Write a build note after each session.
9. Ask before deleting; prefer archive over destructive cleanup.
10. Preserve OVS visual DNA and identity locks.

## Milestone Roadmap
### Milestone 01 - Foundation Package
Deliverables: repository, docs, registries, Unreal empty project, web empty project, shared data schema.

### Milestone 02 - Room 14 Greybox
Deliverables: playable room, hallway, basic lighting, player movement, interaction trace.

### Milestone 03 - Inspectable Objects
Deliverables: motel key, locket, black device, tape, mirror, desk bell, ledger.

### Milestone 04 - Mirror Lag Prototype
Deliverables: mirror actor, delayed player reflection illusion, audio smear, state trigger.

### Milestone 05 - Tape Contradiction Prototype
Deliverables: tape UI, playable video/audio placeholder, evidence unlock.

### Milestone 06 - Character Reference Pack
Deliverables: THOREAU and DRYA ideation, clean sheets, parts, views, QC sheets.

### Milestone 07 - Character Integration
Deliverables: temp or final character in Unreal, third-person animation test, inspect-camera face read.

### Milestone 08 - Cinematic Capture Pass
Deliverables: 10 gameplay stills, 10 cinematic stills, no concept-art drift.

### Milestone 09 - Three.js Companion Alpha
Deliverables: landing page, motel map, room 14 interactive scene, shared JSON ingestion.

### Milestone 10 - Vertical Slice Lock
Deliverables: 8-12 minute playable slice, complete beginning/middle/end, build notes, QA checklist, handoff archive.

## Acceptance Criteria for the Vertical Slice
The vertical slice is locked only when:
- A new user can launch it and understand the premise without explanation.
- The player can inspect at least five story objects.
- The room changes state at least three times.
- The mirror lag event communicates identity instability.
- One double appears without relying on gore.
- The visual tone matches OVS style from gameplay capture, not only still prompts.
- The web companion can display matching characters, objects, and story fragments from the same data schema.
- The agent handoff can be run by Codex or Claude Code without reconstructing the project logic from chat history.

## Production Risks
- Identity drift: solved by locked character packs and QC sheets.
- Agent chaos: solved by AGENTS.md, registries, and commit checkpoints.
- Asset soup: solved by staging folders and manifests.
- Overbuilding: solved by vertical slice limits.
- Website/game mismatch: solved by shared JSON and visual DNA.
- Gaussian splat overuse: use splats as scenic capture or web environment layers, but keep gameplay collision on invisible meshes.
- Blueprint spaghetti: keep data-driven systems, review graphs manually, and move complex logic into C++ only when Blueprint becomes unmaintainable.

## Source Notes
This production bible was assembled from Brandon's OVS/LIKENESS project history, the supplied 4-step 3D character reference workflow, the uploaded Claude + Unreal transcript, the uploaded playable Gaussian Splatting article, and the uploaded Claude + Blender MCP workflow. Public verification was also checked for Unreal Engine 5.7, VibeUE, UnrealClaude, Three.js, Spark.js, and Google AI Studio.