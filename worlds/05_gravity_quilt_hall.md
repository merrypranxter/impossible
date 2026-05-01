# 05. Gravity Quilt Hall

## Room identity

**ID:** `gravity_quilt_hall`  
**Shader index:** `4`  
**Math trick:** ray bending and sinusoidal gravity fields  
**Wrong physics:** down is quilted, not fixed; rays sag through invisible mood-fabric  
**Mood:** a corridor where the floor has weather instead of hardness  
**Palette:** red-orange / blue-violet / pollen yellow / storm-cyan  
**Tags:** ray-bend, gravity, field, corridor

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
roomGravityQuiltHall()
```

## Expansion prompts

### Code prompt

Build a new variation of `Gravity Quilt Hall` for the `impossible` repo. Keep the dominant trick `ray bending and sinusoidal gravity fields`, but add one new architectural feature, one new fog behavior, and one new material response. Preserve local-open standalone browser compatibility.

### Image prompt

A raymarched impossible liminal room called `Gravity Quilt Hall`, built from ray bending and sinusoidal gravity fields, where down is quilted, not fixed; rays sag through invisible mood-fabric; a corridor where the floor has weather instead of hardness; palette of red-orange / blue-violet / pollen yellow / storm-cyan; procedural SDF architecture, glowing fog volumes, recursive spatial distortion, shader-art lighting, impossible geometry, navigable haunted math, no technical overlay.

### Video prompt

A slow first-person drift through `Gravity Quilt Hall`. The camera moves as if the room’s physics are slightly miscompiled. Surfaces shimmer with distance-field edge glow; fog exposes hidden coordinate folds; the architecture behaves according to `ray bending and sinusoidal gravity fields`. The motion should reveal that down is quilted, not fixed; rays sag through invisible mood-fabric.
