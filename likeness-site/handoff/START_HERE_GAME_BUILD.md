# START HERE — Build LIKENESS : THE GAME (local Unreal)

The web companion is done and live. **The game itself must be built locally** — Unreal
Engine can't run in a web sandbox. This is the one-page packet to start the UE5 build on
your machine with Claude Code (or Codex) + an Unreal MCP bridge.

> You are at **Milestone 01 (Foundation) complete** → next is **Milestone 02 (Room 14
> greybox)**. See `MILESTONE_02_ROOM14_GREYBOX.md`.

---

## 0 · One-time setup
1. Install **Unreal Engine 5.7 or 5.8** (5.8 is fine — workflow is identical; see
   `WORKSTATION_SETUP.md` for the PC/Mac/iPhone split).
2. Create the UE project (or open the one from the V004 handoff). Enable **source
   control (Git)** before any agent edits.
3. Install an **editor/MCP bridge** so the agent can drive Unreal:
   **UnrealClaude** and/or **VibeUE** (an MCP server that exposes the UE editor).
4. Install **Claude Code** locally: `npm install -g @anthropic-ai/claude-code`
5. **Restart Unreal and the agent** after the plugin/MCP install.

## 1 · Open the session
- Open the Unreal project.
- Open Claude Code (or Codex) **from the project root** (where `README_START_HERE.md`
  and `agents/AGENTS.md` live).
- Paste the **Agent Prompt Block** (below) as your first message.

## 2 · The Agent Prompt Block (paste verbatim)
```
You are the lead technical artist, gameplay engineer, narrative systems designer, and
build producer for LIKENESS : THE GAME, an OVS psychological romantic horror project.
Before doing anything, read README_START_HERE.md, docs/00_OVS_Production_Workflow.md,
agents/AGENTS.md, and the data registries in /data. Your job is to build the project in
expandable milestones, not one-off hacks. Preserve the OVS law: Face is the budget. Room
is the antagonist. Camera is a witness. Image must feel playable.

Hard rules:
- Do not delete user files. Archive instead.
- Do not rename the folder architecture unless updating every affected registry.
- Do not hardcode story text inside Blueprints or React components.
- Do not import assets into final folders until they pass staging QC.
- Do not create 3D characters from loose AI art. Require clean sheets, isolated parts, views.
- Do not use gore escalation as a shortcut. Doubles are posture, timing, gaze, audio, memory.
- Do not let the web companion become visually separate from the Unreal game.

Task: implement ONE milestone only — see MILESTONE_02_ROOM14_GREYBOX.md. Then stop and
report what changed, what was created, what still needs human assets, and the exact
play-in-editor test + screenshot that proves the build is healthy.
```

## 3 · Session loop (repeat per milestone)
1. Ask the agent to read `README_START_HERE.md` + `agents/AGENTS.md`.
2. Ask it to **verify the MCP/editor connection** and **capture a viewport screenshot**.
3. Give it **one milestone task only**.
4. Let it implement.
5. **Play-in-editor / build test.**
6. **Capture screenshot proof.**
7. **Commit** the stable state.

## 4 · Commit pattern
```
chore: initialize foundation
feat: add room 14 greybox
feat: add inspectable object system
feat: add mirror lag prototype
feat: add tape contradiction prototype
fix: repair room state collision
docs: update build notes
```

## 5 · Guardrails specific to this project
- **Blueprint-first**; C++ only where it must scale.
- **Data-driven**: read story/props/states from the registries in `/data` — never hardcode
  story strings in Blueprints.
- **One location**: Room 14 + hallway + office. No scope creep past the 30-min slice.
- Keep the **web companion** (this repo) in sync: matching IDs, matching visual law.

## 6 · The handoff index (what to read, in order)
1. `README_START_HERE.md`
2. `docs/00_OVS_Production_Workflow.md`
3. `agents/AGENTS.md`, then `agents/CLAUDE.md` (Unreal) or `agents/CODEX.md` (systems)
4. `docs/11_Unreal_Claude_Setup.md`
5. The registries in `data/*.csv`
6. `docs/03_Character_Reference_4Step_Template.md` before any character 3D
7. `MILESTONE_02_ROOM14_GREYBOX.md` (your next task)
