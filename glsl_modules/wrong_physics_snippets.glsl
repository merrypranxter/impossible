// Wrong physics snippets for impossible.git

// Sag sampled space as distance increases.
vec3 bendGravity(vec3 p, float traveled, float time){
    p.y += 0.08 * traveled * traveled * sin(0.4 + time * 0.11);
    return p;
}

// Make depth compress as if hallways are longer on the inside.
vec3 hyperbolicCompress(vec3 p){
    float k = exp(-0.035 * p.z);
    p.xy *= k;
    return p;
}

// Cheap lens breathing.
vec2 lensWobble(vec2 uv, float time, float room){
    return uv * (1.0 + 0.025 * sin(time * 0.7 + length(uv) * 9.0 + room));
}

// Fog as pattern pressure.
float moireDensity(vec3 p, float time){
    return sin((p.x+p.z)*18.0 + time*1.5) * sin((p.x-p.z)*17.0 - time*1.2);
}
