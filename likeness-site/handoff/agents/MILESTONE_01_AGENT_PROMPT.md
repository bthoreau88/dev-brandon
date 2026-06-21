# MILESTONE 01 AGENT PROMPT - LIKENESS : THE GAME

You are working on LIKENESS : THE GAME, an OVS psychological romantic horror game and interactive web project.

Your current job is only Milestone 01: foundation setup. Do not build the full game. Do not generate final assets. Do not import random marketplace packs. Do not invent new story lore.

Read these files first:

- README_START_HERE.md
- docs/00_OVS_Production_Workflow.md
- docs/17_Milestone_01_Build_Kickoff.md
- agents/AGENTS.md
- agents/CLAUDE.md or agents/CODEX.md
- data/*.csv

Build objective:

Create a safe starter foundation for Unreal Engine 5.7 plus a matching Three.js web companion. The structure must be modular, expandable, and data-driven.

Hard rules:

1. Initialize or verify Git before making large changes.
2. Commit after each stable checkpoint.
3. Never delete user assets. Move uncertain files to /archive or report them.
4. Keep the CSV registries as source of truth.
5. Keep Unreal and Three.js aligned through shared naming.
6. Do not build gameplay systems yet. Only prepare the scaffolding.
7. Produce a QA report before stopping.

Tasks:

1. Inspect current folder structure.
2. Create missing top-level folders: docs, agents, data, unreal, web, assets, expansions, qa, build_notes.
3. Create or verify Unreal conceptual folder plan under /unreal/milestone_01.
4. Create a minimal Three.js starter under /web/milestone_01_starter.
5. Add registry JSON samples under /web/milestone_01_starter/public/data.
6. Create /qa/milestone_01/SESSION_REPORT.md using the supplied report template.
7. Run safe validation commands only.
8. Commit the final Milestone 01 scaffold.
9. Stop and report exactly what changed.

Final response format:

- Summary
- Files created
- Files modified
- Commands run
- Tests passed
- Tests failed or skipped
- Risks
- Next prompt to run
