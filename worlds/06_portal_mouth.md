# 06. Portal Mouth

## Room identity

**ID:** `portal_mouth`  
**Shader index:** `5`  
**Math trick:** polar repetition, torus thresholds, radial phase bands  
**Wrong physics:** a doorway behaves like a hungry coordinate system  
**Mood:** mouth, mirror, door, wound, logo, halo, oops  
**Palette:** laser rainbow / black glass / white sparks / gummy red  
**Tags:** portal, polar-repeat, torus, symbol

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
roomPortalMouth()
```

## Expansion prompts

### Code prompt

Build a new variation of `Portal Mouth` for the `impossible` repo. Keep the dominant trick `polar repetition, torus thresholds, radial phase bands`, but add one new architectural feature, one new fog behavior, and one new material response. Preserve local-open standalone browser compatibility.

### Image prompt

A raymarched impossible liminal room called `Portal Mouth`, built from polar repetition, torus thresholds, radial phase bands, where a doorway behaves like a hungry coordinate system; mouth, mirror, door, wound, logo, halo, oops; palette of laser rainbow / black glass / white sparks / gummy red; procedural SDF architecture, glowing fog volumes, recursive spatial distortion, shader-art lighting, impossible geometry, navigable haunted math, no technical overlay.

### Video prompt

A slow first-person drift through `Portal Mouth`. The camera moves as if the room’s physics are slightly miscompiled. Surfaces shimmer with distance-field edge glow; fog exposes hidden coordinate folds; the architecture behaves according to `polar repetition, torus thresholds, radial phase bands`. The motion should reveal that a doorway behaves like a hungry coordinate system.
