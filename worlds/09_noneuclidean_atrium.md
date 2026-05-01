# 09. Non-Euclidean Atrium

## Room identity

**ID:** `noneuclidean_atrium`  
**Shader index:** `8`  
**Math trick:** curvature warp, p-mod tiling, arch repetition  
**Wrong physics:** parallel corridors gossip until they become one corridor  
**Mood:** atrium with too many valid vanishing points  
**Palette:** turquoise marble / pink neon / smoky indigo / white gold  
**Tags:** non-euclidean, curvature, atrium, arches

## What the viewer should feel

This room should not feel like a demo object floating in a void. It should feel like the camera has entered a place with a local law. The law is simple enough to recognize but wrong enough to make the nervous system itch.

The viewer should understand the room through motion:
- moving left/right reveals the lie
- moving forward deepens the lie
- looking around makes the architecture confess what math built it

## Implementation notes

Use the math trick as the room’s dominant spatial grammar.

Recommended SDF vocabulary:

```glsl
sdBox()
sdRoundBox()
sdSphere()
sdTorus()
sdCapsule()
opRep()
opSmin()
rot()
twistY()
sphereInvert()
```

The shader branch for this room lives inside:

```text
src/shaders/impossible_rooms.frag
```

Look for:

```glsl
roomNon-EuclideanAtrium()
```

## Expansion prompts

### Code prompt

Build a new variation of `Non-Euclidean Atrium` for the `impossible` repo. Keep the dominant trick `curvature warp, p-mod tiling, arch repetition`, but add one new architectural feature, one new fog behavior, and one new material response. Preserve local-open standalone browser compatibility.

### Image prompt

A raymarched impossible liminal room called `Non-Euclidean Atrium`, built from curvature warp, p-mod tiling, arch repetition, where parallel corridors gossip until they become one corridor; atrium with too many valid vanishing points; palette of turquoise marble / pink neon / smoky indigo / white gold; procedural SDF architecture, glowing fog volumes, recursive spatial distortion, shader-art lighting, impossible geometry, navigable haunted math, no technical overlay.

### Video prompt

A slow first-person drift through `Non-Euclidean Atrium`. The camera moves as if the room’s physics are slightly miscompiled. Surfaces shimmer with distance-field edge glow; fog exposes hidden coordinate folds; the architecture behaves according to `curvature warp, p-mod tiling, arch repetition`. The motion should reveal that parallel corridors gossip until they become one corridor.
