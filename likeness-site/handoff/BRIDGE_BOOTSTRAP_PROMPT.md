# Bridge Bootstrap — let the PC's Claude Code build VibeUE for UE 5.8

Paste this into the Claude Code session running ON THE PC, from the game-project root,
BEFORE the MCP bridge exists. It uses terminal + file tools only (no editor connection
needed to compile a plugin). Make sure VS 2022 + "Game development with C++" is installed
and the Unreal editor is CLOSED during the build.

---

Set up the VibeUE Unreal MCP bridge from source for Unreal Engine 5.8. You do NOT have the
Unreal MCP connection yet - that is what we are building - so use your terminal and file
tools only; do not try to drive the editor.

Context: the project root is this folder; the UE 5.8 project is at
unreal/LikenessTheGame/LikenessTheGame.uproject (adjust if the path differs). I have Visual
Studio 2022 with the C++ game-dev workload. VibeUE's Fab listing only supports up to 5.6,
so we are compiling from GitHub source against 5.8.

Do this, showing your work and pausing if you need me to close the editor:
1. Confirm the Unreal editor is closed (the build needs it closed).
2. git clone https://github.com/kevinpbuckley/VibeUE into <project>/Plugins/VibeUE so that
   <project>/Plugins/VibeUE/VibeUE.uplugin exists.
3. Read VibeUE's README and the .uplugin. Identify (a) the C++ module(s), (b) the MCP
   SERVER component (Python or Node) and its exact launch command, (c) any config the
   Claude Code client needs.
4. If the .uplugin pins EngineVersion or has an allowlist excluding 5.8, adjust it to allow 5.8.
5. Regenerate Visual Studio project files for the .uproject, then compile the plugin against
   UE 5.8 with UnrealBuildTool / the engine Build.bat (or build the generated .sln via
   MSBuild). Iterate and FIX every 5.8 API compile error until it builds clean. Show me each
   error and your fix.
6. Set up the MCP server: install its Python/Node dependencies (give the exact commands).
7. Register the MCP server with Claude Code: run
   `claude mcp add unreal -- <server launch command>`  (or create a .mcp.json in the project
   root) per the README.
8. Report: what you cloned/edited/built, the exact server command, the registration/.mcp.json,
   any errors you could NOT resolve, and the exact steps for me to verify (reopen UE 5.8, then
   `claude mcp list` should show `unreal` connected, then capture a viewport screenshot).

Do not modify game content or the registries - only the plugin and the MCP config.

---

## If you'd rather do it by hand (same result)
1. Close UE. Clone the repo into  ...\LikenessTheGame\Plugins\VibeUE\.
2. Open the plugin's .uplugin; if "EngineVersion" is set, remove it (source plugins compile
   against whatever engine you build with).
3. Right-click LikenessTheGame.uproject -> Generate Visual Studio project files.
4. Open the .sln in VS 2022 -> set config to "Development Editor" + Win64 -> Build.
   (Or just reopen the .uproject and click Yes to "rebuild missing modules".)
5. Fix compile errors (5.8 API drift) -> rebuild. Paste any you can't solve to Claude Code.
6. Start VibeUE's MCP server per its README; `claude mcp add unreal -- <cmd>`.
7. Reopen UE 5.8 -> `claude mcp list` shows connected -> run MESSAGE 1.
