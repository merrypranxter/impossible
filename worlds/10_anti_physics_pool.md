# 10. Anti-Physics Pool

## Room identity

**ID:** `anti_physics_pool`  
**Shader index:** `9`  
**Math trick:** signed wave surfaces and inverted reflection planes  
**Wrong physics:** water crawls upward and reflections cast shadows first  
**Mood:** hotel pool after the laws of motion got high and quit  
**Palette:** chlorine cyan / pool tile blue / sunset magenta / black wet stone  
**Tags:** water, reflection, inversion, wave-sdf

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
roomAnti-PhysicsPool()
```

## Expansion prompts

### Code prompt

Build a new variation of `Anti-Physics Pool` for the `impossible` repo. Keep the dominant trick `signed wave surfaces and inverted reflection planes`, but add one new architectural feature, one new fog behavior, and one new material response. Preserve local-open standalone browser compatibility.

### Image prompt

A raymarched impossible liminal room called `Anti-Physics Pool`, built from signed wave surfaces and inverted reflection planes, where water crawls upward and reflections cast shadows first; hotel pool after the laws of motion got high and quit; palette of chlorine cyan / pool tile blue / sunset magenta / black wet stone; procedural SDF architecture, glowing fog volumes, recursive spatial distortion, shader-art lighting, impossible geometry, navigable haunted math, no technical overlay.

### Video prompt

A slow first-person drift through `Anti-Physics Pool`. The camera moves as if the room’s physics are slightly miscompiled. Surfaces shimmer with distance-field edge glow; fog exposes hidden coordinate folds; the architecture behaves according to `signed wave surfaces and inverted reflection planes`. The motion should reveal that water crawls upward and reflections cast shadows first.
