// fog_snippets.glsl

float expFog(float t, float density) {
    return 1.0 - exp(-density * t);
}

float quadraticFog(float t, float density) {
    return 1.0 - exp(-density * t * t);
}

float bandedFog(float t, float bands) {
    return 0.5 + 0.5 * sin(t * bands);
}

vec3 applyWrongFog(vec3 col, float t, vec3 fogColor, float density) {
    float fog = quadraticFog(t, density);
    float bands = 0.08 * bandedFog(t, 9.0);
    return mix(col, fogColor, clamp(fog + bands, 0.0, 1.0));
}

vec3 applyPortalFog(vec3 col, vec3 p, vec3 portalColor) {
    float gate = exp(-abs(length(p.xz) - 1.5) * 3.0);
    return col + portalColor * gate * 0.35;
}
