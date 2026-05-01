// portal_snippets.glsl

float ringPortal(vec3 p, float radius, float thickness) {
    float ring = abs(length(p.xy) - radius) - thickness;
    float slab = abs(p.z) - 0.05;
    return max(ring, slab);
}

float archPortal(vec3 p) {
    vec3 q = p;
    float columns = min(length(q.xz - vec2(-0.8,0.0)) - 0.12,
                        length(q.xz - vec2( 0.8,0.0)) - 0.12);
    float top = abs(length(vec2(q.x, q.y - 1.2)) - 0.8) - 0.09;
    float legs = max(abs(q.x) - 0.85, abs(q.y - 0.55) - 0.65);
    return min(columns, min(top, legs));
}

vec3 portalSwirl(vec3 p, float strength) {
    float a = strength / max(0.2, length(p.xz));
    float c = cos(a), s = sin(a);
    p.xz = mat2(c, -s, s, c) * p.xz;
    return p;
}

vec3 portalPalette(float v) {
    return 0.5 + 0.5 * cos(6.28318 * (vec3(0.0, 0.25, 0.55) + v));
}
