# Shadertoy Porting Guide

This repo uses WebGL2 uniforms:

```glsl
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform int u_room;
```

Shadertoy uses:

```glsl
uniform vec3 iResolution;
uniform float iTime;
uniform vec4 iMouse;
```

## Basic wrapper

```glsl
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 u_resolution = iResolution.xy;
    float u_time = iTime;
    vec2 u_mouse = iMouse.xy;

    // paste shader body logic here
}
```

## Practical advice

For Shadertoy:
- choose one room per upload
- remove dynamic `u_room` branch if you want faster compile
- keep helper functions
- replace camera uniform movement with procedural camera or mouse camera
- paste only the relevant `roomName()` branch into `mapScene()`

## Naming format

```text
Impossible 01 — Folded Vestibule
Impossible 02 — Twist Stairwell
...
Impossible 12 — Hyperbolic Backrooms Seed
```
