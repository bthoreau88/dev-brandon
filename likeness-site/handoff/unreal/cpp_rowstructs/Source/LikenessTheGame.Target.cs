// LikenessTheGame.Target.cs — Game target.
using UnrealBuildTool;
using System.Collections.Generic;

public class LikenessTheGameTarget : TargetRules
{
	public LikenessTheGameTarget(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Game;
		DefaultBuildSettings = BuildSettingsVersion.Latest;
		IncludeOrderVersion = EngineIncludeOrderVersion.Latest;
		ExtraModuleNames.Add("LikenessTheGame");
	}
}
