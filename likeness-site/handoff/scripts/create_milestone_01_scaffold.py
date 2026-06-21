#!/usr/bin/env python3
"""Create safe LIKENESS Milestone 01 folders without deleting existing files."""
from pathlib import Path
ROOT = Path.cwd()
FOLDERS = ['docs','agents','data','unreal','web','assets','expansions','qa','build_notes','qa/milestone_01','build_notes/milestone_01','unreal/milestone_01','web/milestone_01_starter']
for folder in FOLDERS:
    path = ROOT / folder
    path.mkdir(parents=True, exist_ok=True)
    print(f'OK {path}')
print('Milestone 01 scaffold check complete. No files deleted.')
