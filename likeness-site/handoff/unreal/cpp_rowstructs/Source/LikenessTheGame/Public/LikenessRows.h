// LikenessRows.h — DataTable row structs for LIKENESS : THE GAME
// One USTRUCT per canonical registry in /data. Property names match the CSV
// column headers EXACTLY (the importer binds columns to UPROPERTYs by name).
//
// IMPORTANT CONTRACT:
//  - The FIRST column of every CSV (e.g. character_id) is the DataTable Row Name.
//    It is intentionally NOT a property here — the importer consumes it as the key.
//  - Every other column has a matching FString property below.
//  - Do NOT rename a property without renaming the CSV column AND the web
//    registry (src/lib/registry.ts). IDs are shared web<->game. Keep them matched.
//
// Canonical IDs live in /data/*.csv. Never invent IDs in engine.

#pragma once

#include "CoreMinimal.h"
#include "Engine/DataTable.h"
#include "LikenessRows.generated.h"

// character_registry.csv  -> DT_CharacterRegistry
// key column: character_id  (CHR_THOREAU_001, CHR_DRYA_001, CHR_DARK_THOREAU_001)
USTRUCT(BlueprintType)
struct FCharacterRow : public FTableRowBase
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Character")
	FString name;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Character")
	FString role;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Character")
	FString status;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Character")
	FString identity_lock;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Character")
	FString reference_folder;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Character")
	FString model_folder;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Character")
	FString qc_notes;
};

// level_registry.csv  -> DT_LevelRegistry
// key column: level_id  (LOC_DELLWOOD_ROOM14_001, LOC_DELLWOOD_HALLWAY_001, LOC_DELLWOOD_OFFICE_001)
USTRUCT(BlueprintType)
struct FLevelRow : public FTableRowBase
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Level")
	FString name;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Level")
	FString status;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Level")
	FString unreal_map;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Level")
	FString web_route;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Level")
	FString story_function;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Level")
	FString required_mechanics;
};

// asset_manifest.csv  -> DT_AssetManifest
// key column: asset_id  (PROP_KEY14_001, PROP_LOCKET_001, ...)
USTRUCT(BlueprintType)
struct FAssetManifestRow : public FTableRowBase
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Asset")
	FString type;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Asset")
	FString name;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Asset")
	FString status;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Asset")
	FString source;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Asset")
	FString owner;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Asset")
	FString engine_path;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Asset")
	FString web_path;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Asset")
	FString dependencies;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Asset")
	FString qc_notes;
};

// mechanics_registry.csv  -> DT_MechanicsRegistry
// key column: mechanic_id  (MECH_INSPECT_001, MECH_MIRROR_LAG_001, MECH_ROOM_STATE_001, ...)
USTRUCT(BlueprintType)
struct FMechanicRow : public FTableRowBase
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Mechanic")
	FString name;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Mechanic")
	FString status;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Mechanic")
	FString unreal_class;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Mechanic")
	FString web_component;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Mechanic")
	FString description;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Mechanic")
	FString qa_notes;
};

// narrative_beats.csv  -> DT_NarrativeBeats
// key column: beat_id  (BEAT_ARGUMENT_RESIDUE_001, ...)
USTRUCT(BlueprintType)
struct FNarrativeBeatRow : public FTableRowBase
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Beat")
	FString name;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Beat")
	FString status;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Beat")
	FString location_id;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Beat")
	FString characters;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Beat")
	FString trigger;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Beat")
	FString resulting_room_state;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Beat")
	FString web_unlock;
};

// prompt_registry.csv  -> DT_PromptRegistry
// key column: prompt_id
USTRUCT(BlueprintType)
struct FPromptRow : public FTableRowBase
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Prompt")
	FString purpose;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Prompt")
	FString target;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Prompt")
	FString status;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Prompt")
	FString source_doc;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Prompt")
	FString notes;
};

// expansion_registry.csv  -> DT_ExpansionRegistry
// key column: module_id
USTRUCT(BlueprintType)
struct FExpansionRow : public FTableRowBase
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Expansion")
	FString module_name;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Expansion")
	FString source_url;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Expansion")
	FString category;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Expansion")
	FString primary_use;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Expansion")
	FString status;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Expansion")
	FString allowed_outputs;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Expansion")
	FString promotion_gate;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Expansion")
	FString notes;
};

// blender_asset_workflow_registry.csv  -> DT_BlenderWorkflow
// key column: workflow_id
USTRUCT(BlueprintType)
struct FBlenderWorkflowRow : public FTableRowBase
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Blender")
	FString workflow_name;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Blender")
	FString use_case;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Blender")
	FString source_inputs;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Blender")
	FString output_formats;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Blender")
	FString approval_gate;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Blender")
	FString notes;
};

// milestone_01_task_board.csv  -> DT_Milestone01Tasks
// key column: id
USTRUCT(BlueprintType)
struct FMilestoneTaskRow : public FTableRowBase
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Milestone")
	FString track;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Milestone")
	FString task;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Milestone")
	FString status;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Milestone")
	FString priority;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "LIKENESS|Milestone")
	FString acceptance;
};
