# Camera Behavior for Haunted Raymarched Worlds

The camera is part of the hallucination.

## Default controls

For local browser sketches:
- mouse X = yaw / orbit
- mouse Y = pitch / elevation
- time = slow drift
- optional WASD = navigation
- optional scroll = field of view or threshold depth

## Camera personalities

### Witness Camera
Slow, careful, nervous. It sees architecture as evidence.

Good for:
- chapels
- basements
- symbolic thresholds
- fog rooms

### Drifter Camera
Always slightly sliding sideways, like gravity is lying.

Good for:
- wrong gravity halls
- pools
- atriums
- floating rooms

### Orbiting Camera
Circles a center that may not actually exist.

Good for:
- portals
- inversion rooms
- glyph chambers
- impossible monuments

### Falling Camera
Camera travels forward/down forever through repeated structures.

Good for:
- recursive hotels
- backrooms
- elevator shafts
- tunnel worlds

### Possessed Camera
Camera receives small vector offsets from the SDF field itself.

```glsl
ro += 0.05 * normalize(vec3(
    sin(sceneDistance(ro + vec3(0.1,0,0))),
    sin(sceneDistance(ro + vec3(0,0.1,0))),
    sin(sceneDistance(ro + vec3(0,0,0.1)))
));
```

Use carefully. This can become nausea soup.

## Rule of thumb

The room should be more legible than the camera is.
If both the world and camera are fully deranged, the image becomes unhelpful glitter vomit.
Useful glitter vomit, but still.
