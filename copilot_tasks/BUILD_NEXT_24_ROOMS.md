# Copilot Task — Build the Next 24 Rooms

Read these first:

- `ontology/WORLD_ONTOLOGY.md`
- `ontology/ROOM_GRAMMAR.md`
- `expansions/ROUND_TWO_ROOM_PACK.json`
- `recipes/`
- `glsl_modules/`

## Goal

Expand the project from 12 rooms to at least 36 rooms.

## Requirements

For each new room:

1. Add a metadata entry to `data/rooms.json`.
2. Add a world note in `worlds/` or `expansions/rooms/`.
3. Add a standalone HTML demo in `standalone/`.
4. Make sure the demo opens directly in a local browser with no build step.
5. Add one reusable GLSL snippet if the room introduces a new technique.
6. Keep the room's central impossible law readable.

## Avoid

- generic noise blobs
- pure screensavers
- random shader effect soup
- impossible geometry with no architectural anchor
- walls that disappear because the SDF got too aggressive
- controls that require a game engine

## Suggested room list

- Möbius Laundromat
- Event Horizon Municipal Pool
- Recursive Motel Ice Machine
- Underwater Church Basement
- Infinite School Hallway of Late Bells
- Planetarium Stomach
- Anti-Perspective Arcade
- Glass Elevator Inside the Wall
- Fungal Boiler Room
- Sigil Drain Atrium
- Black Sun Observatory
- Hyperbolic Fast-Food Playplace
- Mirror Hospital Corridor
- Carpeted Data Center
- Dream Courthouse
- Flooded Escalator Chapel
- Backwards Aquarium
- Gravity Quilt Library
- Impossible Parking Garage
- Soft Boolean Greenhouse
- Tensor Motel Lobby
- Recursive Theater Balcony
- Dead Mall Fountain Engine
- Wormhole Coat Check

## Deliverable style

Prefer many clear small files over one giant file.
This repo is a knowledge organism. Feed it modular organs.
