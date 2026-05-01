# Recipe: Sphere Inversion

Sphere inversion turns near/far space into a spatial palindrome.

```glsl
vec3 sphereInvert(vec3 p, float radius){
    float r2 = dot(p,p);
    return p * (radius*radius / max(r2, 0.05));
}
```

Use for:

- inside-out chapels
- portals
- depth halos
- rooms that fold into the camera
- reality ulcers
