# Performance Notes

Raymarching gets expensive fast because every pixel walks through the scene.

## First knobs to turn

In `src/shaders/impossible_rooms.frag`:

```glsl
#define MAX_STEPS 112
#define MAX_DIST 90.0
#define SURF_DIST 0.0015
```

Try:

```glsl
#define MAX_STEPS 72
#define MAX_DIST 55.0
#define SURF_DIST 0.003
```

## Cheapening strategy

1. Lower `MAX_STEPS`.
2. Remove ambient occlusion or reduce its loop count.
3. Simplify normal calculation only if desperate.
4. Use fewer torus/glyph details.
5. Reduce fog complexity.
6. Avoid nested repetition inside repetition unless it looks insanely good.

## Make artifacts into style

Artifacts can look like:

- unstable sync
- portal shimmer
- incorrect depth
- cursed scanlines
- haunted collision logic

That is allowed. This repo is not a CAD package. Thank god.
