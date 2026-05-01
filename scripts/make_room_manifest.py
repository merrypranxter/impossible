#!/usr/bin/env python3
"""Print a readable room manifest from data/rooms.json."""

from pathlib import Path
import json

data = json.loads(Path("data/rooms.json").read_text())

for r in data:
    print(f"{r['shader_room_index']+1:02d}. {r['title']}")
    print(f"    trick: {r['math_trick']}")
    print(f"    wrong: {r['wrong_physics']}")
    print(f"    tags:  {', '.join(r['tags'])}")
    print()
