# Expansion Source Matrix - LIKENESS : THE GAME V002

These workflows are added as optional expansion modules only. They enhance the existing OVS production pipeline without replacing the Unreal vertical-slice foundation, the 4-step reference system, or the Three.js/Fable companion architecture.

| Module | Source | Use In LIKENESS | Status | Gate |
|---|---|---|---|---|
| Image-Blaster | https://github.com/bthoreau88/image-blaster | Rapid environmental prototyping, splat + mesh + ambient SFX experiments from a single image | Optional | Never replaces authored hero level design. Must pass scale, collision, mood, and optimization QC. |
| Nano Gaussian Splatting | https://github.com/TimChen1383/NanoGaussianSplatting | Unreal splat rendering test layer for captured/generated static environments | Optional / Technical Pilot | Use only for static environment visuals. Pair with invisible collision mesh. Slice large splats. Validate FPS and ghosting. |
| Higgsfield Claude Skills | https://github.com/AKCodez/higgsfield-claude-skills | Campaign-video, lookbook, mood, reference-video, social-hook expansion workflow | Optional / Marketing + Reference | Keep OVS visual DNA. Do not allow UGC defaults to overwrite LIKENESS tone. Confirmation before generation. |
| Unreal Engine Guide | https://github.com/mikeroyal/Unreal-Engine-Guide | Learning reference and checklist companion for UE concepts, tools, rendering, PCG, VFX, C++, Blueprint, platform notes | Reference Only | Do not clone as source code dependency. Use as study and checklist index. |

## Source Notes

- Image-Blaster describes an image-to-world Claude skillset that creates GLB/OBJ dynamic object models, SPZ Gaussian splats for static environments, and MP3 ambient/SFX outputs from an input image. It uses World Labs Marble, FAL/Hunyuan 3D, image cleanup/editing models, and ElevenLabs SFX.
- Nano Gaussian Splatting supports UE5.6 and UE5.7, imports PLY files into Gaussian Splat Assets, and uses Nanite-style LOD clusters, screen-space error selection, splat compaction, and GPU sorting techniques for large splat rendering.
- Higgsfield Claude Skills provides 19 Claude Code slash-command skills with Playwright automation, including cinematic, 3D CGI, music video, social hook, brand story, and fashion lookbook prompt workflows.
- Unreal Engine Guide is an external reference index for Unreal Engine tools, learning resources, Blueprint, Lumen, Nanite, PCG, Niagara, MetaHuman, C++, Python, and related developer topics.
