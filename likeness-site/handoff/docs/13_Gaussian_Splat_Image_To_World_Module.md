# 13 - Gaussian Splat and Image-to-World Optional Module

## Role in LIKENESS

Gaussian splats are an optional visual layer for location memory, haunted-space realism, and rapid environment prototyping. They are not the default gameplay substrate. In LIKENESS, they work best as static mood environments paired with clean collision meshes, authored interaction zones, and data-driven narrative triggers.

## Accepted Inputs

- `.spz` from image-to-world tools.
- `.ply` splats from scans or generators.
- `.glb` or `.obj` dynamic object meshes.
- `.mp3` ambience or SFX placeholders.
- Preview screenshots.
- Metadata JSON or markdown notes.

## Unreal Path

1. Keep the canonical Unreal game in authored UE maps.
2. Create separate test maps named `LVL_TEST_SPLAT_<SCENE>`.
3. Import PLY splats through Nano Gaussian Splatting only after the plugin is isolated in a test branch.
4. Use invisible collision meshes or authored blocking volumes.
5. Never rely on splat pixels for collisions, navmesh, or interaction traces.
6. Test with target camera paths: third-person exploration, over-the-shoulder, static witness camera, and inspection close-up.
7. Record FPS, VRAM behavior, visible ghosting, TSR artifacts, and LOD/culling behavior.

## Three.js / Web Companion Path

1. Keep the Three.js companion lightweight and route-based.
2. Use splats for atmosphere, interactive memory dioramas, or web exploration scenes.
3. Use mesh colliders for all interactions.
4. Store splat manifest metadata separately from React state.
5. Keep fallback image/card mode for phones and low-memory devices.

## Optimization Rules

- Slice large splats into tiles or scene zones.
- Delete nearly transparent splats if they cause ghosting.
- Use authored occluder/collision meshes.
- Keep dynamic props as meshes, not splats.
- Build lowest viable test first.
- Never ship a splat level without fallback screenshots or baked panorama alternative.

## LIKENESS Scene Candidates

| Scene | Best Use | Notes |
|---|---|---|
| Dellwood exterior | Web mood diorama | Good for rainy motel memory space. |
| Room 14 alternate memory | Unreal test only | Must not replace canonical room layout. |
| Bathroom mirror | Experimental | Splat can hold environment, mirror logic remains authored. |
| Hallway five/six doors | Strong candidate | Static haunted corridor fits splat mood. |
| Parking lot at 3:14 AM | Strong candidate | Good for atmospheric web exploration. |
| Family-photo wall | Weak candidate | Better authored by hand for exact props. |

## Agent Acceptance Prompt

When using image-to-world or splat tools, the agent must answer:

1. What was the input image?
2. What files were produced?
3. Which files are splats, meshes, sound, or metadata?
4. What belongs in Unreal, Three.js, Blender, or archive?
5. What is missing for collision?
6. What is missing for lighting?
7. What is the file-size and performance risk?
8. What should be manually rebuilt before production?
