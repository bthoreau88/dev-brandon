# import_registries_as_datatables.py
# Run INSIDE the UE editor (via the MCP execute_python_code tool, or the
# editor's Python console) AFTER the LikenessTheGame C++ module has compiled
# so that unreal.CharacterRow et al. exist.
#
# Imports each canonical registry CSV as a DataTable at /Game/OVS_LIKENESS/09_Data,
# binding the matching native row struct. Row Name = the CSV's first column (the ID).
#
# Single source of truth: C:/OVS/LIKENESS_THE_GAME/data/*.csv

import unreal

CSV_DIR = "C:/OVS/LIKENESS_THE_GAME/data/"
DEST = "/Game/OVS_LIKENESS/09_Data"

# (csv filename, DataTable asset name, native row struct python type)
MAPPING = [
    ("character_registry.csv",               "DT_CharacterRegistry", unreal.CharacterRow),
    ("level_registry.csv",                   "DT_LevelRegistry",     unreal.LevelRow),
    ("asset_manifest.csv",                   "DT_AssetManifest",     unreal.AssetManifestRow),
    ("mechanics_registry.csv",               "DT_MechanicsRegistry", unreal.MechanicRow),
    ("narrative_beats.csv",                  "DT_NarrativeBeats",    unreal.NarrativeBeatRow),
    ("prompt_registry.csv",                  "DT_PromptRegistry",    unreal.PromptRow),
    ("expansion_registry.csv",               "DT_ExpansionRegistry", unreal.ExpansionRow),
    ("blender_asset_workflow_registry.csv",  "DT_BlenderWorkflow",   unreal.BlenderWorkflowRow),
    ("milestone_01_task_board.csv",          "DT_Milestone01Tasks",  unreal.MilestoneTaskRow),
]

eal = unreal.EditorAssetLibrary
if not eal.does_directory_exist(DEST):
    eal.make_directory(DEST)

asset_tools = unreal.AssetToolsHelpers.get_asset_tools()
results = []

for csv_file, dt_name, row_type in MAPPING:
    csv_path = CSV_DIR + csv_file

    factory = unreal.DataTableFactory()
    # Bind the row struct. Property is exposed as "struct"; fall back to "Struct".
    script_struct = row_type.static_struct()
    try:
        factory.set_editor_property("struct", script_struct)
    except Exception:
        factory.set_editor_property("Struct", script_struct)

    task = unreal.AssetImportTask()
    task.filename = csv_path
    task.destination_path = DEST
    task.destination_name = dt_name
    task.replace_existing = True
    task.automated = True
    task.save = True
    task.factory = factory

    asset_tools.import_asset_tasks([task])

    full = DEST + "/" + dt_name
    ok = eal.does_asset_exist(full)
    row_count = 0
    if ok:
        dt = eal.load_asset(full)
        try:
            row_count = len(unreal.DataTableFunctionLibrary.get_data_table_row_names(dt))
        except Exception:
            row_count = -1
    results.append((dt_name, "OK" if ok else "FAIL", row_count))

print("=== DataTable import results ===")
for name, status, rows in results:
    print("{0:<24} {1:<5} rows={2}".format(name, status, rows))
print("Done. Verify each DT opens with correct columns and the ID as Row Name.")
