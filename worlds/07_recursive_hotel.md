# 07. Recursive Hotel

## Room identity

**ID:** `recursive_hotel`  
**Shader index:** `6`  
**Math trick:** nested repetition and fractional cell recursion  
**Wrong physics:** rooms contain smaller rooms that contain the hallway you are currently in  
**Mood:** haunted motel designed by a stack overflow  
**Palette:** sodium yellow / cyan TV glow / motel red / mold green  
**Tags:** recursion, rooms, repeat, backrooms

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
roomRecursiveHotel()
```

## Expansion prompts

### Code prompt

Build a new variation of `Recursive Hotel` for the `impossible` repo. Keep the dominant trick `nested repetition and fractional cell recursion`, but add one new architectural feature, one new fog behavior, and one new material response. Preserve local-open standalone browser compatibility.

### Image prompt

A raymarched impossible liminal room called `Recursive Hotel`, built from nested repetition and fractional cell recursion, where rooms contain smaller rooms that contain the hallway you are currently in; haunted motel designed by a stack overflow; palette of sodium yellow / cyan TV glow / motel red / mold green; procedural SDF architecture, glowing fog volumes, recursive spatial distortion, shader-art lighting, impossible geometry, navigable haunted math, no technical overlay.

### Video prompt

A slow first-person drift through `Recursive Hotel`. The camera moves as if the room’s physics are slightly miscompiled. Surfaces shimmer with distance-field edge glow; fog exposes hidden coordinate folds; the architecture behaves according to `nested repetition and fractional cell recursion`. The motion should reveal that rooms contain smaller rooms that contain the hallway you are currently in.
