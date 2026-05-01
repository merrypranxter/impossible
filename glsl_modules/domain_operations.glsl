// Domain operations for impossible.git

mat2 rot(float a){
    float s=sin(a), c=cos(a);
    return mat2(c,-s,s,c);
}

vec3 opRep(vec3 p, vec3 c){
    return mod(p + 0.5*c, c) - 0.5*c;
}

vec3 twistY(vec3 p, float k){
    float a = k*p.y;
    p.xz *= rot(a);
    return p;
}

vec3 sphereInvert(vec3 p, float radius){
    float r2 = dot(p,p);
    return p * (radius*radius / max(r2, 0.05));
}
