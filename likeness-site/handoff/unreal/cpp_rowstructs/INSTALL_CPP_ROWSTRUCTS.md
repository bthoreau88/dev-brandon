# C++ Row-Struct Module — Install & Import (kills the DataTable blocker)

**Why this exists:** Stock UE 5.8 cannot create a typed DataTable row struct from
Python. A DataTable needs a `UStruct : FTableRowBase` to bind CSV columns to. This tiny
C++ module defines one row struct per canonical registry, so `DataTableFactory` can
import all 9 CSVs cleanly. It also converts the project from BP-only to a code project
(which it needs to be eventually anyway).

This is the **first task of Milestone 02**. Do it once; DataTables work forever after.

---

## What's in this folder

```
cpp_rowstructs/
├── Source/
│   ├── LikenessTheGame.Target.cs            # Game target
│   ├── LikenessTheGameEditor.Target.cs      # Editor target
│   └── LikenessTheGame/
│       ├── LikenessTheGame.Build.cs         # module build rules
│       ├── LikenessTheGame.h                # module header
│       ├── LikenessTheGame.cpp              # IMPLEMENT_PRIMARY_GAME_MODULE
│       └── Public/
│           └── LikenessRows.h               # the 9 FTableRowBase structs
├── scripts/
│   └── import_registries_as_datatables.py   # binds structs + imports CSVs
├── uproject_modules_snippet.json            # the "Modules" block for the .uproject
└── INSTALL_CPP_ROWSTRUCTS.md                # this file
```

The struct property names match the canonical CSV headers **exactly** — do not edit
either side without editing the other and `src/lib/registry.ts` on the web. IDs are
shared web↔game.

---

## Install steps (PC, with the editor CLOSED)

1. **Copy the `Source/` tree** into the UE project root so you get:
   ```
   c:\OVS\LIKENESS_THE_GAME\LikenessTheGame\Source\
     LikenessTheGame.Target.cs
     LikenessTheGameEditor.Target.cs
     LikenessTheGame\
       LikenessTheGame.Build.cs
       LikenessTheGame.h
       LikenessTheGame.cpp
       Public\LikenessRows.h
   ```
   (i.e. `Source/` is a sibling of `Content/`, `Config/`, `Plugins/`.)

2. **Edit `LikenessTheGame.uproject`** — add the `Modules` block from
   `uproject_modules_snippet.json` (merge if a `Modules` key already exists). Keep the
   JSON valid.

3. **Generate project files:** right-click `LikenessTheGame.uproject` →
   *Generate Visual Studio project files*. (Or run UBT `-projectfiles`.) A `.sln` appears.

4. **Build** in Visual Studio 2022: set configuration to **Development Editor**,
   platform **Win64**, target **LikenessTheGameEditor**, then Build. First build is
   slow (it compiles the module + UHT generates `LikenessRows.generated.h`).
   - CLI alternative:
     `"<UE>\Engine\Build\BatchFiles\Build.bat" LikenessTheGameEditor Win64 Development -project="c:\OVS\LIKENESS_THE_GAME\LikenessTheGame\LikenessTheGame.uproject" -waitmutex`

5. **Launch the editor** (the build will offer to, or open the .uproject). The MCP
   bridge comes back up with the editor.

6. **Sanity check the structs are live** — in the editor Python console or via MCP
   `execute_python_code`:
   ```python
   import unreal
   print(unreal.CharacterRow.static_struct().get_name())   # -> CharacterRow
   ```
   If that errors, the module didn't load — recheck step 2 (the `.uproject` Modules
   entry) and that the build succeeded.

7. **Import the registries** — run `scripts/import_registries_as_datatables.py` via MCP
   `execute_python_code` (paste its contents) or from the Python console. Expect:
   ```
   DT_CharacterRegistry     OK    rows=3
   DT_LevelRegistry         OK    rows=3
   DT_AssetManifest         OK    rows=...
   ... (9 total)
   ```
   DataTables land at `/Game/OVS_LIKENESS/09_Data` with the registry ID as each Row Name.

---

## After it works

- Update `MILESTONE_01_ACCEPTANCE_REPORT.md`: flip every `DT_*` from
  "PENDING — requires C++ row-struct module" to "OK (rows=N)".
- Commit:
  ```
  git add Source/ LikenessTheGame.uproject
  git commit -m "ue: add C++ row-struct module + import canonical registries as DataTables"
  ```
  Source files are text — safe to commit without LFS. (`.uasset` DataTables still need
  LFS; set that up before committing the `/Game/OVS_LIKENESS/09_Data` assets.)

## Guardrails

- Row Name for each DataTable = the CSV's **first column** (the canonical ID). Never
  retype IDs by hand in the editor.
- Adding a column later = edit the CSV header **and** the matching struct property
  **and** the web registry, then re-import. Three places, always in sync.
- Do not rename the module (`LikenessTheGame`) — it must match the primary game module /
  `.uproject` base name.
