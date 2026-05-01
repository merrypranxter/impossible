// navigation_modes.glsl
// Camera snippets for impossible raymarched worlds.

mat3 lookAtBasis(vec3 ro, vec3 ta, float roll) {
    vec3 ww = normalize(ta - ro);
    vec3 uu = normalize(cross(vec3(sin(roll), cos(roll), 0.0), ww));
    vec3 vv = normalize(cross(ww, uu));
    return mat3(uu, vv, ww);
}

vec3 orbitCamera(float t, vec2 mouse, float radius) {
    float yaw = t * 0.12 + mouse.x * 6.28318;
    float pitch = -0.4 + mouse.y * 1.2;
    return vec3(
        radius * cos(yaw) * cos(pitch),
        radius * sin(pitch),
        radius * sin(yaw) * cos(pitch)
    );
}

vec3 fallingCamera(float t) {
    return vec3(
        0.35 * sin(t * 0.19),
        1.2 + 0.2 * sin(t * 0.11),
        -t * 1.25
    );
}

vec3 sidewaysGravityDrift(vec3 ro, float t) {
    ro.x += 0.25 * sin(t * 0.37 + ro.z * 0.2);
    ro.y += 0.08 * sin(t * 0.21 + ro.x * 2.0);
    return ro;
}
