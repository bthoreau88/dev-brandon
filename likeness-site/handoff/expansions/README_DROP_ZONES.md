# Expansion Drop Zones — OVS Folder Routing

Where generated outputs go, from raw blast to live on the site. Nothing skips QC.

```
input  →  _staging/<module>/<date>_<scene>/  →  [QC GATE]  →  _approved/  →  served
```

## Folders (per docs/12 — Folder Routing)

| Folder | Holds |
|---|---|
| `_staging/image_blaster/` | Raw Image-Blaster outputs: `.spz` `.glb` `.obj` `.mp3` + previews + metadata |
| `_staging/higgsfield/` | Raw campaign stills/video + prompt text per `<campaign>` |
| `_staging/nano_gaussian_splatting/` | UE splat test maps, `.ply` imports, perf notes |
| `_approved/` | Outputs that PASSED the promotion gate, ready to promote |
| `_archive/` | Rejected or obsolete tests (kept, never deleted) |

## Promotion Gate (an output moves on only if it passes ALL)
Story fit · Visual DNA fit · Technical viability · Performance sanity ·
File-organization compliance · Naming-convention compliance · License/source note ·
**Human approval.**

## Naming convention
`<module>_<scene>_<YYYYMMDD>_v<NN>.<ext>` — e.g. `imgblaster_room14_20260614_v01.spz`

## Web hand-off (what actually goes live)
Approved **web** assets are copied to **`likeness-site/public/assets/`** (the folder the
Three.js scene loads from — see the README there). Then tell me the path and I wire it
into `/room-14` (splat via Spark.js, GLB via three GLTFLoader), keeping the card fallback.

## Do-not
- Do not drop raw outputs straight into `public/assets/` — stage and QC first.
- Do not rely on splats for collision; pair with an invisible collider mesh.
- Do not delete rejected tests — move them to `_archive/`.
