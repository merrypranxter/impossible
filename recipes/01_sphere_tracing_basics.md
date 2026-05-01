# Recipe: Sphere Tracing Basics

Sphere tracing is ray marching with distance estimates.

Core loop:

```glsl
float dO = 0.0;
for (int i = 0; i < MAX_STEPS; i++) {
    vec3 p = ro + rd * dO;
    float dS = mapScene(p);
    dO += dS;
    if (dS < SURF_DIST || dO > MAX_DIST) break;
}
```

Art version:

```glsl
float relax = 0.78 + 0.18*sin(u_time*0.17);
dO += max(dS * relax, 0.008);
```

Strict version gives stability. Art version gives shimmer, wobble, haunted edges, and occasional nonsense. Use nonsense deliberately.
