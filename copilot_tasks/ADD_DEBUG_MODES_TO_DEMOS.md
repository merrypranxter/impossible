# Copilot Task — Add Debug Modes to Demos

Every standalone demo should support a debug view switch.

## Keys

- `1` final render
- `2` distance bands
- `3` normals
- `4` step count
- `5` material IDs
- `6` fog only

## Implementation notes

Use a uniform:

```glsl
uniform int uDebugMode;
```

And branch near final color:

```glsl
if (uDebugMode == 2) col = debugBands(d);
if (uDebugMode == 3) col = debugNormal(n);
```

## Why

Wrong-physics shaders are fragile as hell.
Debug views prevent the repo from becoming a pile of beautiful broken nonsense.
