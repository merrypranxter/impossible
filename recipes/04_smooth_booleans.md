# Recipe: Smooth Booleans

Smooth minimum blends two distances.

```glsl
float opSmin(float a, float b, float k){
    float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);
    return mix(b,a,h) - k*h*(1.0-h);
}
```

Use for:

- columns growing into walls
- gum architecture
- bone cathedral surfaces
- organic portals
- impossible furniture that got too emotional

Small `k` = subtle bevel.
Large `k` = melty weird shit.
