# Workstation Setup — PC + Mac + iPhone

Your reality: **UE 5.8 on a Windows PC**, day-to-day on a **MacBook + iPhone**.
Decisions locked: **separate game repo (Git LFS)** · **build on the PC**.

> UE 5.8 is fine — the handoff was specced at 5.7 but the workflow is identical. Only the
> optional **NanoGS** splat expansion lists 5.6/5.7; verify that one plugin against 5.8 if
> you ever use it. Everything else (MetaHuman, Lumen, Nanite, Live Link) is 5.8-native.

---

## 1 · Machine roles
| Machine | Owns |
|---|---|
| **Windows PC (UE 5.8)** | The game build — greybox, MetaHuman, Lumen lighting, systems, and the **agent-driven Unreal** sessions (Claude Code + Unreal MCP). Needs the GPU. |
| **MacBook** | The web companion (`dev-brandon`), audio (**Reaper**), **Blender** cleanup, planning, Claude Code chats. |
| **iPhone** | Capture/scan — **Live Link Face** (facial perf) + **KIRI / RealityScan** (photogrammetry). Pairs with the Mac; streams into UE on the PC over the same network. |

The two halves meet through **Git** (separate repos) and **matching registry IDs**.

## 2 · The separate game repo (on the PC)
1. New **private** repo, e.g. `bthoreau88/likeness-the-game`.
2. In the UE project root: `git init` → `git lfs install`.
3. `.gitattributes` — track binaries with LFS:
   ```
   *.uasset filter=lfs diff=lfs merge=lfs -text
   *.umap   filter=lfs diff=lfs merge=lfs -text
   *.fbx    filter=lfs diff=lfs merge=lfs -text
   *.wav filter=lfs diff=lfs merge=lfs -text
   *.mp4 filter=lfs diff=lfs merge=lfs -text
   *.png filter=lfs diff=lfs merge=lfs -text
   ```
4. `.gitignore` — never commit generated UE folders:
   ```
   Binaries/
   Intermediate/
   Saved/
   DerivedDataCache/
   .vs/
   ```
5. First commit: `chore: initialize foundation`.

Keep **`dev-brandon`** for the web companion only. The game's size + LFS don't belong in a
Pages-deploying repo.

## 3 · Shared registries = one source of truth
The CSVs are canon for **both** repos. Site and game must never drift.
- Copy `likeness-site/handoff/data/*.csv` → the game repo's `/data`.
- **Game:** import them as UE **DataTables**; read story/props/states by ID — never
  hardcode story strings in Blueprints.
- **Web:** `src/lib/registry.ts` mirrors the same IDs.
- When an ID/name changes, update the CSV and both sides pick it up.

## 4 · PC Day-1 checklist (Gap Bible Week 1 + `MILESTONE_02_ROOM14_GREYBOX.md`)
1. Create the UE 5.8 project (blank C++ or Blueprint).
2. `git init` + Git LFS + `.gitattributes`/`.gitignore` (above) → first commit.
3. Install the **Unreal MCP bridge** (UnrealClaude and/or VibeUE) into the project's
   `Plugins/`.
4. Install **Claude Code**: `npm install -g @anthropic-ai/claude-code`.
5. **Restart** Unreal and the agent.
6. Open Claude Code from the **project root**; verify the MCP/editor connection; capture a
   viewport screenshot.
7. Paste the **Agent Prompt Block** from `START_HERE_GAME_BUILD.md`.
8. Give it **one task**: `MILESTONE_02_ROOM14_GREYBOX.md` → greybox Room 14 + hallway,
   player walk, inspect trace.
9. Play-in-editor test → screenshot proof → commit `feat: add room 14 greybox`.

## 5 · The bridge between machines while you build
- **Mac → game:** generate character refs (4-step packs), scan on iPhone (KIRI), clean in
  Blender, drop `.fbx`/`.glb` into the game repo → pull on the PC.
- **Mac → web:** keep editing `dev-brandon`; the live site and the game stay matched via
  the shared registries.
- **Optional:** if you ever want to *drive* from the Mac, remote into the PC (Parsec / RDP)
  — UE still runs on the PC.
