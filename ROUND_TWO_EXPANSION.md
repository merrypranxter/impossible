# Round Two Expansion Pack — Wrong Physics Becomes a World System

This pass adds the material that was missing from the first repo skeleton: an extensible ontology, room grammar, camera language, fog stack, portal logic, debugging rituals, and a batch of new impossible-room seeds.

The first pass answered: **what is this repo?**  
This pass answers: **how does it keep producing haunted navigable math without turning into random shader glitter soup?**

## New folders

| Folder | Purpose |
|---|---|
| `expansions/` | New room packs and future repo branches |
| `ontology/` | Conceptual taxonomy for impossible architecture |
| `camera/` | Navigation and viewpoint rules |
| `lighting/` | Nonphysical lighting systems |
| `materials/` | Wrong-material recipes |
| `fog/` | Volumetric atmosphere logic |
| `portals/` | Portal and threshold design |
| `debugging/` | Shader troubleshooting + visual diagnostics |
| `tests/` | Pseudo-tests and browser checks |
| `copilot_tasks/` | Concrete instructions for repo growth |
| `prompt_packs/` | Visual/song/video prompt add-ons |
| `examples/` | Extra standalone sketches and mini-scenes |
| `field_notes/` | Haunted design notes, warnings, and style rituals |

## Round Two philosophy

A raymarched impossible world needs four separate systems:

1. **Distance logic** — what surfaces exist?
2. **Domain logic** — what happened to space before surfaces were measured?
3. **Perceptual logic** — what does the camera think it is doing?
4. **Mythic logic** — why does this room feel like it remembers you?

Most bad SDF worlds fail because they only do #1.
This repo should always do all four.

## Use this pack

Copy the new folders into the repo root, then ask Copilot:

> Read `ROUND_TWO_EXPANSION.md`, `ontology/WORLD_ONTOLOGY.md`, and `copilot_tasks/BUILD_NEXT_24_ROOMS.md`. Expand the repo into a large wrong-physics raymarching world library. Preserve standalone local-browser usage.
