# Recipe: Twist Space

Twist transforms create architecture that rotates with height.

```glsl
vec3 twistY(vec3 p, float k){
    float a = k * p.y;
    p.xz *= rot(a);
    return p;
}
```

Use for:

- corkscrew stairwells
- spiral towers
- gravity that feels drunk
- rooms with torsion instead of straight walls

Rule: twist the domain, then evaluate simple shapes. That is cheaper and weirder than modeling twisted objects.
