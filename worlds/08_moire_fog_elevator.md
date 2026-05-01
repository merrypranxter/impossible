# 08. Moiré Fog Elevator

## Room identity

**ID:** `moire_fog_elevator`  
**Shader index:** `7`  
**Math trick:** interference planes plus volumetric density accumulation  
**Wrong physics:** fog has scanlines and the elevator goes sideways through pattern pressure  
**Mood:** an elevator shaft full of optical migraine incense  
**Palette:** monochrome shimmer / violet haze / amber emergency light  
**Tags:** moire, fog, volume, interference

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
roomMoiréFogElevator()
```

## Expansion prompts

### Code prompt

Build a new variation of `Moiré Fog Elevator` for the `impossible` repo. Keep the dominant trick `interference planes plus volumetric density accumulation`, but add one new architectural feature, one new fog behavior, and one new material response. Preserve local-open standalone browser compatibility.

### Image prompt

A raymarched impossible liminal room called `Moiré Fog Elevator`, built from interference planes plus volumetric density accumulation, where fog has scanlines and the elevator goes sideways through pattern pressure; an elevator shaft full of optical migraine incense; palette of monochrome shimmer / violet haze / amber emergency light; procedural SDF architecture, glowing fog volumes, recursive spatial distortion, shader-art lighting, impossible geometry, navigable haunted math, no technical overlay.

### Video prompt

A slow first-person drift through `Moiré Fog Elevator`. The camera moves as if the room’s physics are slightly miscompiled. Surfaces shimmer with distance-field edge glow; fog exposes hidden coordinate folds; the architecture behaves according to `interference planes plus volumetric density accumulation`. The motion should reveal that fog has scanlines and the elevator goes sideways through pattern pressure.
