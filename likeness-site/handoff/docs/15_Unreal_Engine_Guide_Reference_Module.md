# 15 - Unreal Engine Guide Reference Expansion

## Role

The Unreal Engine Guide repository is treated as a learning/reference index. It helps the LIKENESS team identify relevant systems, but it does not override Epic documentation, engine behavior, or project-specific architecture.

## LIKENESS Mapping

| Guide Topic | LIKENESS Use |
|---|---|
| Blueprint Visual Scripting | Interaction triggers, quick prototypes, room-state logic. |
| C++ | Stable gameplay systems, save system, interaction interfaces, data parsing. |
| Lumen | Mood lighting, tungsten/teal conflict, indirect light tests. |
| Nanite | High-fidelity props and geometry where appropriate. |
| Niagara | Dust, rain, breath, memory distortion, subtle mirror particles. |
| PCG | Motel exterior clutter, hallway variation, environmental dressing. |
| MetaHuman | Possible character prototype path only after identity lock is stable. |
| Python | Batch import, registry validation, editor automation. |
| Photogrammetry / LiDAR | Optional location capture or scan-based environment reference. |
| C++ / Visual Studio | Build reliability and source-control discipline. |

## Weekly Study Sprint Template

1. Pick one feature tied to a production need.
2. Create one small test map or sandbox asset.
3. Document what worked and failed.
4. Add an implementation decision to the production bible.
5. Commit the sandbox separately from production content.

## Example Sprints

- Sprint 01: Interaction interface and inspectable object pickup.
- Sprint 02: Lumen motel lighting study.
- Sprint 03: Niagara dust/rain/breath layer.
- Sprint 04: PCG hallway clutter generator.
- Sprint 05: Python asset registry validator.
- Sprint 06: Save/load room-state prototype.
- Sprint 07: Camera witness mode and inspection camera.
- Sprint 08: Performance pass and stat captures.

## Rule

A learning item becomes part of LIKENESS only when it solves a named production problem.
