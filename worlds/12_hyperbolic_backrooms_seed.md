# 12. Hyperbolic Backrooms Seed

## Room identity

**ID:** `hyperbolic_backrooms_seed`  
**Shader index:** `11`  
**Math trick:** folded grid repetition plus exponential depth compression  
**Wrong physics:** the hallway is longer on the inside and meaner at the edges  
**Mood:** the yellow wallpaper has learned topology and it is pissed  
**Palette:** sickly yellow / green fluorescent hum / VHS violet / black mildew  
**Tags:** hyperbolic, backrooms, depth-compression, liminal

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
roomHyperbolicBackroomsSeed()
```

## Expansion prompts

### Code prompt

Build a new variation of `Hyperbolic Backrooms Seed` for the `impossible` repo. Keep the dominant trick `folded grid repetition plus exponential depth compression`, but add one new architectural feature, one new fog behavior, and one new material response. Preserve local-open standalone browser compatibility.

### Image prompt

A raymarched impossible liminal room called `Hyperbolic Backrooms Seed`, built from folded grid repetition plus exponential depth compression, where the hallway is longer on the inside and meaner at the edges; the yellow wallpaper has learned topology and it is pissed; palette of sickly yellow / green fluorescent hum / VHS violet / black mildew; procedural SDF architecture, glowing fog volumes, recursive spatial distortion, shader-art lighting, impossible geometry, navigable haunted math, no technical overlay.

### Video prompt

A slow first-person drift through `Hyperbolic Backrooms Seed`. The camera moves as if the room’s physics are slightly miscompiled. Surfaces shimmer with distance-field edge glow; fog exposes hidden coordinate folds; the architecture behaves according to `folded grid repetition plus exponential depth compression`. The motion should reveal that the hallway is longer on the inside and meaner at the edges.
