# Wrong Lighting Systems

Normal raymarched scenes use light to reveal geometry.
This repo uses light as a liar with a flashlight.

## Lighting violations

### Backwards Light
Objects brighten as they face away from the light.

```glsl
float diffuse = pow(1.0 - max(dot(n, l), 0.0), 2.0);
```

### Fog-Born Light
Light appears to come from the fog volume rather than a point source.

```glsl
col += fogDensity * fogColor * (0.15 + 0.85 * noise(p * 0.5));
```

### Symbolic Light
Illumination increases near a glyph, portal, or threshold field.

```glsl
float sigil = exp(-length(p.xz - sigilCenter) * 2.0);
col += vec3(0.8, 0.2, 1.0) * sigil;
```

### Delayed Shadow
Shadow samples use a shifted time value, making shadows disobey bodies.

```glsl
float shadowTime = iTime - 0.8;
```

### Nonconservative Glow
Light intensity grows with distance in one axis.

```glsl
float impossibleGlow = smoothstep(0.0, 8.0, abs(p.z));
```

## Recommended palette logic

Use one architectural base, one fog color, and one impossible accent.

Example:
- concrete blue shadows
- violet fog
- hot green portal seams

Do not make every surface rainbow unless the room’s central law is specifically chromatic interference.
Maximalism is better when there is an engine under it, not just a spilled Lisa Frank autopsy.
