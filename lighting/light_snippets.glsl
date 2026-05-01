// light_snippets.glsl
// Contradictory light recipes.

float backwardsDiffuse(vec3 n, vec3 l) {
    return pow(1.0 - max(dot(n, l), 0.0), 2.0);
}

float rimHaunt(vec3 n, vec3 rd, float power) {
    return pow(1.0 - abs(dot(n, -rd)), power);
}

float fakeSoftShadow(vec3 ro, vec3 rd, float mint, float maxt) {
    float res = 1.0;
    float t = mint;
    for (int i = 0; i < 48; i++) {
        float h = sceneDistance(ro + rd * t);
        res = min(res, 8.0 * h / t);
        t += clamp(h, 0.02, 0.25);
        if (res < 0.001 || t > maxt) break;
    }
    return clamp(res, 0.0, 1.0);
}

vec3 sodiumVaporAfterimage(float x) {
    return vec3(1.0, 0.55, 0.12) * (0.55 + 0.45 * sin(x));
}

vec3 phosphorBloom(float d, vec3 base) {
    float b = exp(-12.0 * max(d, 0.0));
    return base * b;
}
