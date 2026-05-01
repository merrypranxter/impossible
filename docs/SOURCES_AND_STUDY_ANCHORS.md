# Sources and Study Anchors

This repo is creative/artistic, but the math skeleton has real ancestors.

## Hart — Sphere Tracing

John C. Hart’s *Sphere Tracing: A Geometric Method for the Antialiased Ray Tracing of Implicit Surfaces* is the core classic. The key idea: if a function returns a distance to a surface, a ray can advance by that distance and avoid stepping through the surface.

Use this for:
- understanding safe ray steps
- distance estimators
- implicit surfaces
- why SDFs are useful for weird procedural geometry

## Shadertoy

Shadertoy is the canonical public habitat for procedural GLSL shader experiments. Use it for:
- studying how shader artists compress a world into one fragment shader
- learning raymarching idioms
- finding fog/lighting/camera hacks
- porting this repo’s rooms into `mainImage`

## Inigo Quilez ecosystem

Search and study:
- distance functions
- smooth minimum
- domain repetition
- raymarching lighting
- procedural materials

## Practical warning

Many “SDFs” in shader art are actually distance-ish fields, not mathematically exact signed distance functions. That is fine for art. The shader just needs to look good and not explode too badly. Around here, the theorem wears eyeliner.
