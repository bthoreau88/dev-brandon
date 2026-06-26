# UE 5.8 Plug-and-Play Package — Adoption Map (READ BEFORE USING IT)

The `OVS_LIKENESS_UE58_PLUG_AND_PLAY_PACKAGE` is a strong production-discipline kit. But it
is written as **"start a fresh UE 5.8 repo from a template."** You are **not** starting
fresh — `LikenessTheGame` already exists on UE 5.8 with canonical registries, 9 DataTables,
a C++ module, a greybox, and Git+LFS. Adopt the package's **doctrine and tooling**; do
**not** adopt its scaffold, module, folders, or ID schema. This doc says which is which.

---

## ✅ ADOPT (folded into this handoff / your existing project)

- **QC Gates** — see "QC Gates" below. Run these before promoting anything.
- **Developer cheatsheet** — see "UE 5.8 Cheatsheet" below (folder/naming columns
  reconciled to your real project).
- **Agent / MCP starter prompts** — the "inspect → smallest change → report → stop"
  protocol is correct. Use it, but: **MCP for dressing/placement/materials/lighting/
  inspection only — gameplay logic (mirror-lag, room-state, save) is C++ components.**
- **Staging → Production discipline** — nothing enters a final folder until it passes QC
  and has an `asset_manifest.csv` row.
- **Naming validator** — adapted version at `handoff/scripts/validate_ovs_names.py`
  (scopes to `/Content/OVS_LIKENESS/`, uses your real prefixes incl. `L_` maps).
- **GitHub issue/PR templates** — copy into your game repo's `.github/` once it has a remote.
- **Production Bible V002 PDF** — read it; supersedes V001 as reference.

## ❌ DO NOT ADOPT (would fork the project or re-drift IDs)

| Package says | Why to ignore | Use instead |
|---|---|---|
| New repo scaffold + `main/ue58-sandbox/...` branches | Forks your working project into a parallel copy | The single `LikenessTheGame` project you already have |
| Module **`OVSLikeness`** | You already have a compiled module | **`LikenessTheGame`** (keep it) |
| Folder **`/Content/OVS/`** | You already built under a different root | **`/Content/OVS_LIKENESS/`** (your canonical tree) |
| `EvidenceItems_Template.csv` → `EV_KEY14` | **Re-introduces ID drift** | `asset_manifest.csv` → **`PROP_KEY14_001`** |
| `TapeNodes_Template.csv` → `TAPE03_A01` | Non-canonical beat IDs | `narrative_beats.csv` → **`BEAT_*`** |
| `AssetRegistry_Template.csv` → `OVS_PROP_0001` | Competing asset schema | `asset_manifest.csv` (`asset_id`) |
| Separate `LIKENESS_UE58_SANDBOX` / `_PRODUCTION` **projects** | Fragments work across copies | Sandbox **maps** in the one project (below) |

---

## Folder / module / ID reconciliation (package → your project)

```
Package                              Your canonical project
/Content/OVS/Room14/            ->   /Content/OVS_LIKENESS/02_Environments/
/Content/OVS/Data/              ->   /Content/OVS_LIKENESS/09_Data/  (DT_*) + /data/*.csv
/Content/OVS/Staging/           ->   /Content/OVS_LIKENESS/10_Art_Staging/
module OVSLikeness              ->   module LikenessTheGame
MAP_UE58_Room14_Sandbox_01      ->   L_Dellwood_Room14_SANDBOX   (a MAP, same project)
MAP_..._Production_01           ->   L_Dellwood_Room14           (your real map)
EV_KEY14 / OVS_PROP_0001        ->   PROP_KEY14_001
TAPE03_A01                      ->   BEAT_* / PROP_TAPE_001
```

**Sandboxing rule:** use sandbox *maps* (`*_SANDBOX`) inside the one project for
MegaLights / Mesh-Terrain / MCP-dressing tests. Do **not** duplicate the whole project.
Promote winning results into the real `L_Dellwood_*` maps.

---

## QC Gates (adopt verbatim)

- **Identity** — Thoreau/Drya face, posture, wardrobe, performance stay canon.
- **Gameplay** — player can move, inspect, leave, return, and understand what changed.
- **Cinematic** — frame reads as in-engine gameplay capture, not a fake poster.
- **Lighting** — every light motivated; negative fill survives; no generic overlight.
- **Performance** — no approval if it hitches during traversal, mirror events, or first interaction.
- **Agent** — MCP reports exactly what changed; no invented lore, no silent moves, no production overwrite.
- **Promotion** — only staging assets that pass QC move to production, and only with an `asset_manifest.csv` row.

---

## UE 5.8 Cheatsheet (reconciled)

**Status discipline**
- Use aggressively (production-ready): **MegaLights**, **Movie Render Graph**.
- Sandbox-first: **MCP**, **Mesh Terrain**, **markerless MetaHuman** body capture.
- Scalability: **Lumen hero** profile vs **Lumen Lite / lower-GI** profile.

**Naming (your project)** — maps `L_*` (not `MAP_`); `DT_` data tables; `BP_`/`BPI_`/`WBP_`;
`M_`/`MI_`/`T_` materials/textures; `SM_`/`SK_` meshes; `GROOM_`; `ANIM_`; `LGT_` lighting
profiles; `PCG_`; `NS_` Niagara; `MRG_` render graphs; `DA_` data assets.

**Required systems (build order, C++ components where logic-heavy)**
1. Interaction interface → 2. **Room State Manager** → 3. **Mirror Delay System** →
4. Tape Playback → 5. Evidence Board UI → 6. Audio triggers → 7. Flowchart logger →
8. Lighting Profile Manager → 9. MetaHuman performance import → 10. Capture/Render export.
*(Inspect/evidence = done. #2 and #3 are the next mechanics.)*

**Blueprint vs C++** — Blueprint for fast prototypes (triggers, UMG mockups, cinematic event
tests); **C++ for save/load, interaction interfaces, data parsing, gameplay state,
evidence/tape/room state, performance-critical systems.** (Confirmed the hard way: MCP-wired
Blueprint graphs for core logic cost multiple sessions; C++ components are clean.)

---

## Where this lands vs. your real progress

- Package M01 (engine foundation) / M02 (blockout) → **done.**
- Evidence/inspect → **closing now** (C++ component).
- **Mirror system → your next mechanic** (`MECH_MIRROR_LAG_001`).
- MegaLights lighting pass → best **parallel** track (sandbox map, no PC blocker).
