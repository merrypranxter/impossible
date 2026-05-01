# 03. Inversion Chapel

## Room identity

**ID:** `inversion_chapel`  
**Shader index:** `2`  
**Math trick:** sphere inversion and radial reciprocal scaling  
**Wrong physics:** distant architecture folds into nearby halos and near objects flee outward  
**Mood:** a sacred little spatial ulcer that turns depth inside-out  
**Palette:** ceremonial blue / hot magenta / bone-white / black-violet  
**Tags:** inversion, portal, inside-out, chapel

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
roomInversionChapel()
```

## Expansion prompts

### Code prompt

Build a new variation of `Inversion Chapel` for the `impossible` repo. Keep the dominant trick `sphere inversion and radial reciprocal scaling`, but add one new architectural feature, one new fog behavior, and one new material response. Preserve local-open standalone browser compatibility.

### Image prompt

A raymarched impossible liminal room called `Inversion Chapel`, built from sphere inversion and radial reciprocal scaling, where distant architecture folds into nearby halos and near objects flee outward; a sacred little spatial ulcer that turns depth inside-out; palette of ceremonial blue / hot magenta / bone-white / black-violet; procedural SDF architecture, glowing fog volumes, recursive spatial distortion, shader-art lighting, impossible geometry, navigable haunted math, no technical overlay.

### Video prompt

A slow first-person drift through `Inversion Chapel`. The camera moves as if the room’s physics are slightly miscompiled. Surfaces shimmer with distance-field edge glow; fog exposes hidden coordinate folds; the architecture behaves according to `sphere inversion and radial reciprocal scaling`. The motion should reveal that distant architecture folds into nearby halos and near objects flee outward.
