// OVSRoomStateSubsystem.cpp
#include "OVSRoomStateSubsystem.h"
#include "Engine/World.h"

void UOVSRoomStateSubsystem::SetRoomState(EOVSRoomState NewState)
{
	if (NewState == CurrentState)
	{
		return;
	}

	const EOVSRoomState OldState = CurrentState;
	CurrentState = NewState;

	UE_LOG(LogTemp, Log, TEXT("OVSRoomState: %d -> %d"), (int32)OldState, (int32)NewState);
	OnRoomStateChanged.Broadcast(OldState, NewState);
}

UOVSRoomStateSubsystem* UOVSRoomStateSubsystem::Get(const UObject* WorldContextObject)
{
	if (!WorldContextObject)
	{
		return nullptr;
	}
	if (const UWorld* World = WorldContextObject->GetWorld())
	{
		return World->GetSubsystem<UOVSRoomStateSubsystem>();
	}
	return nullptr;
}
