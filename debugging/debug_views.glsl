// debug_views.glsl

vec3 debugSteps(int steps, int maxSteps) {
    return vec3(float(steps) / float(maxSteps));
}

vec3 debugNormal(vec3 n) {
    return n * 0.5 + 0.5;
}

vec3 debugDistance(float d) {
    return vec3(clamp(d * 0.25, 0.0, 1.0));
}

vec3 debugMaterial(float id) {
    return 0.5 + 0.5 * cos(6.28318 * (vec3(0.0, 0.33, 0.67) + id * 0.17));
}

vec3 debugBands(float d) {
    float b = smoothstep(0.45, 0.5, fract(d * 8.0));
    return mix(vec3(0.05), vec3(1.0), b);
}
