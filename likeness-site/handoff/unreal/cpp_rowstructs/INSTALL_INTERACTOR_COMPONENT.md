# Install the C++ Inspect Component (finishes M02 — no Blueprint graph wiring)

`UOVSInteractorComponent` does the whole inspect loop in C++: trace from the player's
view → read the hit actor's `asset_id` tag → look it up in `DT_AssetManifest` → show the
widget with `name` + `inspect_text`. You skip all Blueprint graph wiring. The only manual
work is a tiny UMG layout (~5 min) and setting two component properties (~3 clicks) — and
the attach script tries to do even those clicks for you.

These files belong to the **same `LikenessTheGame` module** you already built for the
DataTables, so this is just "add two files + a Build.cs change + rebuild."

---

## 1 · Copy the new/updated source (editor CLOSED)

From `likeness-site/handoff/unreal/cpp_rowstructs/Source/LikenessTheGame/`, copy into
`c:\OVS\LIKENESS_THE_GAME\LikenessTheGame\Source\LikenessTheGame\`:

- `Public/OVSInteractorComponent.h`  *(new)*
- `OVSInteractorComponent.cpp`  *(new)*
- `LikenessTheGame.Build.cs`  *(overwrite — now depends on UMG/Slate/SlateCore)*

## 2 · Rebuild the module

Same cycle as the row-struct build (editor closed): regenerate project files if needed,
then build **LikenessTheGameEditor (Win64, Development Editor)** — or run
`BuildAndLaunchGame.ps1`. First build after adding UMG deps may be a little slower.

Verify the class is live (MCP `execute_python_code` or Output Log):
```python
import unreal; print(unreal.OVSInteractorComponent.static_class().get_name())
```
Expect `OVSInteractorComponent`.

## 3 · Build the WBP layout (the only unavoidable manual step, ~5 min)

Open `/Game/M02/UI/WBP_OVS_InspectUI` → Designer:

- Root `Canvas Panel` → add a `Vertical Box` (anchor bottom-center, Y offset ~ -130).
- Inside it, add **three TextBlocks**:
  - one for the prompt — text `[E] Inspect` (any name)
  - one **named exactly `TXT_Name`**  (the component sets this)
  - one **named exactly `TXT_Line`**  (autowrap on; the component sets this)
- No variable binding needed — the C++ sets these TextBlocks by name.
- Select the root **Canvas Panel** → Visibility → **Hidden**.

Compile + Save.

## 4 · Attach the component + rename the map

Run `scripts/attach_interactor_component.py` via MCP `execute_python_code`. It:
- adds `UOVSInteractorComponent` to `BP_FirstPersonCharacter`,
- sets `InspectWidgetClass = WBP_OVS_InspectUI` and `AssetManifest = DT_AssetManifest`,
- renames the map `Lvl_Room14 → L_Dellwood_Room14` (to match `level_registry`).

**If the auto-attach prints "AUTO-ATTACH FAILED"** (SubobjectDataSubsystem varies by
build), do the 3-click manual version instead:
1. Open `BP_FirstPersonCharacter` → **Add Component** → search **OVS Interactor**.
2. Select it → Details → set **Inspect Widget Class = WBP_OVS_InspectUI**.
3. Set **Asset Manifest = DT_AssetManifest**. Compile + Save.

(If the auto map-rename failed, rename it in the Content Browser and update the editor
default/startup map.)

## 5 · PIE test + the two proofs

1. Open `L_Dellwood_Room14`, press **Play**.
2. Look at each of the 5 props within 250 cm → the widget shows the correct **name** +
   **inspect line** from `DT_AssetManifest`. Look away → it hides.
3. **Data-driven proof:** change one `inspect_text` in `data/asset_manifest.csv`, re-import
   `DT_AssetManifest` (the fill-from-csv snippet in `docs/20_…`), re-PIE → text changed.
4. Screenshots: one wide of Room 14, one with an **active inspect prompt** on a prop.

Commit: `feat: data-driven inspect via C++ component (room 14)`
(Source is text — commits without LFS. The map `.umap` needs LFS, already configured.)

## What this replaces

The Blueprint graph steps in `docs/20_Milestone_02_Room14_Greybox.md` (Steps 2–4) are no
longer needed — the component does all of it. Keep Step 1 (WBP layout) only. The
`InspectName`/`InspectLine` Blueprint variables the earlier pass added are harmless; the
component drives the named TextBlocks directly and also sets those variables as a fallback.
