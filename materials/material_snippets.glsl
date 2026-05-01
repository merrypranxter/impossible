// material_snippets.glsl

vec3 phosphorConcrete(vec3 p, vec3 n) {
    float grain = fract(sin(dot(floor(p * 48.0), vec3(12.9898,78.233,37.719))) * 43758.5453);
    float scan = 0.04 * sin(p.y * 120.0);
    return vec3(0.32, 0.38, 0.43) + grain * 0.05 + scan;
}

vec3 liminalCarpet(vec3 p) {
    vec2 q = p.xz * 6.0;
    float weave = sin(q.x * 3.1415) * sin(q.y * 3.1415);
    float stain = sin(length(q) * 0.7 + sin(q.x));
    return vec3(0.16, 0.12, 0.18) + 0.06 * weave + 0.04 * stain;
}

vec3 blackMouthMembrane(vec3 p, vec3 rd) {
    float pulse = 0.5 + 0.5 * sin(8.0 * length(p.xz) - iTime * 2.0);
    float rim = pow(1.0 - abs(dot(normalize(p), -rd)), 3.0);
    return vec3(0.01, 0.0, 0.025) + vec3(0.5, 0.0, 0.9) * rim * pulse;
}

vec3 chlorineMarble(vec3 p) {
    float v = sin(p.x * 5.0 + sin(p.z * 3.0)) + sin(p.z * 4.0);
    return mix(vec3(0.65, 0.95, 0.9), vec3(0.1, 0.55, 0.7), smoothstep(-1.2, 1.2, v));
}
