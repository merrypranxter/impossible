# 04. Soft Boolean Basilica

## Room identity

**ID:** `soft_boolean_basilica`  
**Shader index:** `3`  
**Math trick:** smooth union, smooth subtraction, distance blending  
**Wrong physics:** columns melt into thresholds without ever becoming liquid  
**Mood:** architecture grown from gum, bone, and procedural devotion  
**Palette:** mint phosphor / peach / deep teal / cream-glow  
**Tags:** smooth-min, boolean, architecture, blend

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
roomSoftBooleanBasilica()
```

## Expansion prompts

### Code prompt

Build a new variation of `Soft Boolean Basilica` for the `impossible` repo. Keep the dominant trick `smooth union, smooth subtraction, distance blending`, but add one new architectural feature, one new fog behavior, and one new material response. Preserve local-open standalone browser compatibility.

### Image prompt

A raymarched impossible liminal room called `Soft Boolean Basilica`, built from smooth union, smooth subtraction, distance blending, where columns melt into thresholds without ever becoming liquid; architecture grown from gum, bone, and procedural devotion; palette of mint phosphor / peach / deep teal / cream-glow; procedural SDF architecture, glowing fog volumes, recursive spatial distortion, shader-art lighting, impossible geometry, navigable haunted math, no technical overlay.

### Video prompt

A slow first-person drift through `Soft Boolean Basilica`. The camera moves as if the room’s physics are slightly miscompiled. Surfaces shimmer with distance-field edge glow; fog exposes hidden coordinate folds; the architecture behaves according to `smooth union, smooth subtraction, distance blending`. The motion should reveal that columns melt into thresholds without ever becoming liquid.
