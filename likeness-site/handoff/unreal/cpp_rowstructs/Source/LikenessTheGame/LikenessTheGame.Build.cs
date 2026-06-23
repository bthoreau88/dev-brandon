// LikenessTheGame.Build.cs — primary game module for LIKENESS : THE GAME.
// Compiles the DataTable row structs (Public/LikenessRows.h) and the data-driven
// inspect component (OVSInteractorComponent). UMG/Slate are needed for the widget.

using UnrealBuildTool;

public class LikenessTheGame : ModuleRules
{
	public LikenessTheGame(ReadOnlyTargetRules Target) : base(Target)
	{
		PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;

		PublicDependencyModuleNames.AddRange(new string[]
		{
			"Core",
			"CoreUObject",
			"Engine",
			"UMG",
			"Slate",
			"SlateCore"
		});

		PrivateDependencyModuleNames.AddRange(new string[] { });
	}
}
