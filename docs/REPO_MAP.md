# Repo Map

This repo is a deliberately overgrown shader-art organism.

## Core runtime

- `index.html` is the “just open this shit” version.
- `standalone/*.html` are isolated single-room demos.
- `src/shaders/impossible_rooms.frag` is the shader source extracted from the HTML.
- `src/js/impossible_harness.js` is the reusable WebGL harness skeleton.
- `data/rooms.json` is the metadata spine.

## Concept spine

- `worlds/` explains the 12 starter rooms as spatial spells.
- `recipes/` contains implementation patterns for SDF and raymarch tricks.
- `glsl_modules/` contains copy-paste GLSL snippets.
- `prompts/` turns the same system into image/video/music/code prompt DNA.
- `agents/` tells Copilot how to keep expanding it without flattening the weirdness.

## Intended expansion loop

1. Pick a room idea.
2. Pick a wrong-physics axis: gravity, distance, matter, camera, symbol.
3. Pick an SDF trick: fold, twist, repeat, invert, smooth-min, capsule glyph, torus portal.
4. Write a `worlds/NN_room_name.md`.
5. Add metadata to `data/rooms.json`.
6. Add a shader branch to `mapScene`.
7. Create `standalone/NN_room_name.html`.
8. Screenshot the cursed little goblin.
9. Feed it back into the prompt system.
