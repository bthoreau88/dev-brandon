# Unreal MCP bridge — picks, the UE 5.8 problem, and install methods

## Reality check (read first)
A Claude Code session in the CLOUD cannot connect to your local Unreal. The MCP bridge
links *your PC's* Claude Code <-> *your PC's* Unreal over localhost. The build agent is a
Claude Code session running ON THE PC. The cloud session (web companion) only advises.

## Free bridges on Fab (from search)
- VibeUE (Buckley603) - Free  [GitHub: kevinpbuckley/VibeUE]
- Unreal-MCPython (GenOrca) - Free
- GameWave Unreal MCP (Friday UE5) - Free
Paid but notable: Unreal MCP Server (StraySpark), UEHive, Eden Unreal LLM, MCP Python Bridge.

## #1 reason a Fab MCP plugin won't install: ENGINE VERSION
Fab plugins attach only to the UE versions they list. Most MCP plugins target 5.3-5.6.
UE 5.8 is bleeding-edge; many have NO 5.8 build yet -> Fab install fails / greyed.
ALWAYS check the plugin's "Supported versions" on its Fab page first.

## Recommended fix: build the game on UE 5.6
Install UE 5.6 via Epic Launcher next to 5.8 and make the game project a 5.6 project.
5.6 is fully featured (MetaHuman, Lumen, Nanite) AND supported by nearly every MCP plugin.
This avoids source-compiling and saves days. (5.8 -> 5.6 is the pragmatic move.)

## If you must stay on 5.8: build VibeUE from source
1. Close UE.
2. git clone https://github.com/kevinpbuckley/VibeUE  into
   ...\LikenessTheGame\Plugins\VibeUE\   (so Plugins\VibeUE\VibeUE.uplugin exists).
3. Install Visual Studio 2022 + "Game development with C++" workload.
4. Right-click the .uproject -> Generate Visual Studio project files.
5. Reopen the .uproject -> when asked to rebuild missing modules, click Yes.
6. Follow VibeUE's README for its MCP server + Claude Code registration.

## Prefer a no-compile bridge when possible
A pure-Python bridge over UE's built-in Remote Control API needs no C++ build:
- Enable built-in plugins: Python Editor Script Plugin + Remote Control API.
- A Python MCP server talks to UE on its Remote Control port (e.g. 30010).
- No Visual Studio compile required -> most robust across engine versions.

## Decision order
1. Check the bridge's supported UE versions.
2. If it supports your engine + is Python/Remote-Control based -> install, no compile.
3. Else build from source (needs VS2022).
4. Else switch the game project to UE 5.6 (recommended) and use any 5.6 bridge.

## After it connects (on the PC)
claude mcp list -> bridge "connected" -> send MESSAGE 1 (verify + screenshot) ->
MESSAGE 2 (Milestone 01) -> MESSAGE 3 (Room 14 greybox). One milestone per session.
