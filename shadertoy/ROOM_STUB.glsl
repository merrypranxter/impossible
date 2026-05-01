// Shadertoy stub for impossible.git
// Paste one room function + helpers into this shell.

#define MAX_STEPS 96
#define MAX_DIST 80.0
#define SURF_DIST 0.0015

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (fragCoord - 0.5*iResolution.xy) / iResolution.y;
    float t = iTime;

    // TODO:
    // vec3 ro = ...
    // vec3 rd = ...
    // raymarch
    // shade

    fragColor = vec4(vec3(0.0), 1.0);
}
