# Recipe: Volumetric Mood Fog

Cheap fake fog:

```glsl
float fog = 1.0 - exp(-0.025 * dist * dist);
col = mix(col, fogCol, clamp(fog, 0.0, 1.0));
```

Structured fog:

```glsl
float bands = sin((p.x+p.z)*18.0 + u_time) * sin((p.x-p.z)*17.0 - u_time);
```

Fog should act like evidence of invisible structure.
