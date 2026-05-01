# 01. Folded Vestibule

## Room identity

**ID:** `folded_vestibule`  
**Shader index:** `0`  
**Math trick:** absolute-value space folding  
**Wrong physics:** walls mirror-position themselves before the ray arrives  
**Mood:** first threshold, a lobby that has already reflected you  
**Palette:** electric pink / bruise purple / cyan wet glass / hot white edge-light  
**Tags:** fold, repeat, liminal, mirror-space

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
roomFoldedVestibule()
```

## Expansion prompts

### Code prompt

Build a new variation of `Folded Vestibule` for the `impossible` repo. Keep the dominant trick `absolute-value space folding`, but add one new architectural feature, one new fog behavior, and one new material response. Preserve local-open standalone browser compatibility.

### Image prompt

A raymarched impossible liminal room called `Folded Vestibule`, built from absolute-value space folding, where walls mirror-position themselves before the ray arrives; first threshold, a lobby that has already reflected you; palette of electric pink / bruise purple / cyan wet glass / hot white edge-light; procedural SDF architecture, glowing fog volumes, recursive spatial distortion, shader-art lighting, impossible geometry, navigable haunted math, no technical overlay.

### Video prompt

A slow first-person drift through `Folded Vestibule`. The camera moves as if the room’s physics are slightly miscompiled. Surfaces shimmer with distance-field edge glow; fog exposes hidden coordinate folds; the architecture behaves according to `absolute-value space folding`. The motion should reveal that walls mirror-position themselves before the ray arrives.
