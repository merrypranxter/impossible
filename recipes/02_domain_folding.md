# Recipe: Domain Folding

Domain folding mirrors space before evaluating an SDF.

```glsl
p.xz = abs(p.xz) - vec2(2.1, 2.1);
```

Good for:

- mirror corridors
- kaleidoscopic rooms
- symmetrical shrines
- repeated thresholds
- “the room knows where you are before you do” vibes

Variation:

```glsl
for (int i=0; i<4; i++) {
    p = abs(p) - vec3(1.0, 0.4, 1.0);
    p.xz *= rot(0.4);
}
```
