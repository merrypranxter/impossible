# Portal Design

Portals are not just holes.
A portal is a contract dispute between coordinate systems.

## Portal types

### Visual portal
Looks like a doorway, may not transport the ray.

### Ray portal
Actually remaps ray origin/direction.

### Domain portal
Only changes coordinates used by SDF sampling.

### Material portal
Surface shader shows another space.

### Semantic portal
The room changes interpretation after crossing it.

## Practical starting method

For simple standalone demos, fake the portal:

1. Render a ring, arch, mouth, or mirror.
2. Inside it, sample a warped coordinate field.
3. Add fog and rim glow.
4. Make camera drift toward it.
5. Do not implement actual recursive ray teleportation until the scene reads.

## Ray remap concept

```glsl
if (hitPortal(p)) {
    ro = portalExit + transform(rd) * 0.05;
    rd = transformDirection(rd);
}
```

This is powerful but unstable.
Use max portal recursion limits.
Never let a ray teleport forever unless your goal is browser sacrifice.

## Portal feeling checklist

A good portal should:
- alter scale
- alter color temperature
- imply a different gravity
- show a wrong horizon
- have an edge treatment
- be visible before understood
- look older than the room around it
