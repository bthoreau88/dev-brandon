# Asset Drop Rules

Drop unapproved assets into staging folders only. Do not place raw assets directly into final Unreal or web directories.

## Character Assets
Use `assets/characters/[CHARACTER_ID]/` and include:
- ideation/
- clean_sheet/
- parts/
- views/
- model_exports/
- qc/

## Environment Assets
Use `assets/environments/[LOC_ID]/` and include:
- references/
- greybox/
- meshes/
- materials/
- splats/
- collision/
- qc/

## Naming
Use registry IDs in filenames. Example: `PROP_KEY14_001_clean_sheet_v001.png`.
