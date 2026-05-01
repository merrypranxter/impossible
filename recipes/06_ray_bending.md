# Recipe: Ray Bending

Bend the sample point during marching.

```glsl
p = ro + rd * dO;
p.y += 0.08 * dO * dO * sin(u_time * 0.11);
```

Use carefully. This breaks the “safe step” assumption, which means artifacts. In this repo, artifacts are allowed when they look like the physics is haunted instead of broken.
