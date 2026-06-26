#!/usr/bin/env python3
# validate_ovs_names.py — OVS asset naming check for LIKENESS : THE GAME.
#
# Adapted from the UE 5.8 package validator to the REAL project conventions:
#   - scopes to /Content/OVS_LIKENESS/ only (ignores engine + marketplace content
#     like ParagonMorigesh, FirstPerson template, DemoTemplate)
#   - maps use the UE convention prefix `L_` (not `MAP_`)
#   - includes the full OVS prefix set
#
# Usage (run from the UE project root, e.g. c:\OVS\LIKENESS_THE_GAME\LikenessTheGame):
#     python validate_ovs_names.py
# Exit code 1 if any OVS asset is mis-prefixed. Wire into pre-commit / CI later.

import sys
from pathlib import Path

# Only check our own assets; never flag engine/marketplace/template content.
SCOPE_DIRS = ("Content/OVS_LIKENESS",)

ALLOWED_PREFIXES = (
    "L_",      # levels / maps (UE convention)
    "BP_",     # blueprints
    "BPI_",    # blueprint interfaces
    "DA_",     # data assets
    "DT_",     # data tables
    "WBP_",    # widget blueprints
    "ANIM_",   # animation clips
    "LGT_",    # lighting profiles
    "PCG_",    # PCG graphs
    "NS_",     # niagara systems
    "MRG_",    # movie render graphs
    "M_", "MI_", "T_",          # materials / instances / textures
    "SM_", "SK_",               # static / skeletal meshes
    "GROOM_",                   # grooms
)

EXEMPT_STEMS = ()  # add specific asset stems here if ever needed

def in_scope(p: Path) -> bool:
    posix = p.as_posix()
    return any(("/" + d + "/") in ("/" + posix) or posix.startswith(d + "/") for d in SCOPE_DIRS)

def main() -> int:
    root = Path(".")
    bad = []
    for p in root.rglob("*"):
        if not p.is_file() or p.suffix.lower() not in {".uasset", ".umap"}:
            continue
        if not in_scope(p):
            continue
        if p.stem in EXEMPT_STEMS:
            continue
        if not p.stem.startswith(ALLOWED_PREFIXES):
            bad.append(p.as_posix())

    if bad:
        print("OVS naming warnings (mis-prefixed assets under Content/OVS_LIKENESS):")
        for b in bad:
            print("  " + b)
        return 1
    print("OVS naming check passed (Content/OVS_LIKENESS).")
    return 0

if __name__ == "__main__":
    sys.exit(main())
