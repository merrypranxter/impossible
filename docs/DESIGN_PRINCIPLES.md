# Design Principles: Raymarched Worlds With Wrong Physics

## 1. Make the math do visible behavior

Do not use math as decorative seasoning. The coordinate transform or SDF operation must alter the world in a way the viewer can feel.

Bad:
- “There is a sphere with a cool color.”

Good:
- “The hallway is built from absolute-value folding, so every lateral movement creates mirrored thresholds.”
- “The chapel uses sphere inversion, so near/far space feels spiritually incorrect.”
- “The room uses smooth union, so columns grow into walls like melted architecture.”

## 2. Every room gets one dominant lie

Too many tricks can become shader soup. Shader soup is delicious, but rooms need a readable curse.

Examples:
- Folded Vestibule: space folds.
- Twist Stairwell: height rotates.
- Inversion Chapel: near/far swaps.
- Gravity Quilt Hall: rays sag.
- Symbolic Threshold: glyphs are solid.

## 3. SDFs are architectural language

Think:
- boxes = walls, panels, motel rooms
- torus = portal rings, halos, mouths
- capsules = glyph strokes, rails, sigils
- spheres = domes, voids, inversion anchors
- smooth-min = biological/soft architecture
- repetition = hotel logic, backrooms logic, recursive trauma wallpaper

## 4. Fog is not atmosphere; fog is evidence

Fog should reveal broken physics:
- volumetric scanlines
- density bands
- interference fields
- color drift by distance
- compression haze in hyperbolic rooms

## 5. The camera is a body in the wrong universe

Movement is not neutral. The camera can:
- sag
- drift
- breathe
- be possessed by autopilot
- clip through impossible architecture as a feature, not a bug
- get lost because the math is being a little asshole

## 6. Keep it repo-useful

Each expansion should add at least one of:

- a shader function
- a standalone room
- a prompt module
- a room lore file
- a reusable SDF recipe
- a Copilot instruction for future expansion
