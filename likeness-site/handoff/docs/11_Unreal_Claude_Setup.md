# Unreal + Agent Setup Notes

## Baseline
- Unreal Engine 5.7 project.
- Claude Code or Codex opened from the project root.
- Git initialized before agent edits.
- MCP/editor bridge such as UnrealClaude and/or VibeUE configured.
- Restart Unreal and the agent after plugin/MCP install.

## Recommended Session Pattern
1. Open Unreal project.
2. Open agent in project root.
3. Ask agent to inspect README_START_HERE.md and AGENTS.md.
4. Ask agent to verify MCP/editor connection.
5. Ask agent to capture a viewport screenshot.
6. Give one milestone task only.
7. Let agent implement.
8. Run play-in-editor or build test.
9. Capture screenshot proof.
10. Commit stable state.

## Commit Pattern
- `chore: initialize foundation`
- `feat: add room 14 greybox`
- `feat: add inspectable object system`
- `feat: add mirror lag prototype`
- `feat: add tape contradiction prototype`
- `fix: repair room state collision`
- `docs: update build notes`

## Red Flags
- Agent edits without reading docs.
- Agent skips Git.
- Agent creates assets with random names.
- Agent adds story strings inside Blueprints.
- Agent says a feature works without screenshot or playtest proof.
- Agent does broad multi-system refactors before the vertical slice is stable.
