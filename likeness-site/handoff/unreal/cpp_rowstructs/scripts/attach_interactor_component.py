# attach_interactor_component.py
# Run AFTER the LikenessTheGame module is rebuilt with UOVSInteractorComponent.
# Adds the component to BP_FirstPersonCharacter, sets InspectWidgetClass +
# AssetManifest, renames the map to L_Dellwood_Room14, and fixes the default map.
#
# If the SubobjectDataSubsystem path fails on this engine build, fall back to the
# 3-click manual add documented in INSTALL_INTERACTOR_COMPONENT.md.

import unreal

BP_PATH = "/Game/FirstPerson/Blueprints/BP_FirstPersonCharacter"
WBP_PATH = "/Game/M02/UI/WBP_OVS_InspectUI"
DT_PATH = "/Game/OVS_LIKENESS/09_Data/DT_AssetManifest"

eal = unreal.EditorAssetLibrary
bp = eal.load_asset(BP_PATH)
wbp = eal.load_asset(WBP_PATH)
dt = eal.load_asset(DT_PATH)

widget_class = wbp.generated_class()  # TSubclassOf<UUserWidget>

# ---- 1. add the component via SubobjectDataSubsystem ----------------------------
added = False
try:
    sds = unreal.get_engine_subsystem(unreal.SubobjectDataSubsystem)
    handles = sds.k2_gather_subobject_data_for_blueprint(bp)
    if not handles:
        raise RuntimeError("no subobject handles")
    root = handles[0]

    # Skip if it already exists.
    existing = False
    for h in handles:
        data = sds.k2_find_subobject_data_from_handle(h)
        obj = unreal.SubobjectDataBlueprintFunctionLibrary.get_object(data)
        if obj and obj.get_class().get_name().startswith("OVSInteractorComponent"):
            existing = True
            comp_template = obj
            break

    if not existing:
        params = unreal.AddNewSubobjectParams(
            parent_handle=root,
            new_class=unreal.OVSInteractorComponent,
            blueprint_context=bp,
        )
        new_handle, fail = sds.add_new_subobject(params)
        if fail and str(fail):
            raise RuntimeError("add_new_subobject failed: " + str(fail))
        sds.rename_subobject(new_handle, unreal.Text.from_string("OVSInteractor"))
        data = sds.k2_find_subobject_data_from_handle(new_handle)
        comp_template = unreal.SubobjectDataBlueprintFunctionLibrary.get_object(data)

    # set the two properties on the component template
    comp_template.set_editor_property("InspectWidgetClass", widget_class)
    comp_template.set_editor_property("AssetManifest", dt)
    added = True
    print("Component attached + configured (InspectWidgetClass=WBP_OVS_InspectUI, AssetManifest=DT_AssetManifest)")
except Exception as e:
    print("AUTO-ATTACH FAILED (" + str(e) + ") -> use the 3-click manual add in the install doc.")

if added:
    unreal.BlueprintEditorLibrary.compile_blueprint(bp)
    eal.save_asset(BP_PATH)
    print("BP_FirstPersonCharacter compiled + saved")

# ---- 2. rename the map to match level_registry (L_Dellwood_Room14) --------------
OLD_MAP = "/Game/M02/Maps/Lvl_Room14"
NEW_MAP = "/Game/M02/Maps/L_Dellwood_Room14"
if eal.does_asset_exist(OLD_MAP) and not eal.does_asset_exist(NEW_MAP):
    if eal.rename_asset(OLD_MAP, NEW_MAP):
        print("Renamed map -> L_Dellwood_Room14")
    else:
        print("Map rename failed (rename it manually in the Content Browser)")
else:
    print("Map rename skipped (already L_Dellwood_Room14 or source missing)")

print("Done.")
