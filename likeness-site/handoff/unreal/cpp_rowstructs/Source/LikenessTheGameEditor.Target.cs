// LikenessTheGameEditor.Target.cs — Editor target.
using UnrealBuildTool;
using System.Collections.Generic;

public class LikenessTheGameEditorTarget : TargetRules
{
	public LikenessTheGameEditorTarget(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Editor;
		DefaultBuildSettings = BuildSettingsVersion.Latest;
		IncludeOrderVersion = EngineIncludeOrderVersion.Latest;
		ExtraModuleNames.Add("LikenessTheGame");
	}
}
