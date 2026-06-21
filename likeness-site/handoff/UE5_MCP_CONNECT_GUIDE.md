# Connect UE 5.8 <-> Claude Code (Unreal MCP) — step by step

## The picture (what talks to what)
Claude Code (CLI on the PC)  <->  MCP server (small local process)  <->  Unreal MCP
plugin (inside UE 5.8)  <->  the editor. You install a plugin in the UE project and
register its MCP server with Claude Code. Then the agent can read + modify the editor.

## 0 - Prereqs on the PC
- UE 5.8 (installed).
- Node.js LTS  ->  `npm install -g @anthropic-ai/claude-code`
- Python 3.10+ (most bridges use Unreal's Python; some also need a system Python).
- Git + Git LFS.

## 1 - Project folder + names (do this FIRST)
Game repo root (the extracted V004 folder), e.g.:
    C:\OVS\LIKENESS_THE_GAME\
      docs\ agents\ data\ unreal\ web\ assets\ expansions\ qa\ build_notes\
The UE project lives inside unreal\ :
    unreal\LikenessTheGame\LikenessTheGame.uproject
UE project name = LikenessTheGame  (NO spaces/punctuation - UE requirement).

## 2 - Create the UE 5.8 project
Epic Launcher -> UE 5.8 -> New Project -> Games -> Blank (Blueprint; add C++ later) ->
Target Platform: Desktop, Quality: Maximum, Starter Content: OFF.
Name: LikenessTheGame   Location: C:\OVS\LIKENESS_THE_GAME\unreal\

## 3 - Enable the required built-in plugins, then RESTART
Edit -> Plugins, enable:
- Python Editor Script Plugin   (lets the editor run Python - most bridges need it)
- Remote Control API  +  Remote Control Web Interface  (HTTP control of the editor)
- Editor Scripting Utilities
Restart Unreal.

## 4 - Install the Unreal MCP bridge (pick ONE; follow ITS README for exact commands)
Options (each is a UE plugin + a small MCP server):
- VibeUE
- unreal-mcp (chongdashu)
- any "Unreal MCP" that wraps the Remote Control API
General pattern:
  a. Put the plugin in  unreal\LikenessTheGame\Plugins\<Bridge>\  and enable it in UE.
  b. The bridge ships an MCP SERVER (Python or Node). Note its launch command.
  c. The UE plugin opens a local port (often 30010 Remote Control, or a custom socket).

## 5 - Register the bridge with Claude Code
From the game-repo root, either:
    claude mcp add unreal -- <the bridge's server launch command>
or create  .mcp.json  in the root:
    {
      "mcpServers": {
        "unreal": {
          "command": "python",
          "args": ["unreal/LikenessTheGame/Plugins/<Bridge>/server/unreal_mcp_server.py"]
        }
      }
    }
(Use the exact command/path from your bridge's README.)

## 6 - Start order + verify
1. Open UE 5.8 with the project (plugins on, bridge listening).
2. Open Claude Code from  C:\OVS\LIKENESS_THE_GAME\  (the repo root).
3. `claude mcp list`  ->  confirm `unreal` shows connected.
4. Send MESSAGE 1  ->  it should report the bridge connected + capture a viewport shot.
If it can't connect: UE running? plugin enabled? port matches the server? both restarted?

## 7 - OVS naming conventions (tell the agent to use these)
Content root  /Content/OVS_LIKENESS/ :
  00_Core 01_Characters 02_Environments 03_Props 04_Materials 05_Blueprints
  06_UI 07_Audio 08_Cinematics 09_Data 10_Art_Staging
Maps:        L_Dellwood_Room14, L_Dellwood_Hallway, L_Dellwood_Office
Blueprints:  BP_OVS_InteractableBase, BP_OVS_InspectableObject, BP_OVS_RoomStateController,
             BP_OVS_MirrorLagController, BP_OVS_TapePlayer, BP_OVS_DoublePresenceActor,
             BP_OVS_SaveState ; UI: WBP_OVS_InspectUI
DataTables:  DT_AssetManifest, DT_CharacterRegistry, DT_NarrativeBeats, DT_LevelRegistry,
             DT_Mechanics  (imported from /data/*.csv - row name = the registry ID)
Collision:   SM_<name>_COL
Asset prefixes: SM_ (static mesh) SK_ (skeletal) M_ (material) MI_ (mat instance)
             T_ (texture) BP_ (blueprint) WBP_ (widget) L_ (level) DT_ (data table)
             NS_ (Niagara) A_ (audio)

## 8 - Git + LFS BEFORE the engine writes binaries
In the repo root:  git init  ->  git lfs install  ->  add .gitattributes
(*.uasset *.umap *.fbx *.wav *.mp4 *.png via LFS)  +  .gitignore
(Binaries/ Intermediate/ Saved/ DerivedDataCache/ .vs/).  Commit, THEN import assets.

## 9 - Then run the build
MESSAGE 1 (verify) -> MESSAGE 2 (Milestone 01: create UE project skeleton, import
registries as DataTables, foundation commit, QA report) -> MESSAGE 3 (Milestone 02:
Room 14 greybox). One milestone per session; PIE test + screenshot + commit each time.
