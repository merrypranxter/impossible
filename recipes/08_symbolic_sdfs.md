# Recipe: Symbolic SDFs

Build glyphs from capsules and torus rings.

```glsl
float stem = sdCapsule(g, vec3(0,-.8,0), vec3(0,.8,0), .05);
float arm  = sdCapsule(g, vec3(-.6,0,0), vec3(.6,0,0), .04);
float ring = sdTorus(g.xzy, vec2(.9,.055));
float glyph = min(ring, min(stem, arm));
```

In this repo, symbols are not labels. They are structural members. Meaning has collision detection.
