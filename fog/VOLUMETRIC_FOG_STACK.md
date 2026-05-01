# Volumetric Fog Stack

Fog is the cheapest way to turn shape demos into worlds.

## Fog roles

### Depth glue
Makes surfaces feel embedded in atmosphere.

### Scale fraud
Hides repetition limits and raymarch artifacts.

### Emotional weather
Turns abstract geometry into somewhere you wish you had not entered.

### Portal indicator
Lets thresholds glow without requiring literal doors.

## Layer recipe

Use three fog layers:

1. **Distance fog** — normal depth fade.
2. **Domain fog** — follows warped coordinates.
3. **Memory fog** — changes with time, camera position, or symbolic proximity.

## Minimal implementation

```glsl
float fog = 1.0 - exp(-0.045 * t * t);
col = mix(col, fogColor, fog);
```

## Better implementation

```glsl
float domainFog = noise(warpedP * 0.35 + iTime * 0.05);
float memoryFog = smoothstep(0.2, 1.0, sin(length(ro.xz) * 0.7 - iTime));
float fog = 1.0 - exp(-t * (0.025 + 0.02 * domainFog + 0.015 * memoryFog));
```

## Wrong fog ideas

- Fog moves against the camera.
- Fog gets denser near empty space, not surfaces.
- Fog reveals invisible doors.
- Fog has scanlines.
- Fog repeats in room modules like wallpaper.
- Fog changes color when crossing a portal.
- Fog has a low-resolution shadow map vibe.
- Fog forms fake architecture behind real geometry.
