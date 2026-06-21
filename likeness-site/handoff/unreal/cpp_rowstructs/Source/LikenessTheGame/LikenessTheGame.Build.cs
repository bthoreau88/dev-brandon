// LikenessTheGame.Build.cs — primary game module for LIKENESS : THE GAME.
// Minimal: this module exists to compile the DataTable row structs in
// Public/LikenessRows.h. Gameplay code can be added here later.

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
			"Engine"
		});

		PrivateDependencyModuleNames.AddRange(new string[] { });
	}
}
