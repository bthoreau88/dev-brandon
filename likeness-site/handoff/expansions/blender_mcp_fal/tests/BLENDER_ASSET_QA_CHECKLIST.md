# Blender Asset QA Checklist

Use this before promoting a Blender-generated or Blender-repaired asset into Unreal or Three.js.

## Mesh
- [ ] Scale is correct.
- [ ] Origin/pivot is intentional.
- [ ] Normals face outward.
- [ ] No broken loose garbage geometry.
- [ ] Retopology acceptable for target use.
- [ ] LOD/proxy considered where needed.

## UV / Materials
- [ ] UVs are clean.
- [ ] Texture maps are named and linked.
- [ ] BaseColor/Normal/Roughness/AO/Metallic maps included where needed.
- [ ] Materials do not drift from LIKENESS style.
- [ ] No unwanted plastic/over-gloss look.

## Export
- [ ] FBX/GLB exported to staging.
- [ ] Collision proxy included if needed.
- [ ] Web lightweight version prepared if needed.
- [ ] Clean import tested in empty scene.
- [ ] Screenshot proof saved.

## Registry
- [ ] Asset manifest updated.
- [ ] Blender workflow registry updated.
- [ ] Prompt registry updated when reusable prompt created.
- [ ] Human review status marked.
