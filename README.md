# impossible

**Raymarched worlds with wrong physics.**  
A repo for turning SDFs and raymarching from tidy little shape demos into **haunted navigable math**: recursive rooms, warped gravity, soft-boolean architecture, fog volumes, symbolic portals, and spaces that behave like they were designed by a cursed theorem with interior-decorator trauma.

This repo is meant to live at:

```text
https://github.com/merrypranxter/impossible.git
```

## What this is

This is the starter body for:

```text
raymarched_worlds_with_wrong_physics
```

The goal is not “look, a sphere.”  
The goal is **liminal architecture as shader logic**.

Every room is built around one spatial lie:

| Room | Math trick | Wrong physics |
|---|---|---|
| 01. Folded Vestibule | absolute-value space folding | walls mirror-position themselves before the ray arrives |
| 02. Twist Stairwell | height-dependent rotation twist | stairs torque around the viewer as if gravity has a barber pole fetish |
| 03. Inversion Chapel | sphere inversion and radial reciprocal scaling | distant architecture folds into nearby halos and near objects flee outward |
| 04. Soft Boolean Basilica | smooth union, smooth subtraction, distance blending | columns melt into thresholds without ever becoming liquid |
| 05. Gravity Quilt Hall | ray bending and sinusoidal gravity fields | down is quilted, not fixed; rays sag through invisible mood-fabric |
| 06. Portal Mouth | polar repetition, torus thresholds, radial phase bands | a doorway behaves like a hungry coordinate system |
| 07. Recursive Hotel | nested repetition and fractional cell recursion | rooms contain smaller rooms that contain the hallway you are currently in |
| 08. Moiré Fog Elevator | interference planes plus volumetric density accumulation | fog has scanlines and the elevator goes sideways through pattern pressure |
| 09. Non-Euclidean Atrium | curvature warp, p-mod tiling, arch repetition | parallel corridors gossip until they become one corridor |
| 10. Anti-Physics Pool | signed wave surfaces and inverted reflection planes | water crawls upward and reflections cast shadows first |
| 11. Symbolic Threshold | SDF glyphs made from capsules, rings, and boolean cuts | symbols are structural; meaning has collision detection |
| 12. Hyperbolic Backrooms Seed | folded grid repetition plus exponential depth compression | the hallway is longer on the inside and meaner at the edges |

## Quick start

No build required, because we are not letting npm summon its entire clown circus unless we absolutely have to.

Open this in a browser:

```text
index.html
```

Or open any individual room:

```text
standalone/01_folded_vestibule.html
standalone/02_twist_stairwell.html
...
standalone/12_hyperbolic_backrooms_seed.html
```

Controls:

```text
drag mouse = look
WASD = move
Space/E = float up
Ctrl/Q = sink
arrows = rotate
Shift = faster
1-9 / 0 = jump rooms
P = pause
```

## Repo layout

```text
impossible/
  index.html                         # all-in-one local WebGL2 explorer
  standalone/                        # 12 single-file demos, one per room
  src/shaders/impossible_rooms.frag   # reusable fragment shader source
  src/js/impossible_harness.js        # reusable WebGL harness skeleton
  src/css/impossible.css              # UI styling
  data/rooms.json                     # room metadata
  data/wrong_physics_grammar.json     # generative grammar for expanding the system
  worlds/                            # room lore + implementation briefs
  recipes/                           # practical SDF/raymarch tricks
  glsl_modules/                      # copy-paste GLSL snippets
  shadertoy/                         # Shadertoy porting notes + wrappers
  prompts/                           # image/video/music/code prompting systems
  agents/                            # Copilot custom agent instructions
  docs/                              # repo map, roadmap, principles
```

## Why these foundations

- Shadertoy is still one of the canonical shader-art habitats: its own site frames it as a place to “build and share” shaders and get inspired.
- John C. Hart’s **Sphere Tracing** paper formalizes distance-based ray marching for implicit surfaces: if a function gives distance to geometry, the ray can step forward by that distance without penetrating the surface.
- This repo takes that sober academic skeleton and makes it wear a velvet cape in a hallway that loops into its own spleen.

## What makes a room “impossible”?

A room belongs here when at least one of these is true:

1. **The coordinate system lies.**  
   Fold, twist, repeat, invert, bend, compress, polar-repeat, tile, tunnel.

2. **The physics lies.**  
   Gravity bends sideways, reflections arrive early, fog has topology, symbols cast geometry, doors eat distance.

3. **The architecture is procedural emotion.**  
   The room should feel like a place, not a primitive demo. A math trick becomes a mood, a ritual, a threat, a shrine, a stupid little portal goblin.

## Expansion direction

After these 12 starter rooms:

```text
sdf_liminal_architecture
hyperbolic_backrooms
dream_physics
lovecraft_os
noneuclidean_navigation
symbolic_portal_fields
soft_boolean_cathedrals
volumetric_mood_weather
```

The repo is designed to be fed to Copilot/agents as a knowledge base. The included custom agent can extend the room library, generate new standalone demos, produce Shadertoy-ready fragments, and add new wrong-physics grammars.

## Local notes

This uses **WebGL2** and should run in current Chrome/Firefox/Safari. If an older machine wheezes like a haunted accordion, reduce `MAX_STEPS` in:

```text
src/shaders/impossible_rooms.frag
```

Try `72` or `88` instead of `112`.

## License

MIT. Use it, mutate it, make it cursed.
