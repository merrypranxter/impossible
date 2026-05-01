# 02. Twist Stairwell

## Room identity

**ID:** `twist_stairwell`  
**Shader index:** `1`  
**Math trick:** height-dependent rotation twist  
**Wrong physics:** stairs torque around the viewer as if gravity has a barber pole fetish  
**Mood:** a stairwell whose banister remembers being a tornado  
**Palette:** acid green / tangerine / ultraviolet / dirty gold  
**Tags:** twist, stair, torsion, wrong-gravity

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
roomTwistStairwell()
```

## Expansion prompts

### Code prompt

Build a new variation of `Twist Stairwell` for the `impossible` repo. Keep the dominant trick `height-dependent rotation twist`, but add one new architectural feature, one new fog behavior, and one new material response. Preserve local-open standalone browser compatibility.

### Image prompt

A raymarched impossible liminal room called `Twist Stairwell`, built from height-dependent rotation twist, where stairs torque around the viewer as if gravity has a barber pole fetish; a stairwell whose banister remembers being a tornado; palette of acid green / tangerine / ultraviolet / dirty gold; procedural SDF architecture, glowing fog volumes, recursive spatial distortion, shader-art lighting, impossible geometry, navigable haunted math, no technical overlay.

### Video prompt

A slow first-person drift through `Twist Stairwell`. The camera moves as if the room’s physics are slightly miscompiled. Surfaces shimmer with distance-field edge glow; fog exposes hidden coordinate folds; the architecture behaves according to `height-dependent rotation twist`. The motion should reveal that stairs torque around the viewer as if gravity has a barber pole fetish.
