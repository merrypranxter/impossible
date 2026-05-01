# 11. Symbolic Threshold

## Room identity

**ID:** `symbolic_threshold`  
**Shader index:** `10`  
**Math trick:** SDF glyphs made from capsules, rings, and boolean cuts  
**Wrong physics:** symbols are structural; meaning has collision detection  
**Mood:** a sigil that became load-bearing  
**Palette:** white-hot glyphs / red velvet / obsidian / spectral rimlight  
**Tags:** glyph, sigil, capsule-sdf, threshold

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
roomSymbolicThreshold()
```

## Expansion prompts

### Code prompt

Build a new variation of `Symbolic Threshold` for the `impossible` repo. Keep the dominant trick `SDF glyphs made from capsules, rings, and boolean cuts`, but add one new architectural feature, one new fog behavior, and one new material response. Preserve local-open standalone browser compatibility.

### Image prompt

A raymarched impossible liminal room called `Symbolic Threshold`, built from SDF glyphs made from capsules, rings, and boolean cuts, where symbols are structural; meaning has collision detection; a sigil that became load-bearing; palette of white-hot glyphs / red velvet / obsidian / spectral rimlight; procedural SDF architecture, glowing fog volumes, recursive spatial distortion, shader-art lighting, impossible geometry, navigable haunted math, no technical overlay.

### Video prompt

A slow first-person drift through `Symbolic Threshold`. The camera moves as if the room’s physics are slightly miscompiled. Surfaces shimmer with distance-field edge glow; fog exposes hidden coordinate folds; the architecture behaves according to `SDF glyphs made from capsules, rings, and boolean cuts`. The motion should reveal that symbols are structural; meaning has collision detection.
