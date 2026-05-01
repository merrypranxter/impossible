# Copilot Task — Make a Shared Shader Harness

The first version has standalone demos. Keep those, but also create a shared harness.

## Goal

Create:

```text
src/js/shader_harness.js
src/js/room_registry.js
src/shaders/common_header.glsl
src/shaders/common_footer.glsl
```

## Requirements

- WebGL2
- no build step required
- can load room fragments from strings or embedded script tags
- graceful compile error display
- mouse uniforms
- time uniform
- resolution uniform
- optional keyboard uniforms
- debug mode uniform

## Keep standalone files

Do not replace standalone demos.
Standalone demos are for bulk upload, quick testing, and JSFiddle/p5-style fuckery.
Shared harness is for browsing the repo elegantly.
