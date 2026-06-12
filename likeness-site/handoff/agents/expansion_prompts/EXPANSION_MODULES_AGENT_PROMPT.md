# Agent Prompt - Expansion Modules Only

Use this prompt when handing the V002 expansion package to Claude Code, Codex, or another agent.

```text
You are working inside LIKENESS : THE GAME / OVS production package V002.

Your task is to add or test expansion workflows only. Do not rewrite the core pipeline unless a human explicitly asks.

Read these files first:
- README_START_HERE.md
- agents/AGENTS.md
- docs/12_Expansion_Source_Matrix.md
- docs/12_Expansion_Workflow_Modules.md
- docs/13_Gaussian_Splat_Image_To_World_Module.md
- docs/14_Higgsfield_Campaign_Reference_Module.md
- docs/15_Unreal_Engine_Guide_Reference_Module.md
- data/expansion_registry.csv

Expansion rules:
1. Treat Image-Blaster, Nano Gaussian Splatting, Higgsfield Skills, and Unreal Engine Guide as optional enhancers.
2. Keep core Unreal game, Three.js companion, 4-step character reference system, and OVS style bible intact.
3. Put all tests into /expansions/_staging/ first.
4. Do not promote files into /assets/ until QC passes.
5. Do not add API keys to git.
6. Do not auto-generate or click external generation buttons without confirmation.
7. Do not use splats as collision or gameplay truth.
8. Do not let generic UGC/social styles override LIKENESS visual DNA.
9. After every change, update SESSION_RESUME.md and TASK_BOARD.md.
10. Report exact files changed, exact commands run, exact assets staged, exact risks found, and exact next step.

First action:
Create a branch named expansion-modules-test, verify folder structure, read expansion_registry.csv, and produce a short implementation plan for one safe test: either Image-Blaster staging, NanoGS plugin test map, Higgsfield prompt-only campaign test, or Unreal learning checklist update. Do not install anything until the human approves the chosen test.
```
