// OVSInteractorComponent.cpp
#include "OVSInteractorComponent.h"
#include "LikenessRows.h"

#include "Blueprint/UserWidget.h"
#include "Components/TextBlock.h"
#include "Engine/DataTable.h"
#include "Engine/World.h"
#include "GameFramework/Pawn.h"
#include "GameFramework/PlayerController.h"
#include "TimerManager.h"
#include "CollisionQueryParams.h"

UOVSInteractorComponent::UOVSInteractorComponent()
{
	PrimaryComponentTick.bCanEverTick = false;
}

void UOVSInteractorComponent::BeginPlay()
{
	Super::BeginPlay();

	APawn* OwnerPawn = Cast<APawn>(GetOwner());
	APlayerController* PC = OwnerPawn ? Cast<APlayerController>(OwnerPawn->GetController()) : nullptr;

	if (PC && InspectWidgetClass)
	{
		InspectWidget = CreateWidget<UUserWidget>(PC, InspectWidgetClass);
		if (InspectWidget)
		{
			InspectWidget->AddToViewport();
			ShowInspect(false);
		}
	}

	if (UWorld* W = GetWorld())
	{
		W->GetTimerManager().SetTimer(InspectTimer, this, &UOVSInteractorComponent::DoInspect, InspectInterval, true);
	}
}

void UOVSInteractorComponent::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
	if (UWorld* W = GetWorld())
	{
		W->GetTimerManager().ClearTimer(InspectTimer);
	}
	if (InspectWidget)
	{
		InspectWidget->RemoveFromParent();
		InspectWidget = nullptr;
	}
	Super::EndPlay(EndPlayReason);
}

void UOVSInteractorComponent::DoInspect()
{
	APawn* OwnerPawn = Cast<APawn>(GetOwner());
	APlayerController* PC = OwnerPawn ? Cast<APlayerController>(OwnerPawn->GetController()) : nullptr;
	if (!PC || !GetWorld())
	{
		ShowInspect(false);
		return;
	}

	FVector ViewLoc;
	FRotator ViewRot;
	PC->GetPlayerViewPoint(ViewLoc, ViewRot);
	const FVector End = ViewLoc + ViewRot.Vector() * TraceDistance;

	FCollisionQueryParams Params(SCENE_QUERY_STAT(OVSInspect), /*bTraceComplex=*/false, GetOwner());
	FHitResult Hit;
	const bool bHit = GetWorld()->LineTraceSingleByChannel(Hit, ViewLoc, End, ECC_Visibility, Params);

	AActor* HitActor = bHit ? Hit.GetActor() : nullptr;
	if (!HitActor || !HitActor->ActorHasTag(InteractableTag))
	{
		ShowInspect(false);
		return;
	}

	// The asset_id is the tag that isn't the interactable marker.
	FName AssetId = NAME_None;
	for (const FName& Tag : HitActor->Tags)
	{
		if (Tag != InteractableTag)
		{
			AssetId = Tag;
			break;
		}
	}

	if (AssetId.IsNone() || !AssetManifest)
	{
		ShowInspect(false);
		return;
	}

	const FAssetManifestRow* Row = AssetManifest->FindRow<FAssetManifestRow>(AssetId, TEXT("OVSInspect"));
	if (!Row)
	{
		ShowInspect(false);
		return;
	}

	SetInspectText(FText::FromString(Row->name), FText::FromString(Row->inspect_text));
	ShowInspect(true);
}

void UOVSInteractorComponent::SetInspectText(const FText& NameText, const FText& LineText)
{
	if (!InspectWidget)
	{
		return;
	}

	// Primary: drive the named TextBlocks directly (no UMG variable binding needed).
	if (UTextBlock* TBName = Cast<UTextBlock>(InspectWidget->GetWidgetFromName(TEXT("TXT_Name"))))
	{
		TBName->SetText(NameText);
	}
	if (UTextBlock* TBLine = Cast<UTextBlock>(InspectWidget->GetWidgetFromName(TEXT("TXT_Line"))))
	{
		TBLine->SetText(LineText);
	}

	// Fallback: also set FText variables InspectName / InspectLine if the WBP uses bindings.
	if (FTextProperty* PName = FindFProperty<FTextProperty>(InspectWidget->GetClass(), TEXT("InspectName")))
	{
		PName->SetPropertyValue_InContainer(InspectWidget, NameText);
	}
	if (FTextProperty* PLine = FindFProperty<FTextProperty>(InspectWidget->GetClass(), TEXT("InspectLine")))
	{
		PLine->SetPropertyValue_InContainer(InspectWidget, LineText);
	}
}

void UOVSInteractorComponent::ShowInspect(bool bVisible)
{
	if (InspectWidget)
	{
		InspectWidget->SetVisibility(bVisible ? ESlateVisibility::HitTestInvisible : ESlateVisibility::Hidden);
	}
}
