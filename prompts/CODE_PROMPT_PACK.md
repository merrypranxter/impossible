# Code Prompt Pack

## Add a new room

```text
You are working inside the `impossible` repo, a WebGL2/GLSL raymarching repo for impossible SDF rooms with wrong physics.

Create a new room branch in `src/shaders/impossible_rooms.frag`.

Requirements:
- one dominant math trick
- one wrong-physics behavior
- one fog or lighting behavior that reveals the trick
- one metadata entry in `data/rooms.json`
- one world doc in `worlds/`
- one standalone HTML demo in `standalone/`
- no build step required
- must run locally in browser
- keep performance reasonable on older hardware
```

## Make a Shadertoy version

```text
Convert the selected room from `impossible` into Shadertoy format.

Requirements:
- use `mainImage(out vec4 fragColor, in vec2 fragCoord)`
- map `u_time` to `iTime`
- map `u_resolution` to `iResolution.xy`
- map `u_mouse` to `iMouse.xy`
- remove HTML/JS
- preserve the visual identity and wrong-physics behavior
```

## Performance pass

```text
Optimize the raymarch shader for older hardware.

Try:
- reduce MAX_STEPS
- reduce normal samples if possible
- simplify ambient occlusion
- add quality preset uniforms or constants
- avoid expensive loops in room branches
- preserve the room’s dominant visual identity
```
