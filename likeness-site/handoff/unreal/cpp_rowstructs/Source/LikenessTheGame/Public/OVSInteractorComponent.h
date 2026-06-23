// OVSInteractorComponent.h — data-driven inspect for LIKENESS : THE GAME.
//
// Drop this component on the player pawn. Each tick-interval it line-traces from
// the player's view, and if it hits an actor tagged OVS_Interactable it reads that
// actor's other tag as an asset_id, looks the row up in the AssetManifest DataTable,
// and shows the inspect widget with the row's `name` + `inspect_text`.
//
// No Blueprint graph wiring required — set InspectWidgetClass + AssetManifest in the
// component's Details panel and it runs itself.

#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "OVSInteractorComponent.generated.h"

class UUserWidget;
class UDataTable;

UCLASS(ClassGroup = (OVS), meta = (BlueprintSpawnableComponent))
class LIKENESSTHEGAME_API UOVSInteractorComponent : public UActorComponent
{
	GENERATED_BODY()

public:
	UOVSInteractorComponent();

	// The inspect widget to show. Set to WBP_OVS_InspectUI.
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "OVS|Inspect")
	TSubclassOf<UUserWidget> InspectWidgetClass;

	// The registry DataTable to read names/inspect lines from. Set to DT_AssetManifest.
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "OVS|Inspect")
	UDataTable* AssetManifest = nullptr;

	// Reach of the inspect trace, in cm.
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "OVS|Inspect")
	float TraceDistance = 250.f;

	// How often (seconds) the inspect trace runs.
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "OVS|Inspect")
	float InspectInterval = 0.1f;

	// The tag that marks an actor as inspectable. The actor's OTHER tag is the asset_id.
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "OVS|Inspect")
	FName InteractableTag = TEXT("OVS_Interactable");

protected:
	virtual void BeginPlay() override;
	virtual void EndPlay(const EEndPlayReason::Type EndPlayReason) override;

private:
	UPROPERTY(Transient)
	UUserWidget* InspectWidget = nullptr;

	FTimerHandle InspectTimer;

	void DoInspect();
	void SetInspectText(const FText& NameText, const FText& LineText);
	void ShowInspect(bool bVisible);
};
