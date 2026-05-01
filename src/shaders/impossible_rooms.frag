#version 300 es
precision highp float;

out vec4 fragColor;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform int u_room;
uniform vec3 u_camPos;
uniform float u_yaw;
uniform float u_pitch;

#define MAX_STEPS 112
#define MAX_DIST 90.0
#define SURF_DIST 0.0015
#define PI 3.141592653589793

mat2 rot(float a){ float s=sin(a), c=cos(a); return mat2(c,-s,s,c); }
float saturate(float x){ return clamp(x,0.0,1.0); }
vec3 saturate(vec3 x){ return clamp(x,0.0,1.0); }

float hash11(float p){ return fract(sin(p*127.1)*43758.5453123); }
float hash31(vec3 p){ return fract(sin(dot(p, vec3(127.1,311.7,74.7)))*43758.5453123); }

float sdSphere(vec3 p, float r){ return length(p)-r; }
float sdBox(vec3 p, vec3 b){
    vec3 q = abs(p)-b;
    return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sdRoundBox(vec3 p, vec3 b, float r){
    vec3 q = abs(p)-b;
    return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0) - r;
}
float sdCapsule(vec3 p, vec3 a, vec3 b, float r){
    vec3 pa=p-a, ba=b-a;
    float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0);
    return length(pa-ba*h)-r;
}
float sdTorus(vec3 p, vec2 t){
    vec2 q = vec2(length(p.xz)-t.x, p.y);
    return length(q)-t.y;
}
float sdPlane(vec3 p, vec3 n, float h){ return dot(p,n)+h; }

float opSmin(float a, float b, float k){
    float h = saturate(0.5 + 0.5*(b-a)/k);
    return mix(b,a,h) - k*h*(1.0-h);
}
float opSmax(float a, float b, float k){
    float h = saturate(0.5 - 0.5*(b+a)/k);
    return mix(b,-a,h) + k*h*(1.0-h);
}
vec3 opRep(vec3 p, vec3 c){ return mod(p + 0.5*c, c) - 0.5*c; }
vec3 opCheapBend(vec3 p, float k){
    float c = cos(k*p.x), s = sin(k*p.x);
    mat2 m = mat2(c,-s,s,c);
    vec3 q = vec3(m*p.xy,p.z);
    return q;
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
vec3 palette(float t){
    vec3 a=vec3(0.5);
    vec3 b=vec3(0.5);
    vec3 c=vec3(1.0);
    vec3 d=vec3(0.10,0.33,0.67);
    return a+b*cos(6.28318*(c*t+d));
}

// mat id encoded in y
vec2 res(float d, float m){ return vec2(d,m); }
vec2 uni(vec2 a, vec2 b){ return (a.x < b.x) ? a : b; }

vec2 roomFoldedVestibule(vec3 p){
    p.xz = abs(p.xz) - vec2(2.1, 2.1);
    vec3 q = p;
    q.z = mod(q.z + 2.4, 4.8) - 2.4;
    float floorD = sdPlane(p, vec3(0,1,0), 1.15);
    float ceilD  = sdPlane(p, vec3(0,-1,0), 1.25);
    float pillars = sdRoundBox(q, vec3(0.11, 2.6, 0.11), 0.05);
    float arch = sdTorus(vec3(abs(p.x)-1.1, p.y-0.15, mod(p.z+2.4,4.8)-2.4), vec2(0.85,0.045));
    float central = sdRoundBox(p-vec3(0,0.0,1.4), vec3(0.55,0.55,0.08), 0.08);
    float d = min(min(floorD,ceilD), min(pillars, min(arch, central)));
    float m = d==central?5.0:1.0;
    return res(d,m);
}

vec2 roomTwistStairwell(vec3 p){
    vec3 t = twistY(p, 0.65 + 0.25*sin(u_time*0.23));
    vec3 cell=t;
    cell.y = mod(cell.y + 0.35, 0.7) - 0.35;
    float stair = sdRoundBox(cell-vec3(0.0,-0.28,0.0), vec3(1.55,0.065,0.42), 0.035);
    float shaft = max(-sdBox(t, vec3(2.25,8.0,2.25)), sdBox(t, vec3(1.82,8.2,1.82)));
    float rail = sdTorus(vec3(length(t.xz)-1.55, t.y*0.09, 0.0), vec2(0.16,0.035));
    float d = min(stair, min(abs(shaft)-0.018, rail));
    return res(d, 2.0);
}

vec2 roomInversionChapel(vec3 p){
    vec3 a = p;
    vec3 inv = sphereInvert(p + vec3(0.0,0.2,0.0), 2.6) - vec3(0.0,0.2,0.0);
    vec3 q = mix(a, inv, 0.45 + 0.25*sin(u_time*0.14));
    float floorD = sdPlane(p, vec3(0,1,0), 1.2);
    float dome = abs(sdSphere(q-vec3(0,0.2,0), 2.1))-0.045;
    float altar = sdRoundBox(p-vec3(0,-0.65,1.6), vec3(0.7,0.32,0.36), 0.08);
    float halo = sdTorus((p-vec3(0,0.35,1.85)).xzy, vec2(0.62,0.035));
    float d = min(floorD, min(dome, min(altar,halo)));
    return res(d, 3.0);
}

vec2 roomSoftBooleanBasilica(vec3 p){
    vec3 r = p;
    r.x = mod(r.x+1.175,2.35)-1.175;
    r.z = mod(r.z+1.5,3.0)-1.5;
    float column = sdRoundBox(r, vec3(0.25,1.8,0.25), 0.18);
    float bulb = sdSphere(r-vec3(0,0.95,0), 0.55);
    float grown = opSmin(column, bulb, 0.38);
    float walls = min(sdPlane(p,vec3(0,1,0),1.05), sdPlane(p,vec3(0,-1,0),1.4));
    float aisle = max(sdBox(p, vec3(1.15,2.3,40.0)), -sdBox(p, vec3(0.95,2.6,40.0)));
    float portal = sdTorus((p-vec3(0,0.05,3.3)).xzy, vec2(1.0,0.08));
    float d = min(walls, min(grown, min(abs(aisle)-0.025, portal)));
    return res(d,4.0);
}

vec2 roomGravityQuiltHall(vec3 p){
    p.y += 0.32*sin(p.z*1.3 + u_time*0.9) + 0.18*sin(p.x*2.1 - u_time*0.4);
    vec3 cell = p;
    cell.z = mod(cell.z+2.0,4.0)-2.0;
    float floorD = sdPlane(p, vec3(0,1,0), 1.1 + 0.12*sin(p.x*4.0));
    float ceiling = sdPlane(p, vec3(0,-1,0), 1.55);
    float ribs = sdRoundBox(cell-vec3(0,0.0,0.0), vec3(2.2,0.045,0.08), 0.03);
    float wallL = sdPlane(p, vec3(1,0,0), 2.0);
    float wallR = sdPlane(p, vec3(-1,0,0), 2.0);
    float d = min(min(floorD, ceiling), min(min(wallL,wallR), ribs));
    return res(d,5.0);
}

vec2 roomPortalMouth(vec3 p){
    float sectors = 10.0;
    float ang = atan(p.z,p.x);
    float rad = length(p.xz);
    ang = mod(ang + PI/sectors, 2.0*PI/sectors) - PI/sectors;
    vec3 q = vec3(cos(ang)*rad, p.y, sin(ang)*rad);
    float teeth = sdRoundBox(q-vec3(1.35,0.0,0.0), vec3(0.09,0.85,0.05), 0.025);
    float ring = sdTorus((p-vec3(0,0,2.2)).xzy, vec2(1.05 + 0.08*sin(u_time), 0.075));
    float throat = sdSphere(p-vec3(0,0,2.2), 0.78);
    float floorD = sdPlane(p, vec3(0,1,0), 1.0);
    float d = min(floorD, min(teeth, min(ring, abs(throat)-0.02)));
    return res(d,6.0);
}

vec2 roomRecursiveHotel(vec3 p){
    vec3 q = p;
    q.z = mod(q.z + 3.0, 6.0) - 3.0;
    float shell = max(sdBox(q, vec3(2.4,1.5,2.6)), -sdBox(q, vec3(2.12,1.22,2.35)));
    float door = sdRoundBox(q-vec3(0,-0.28,2.48), vec3(0.5,0.82,0.12), 0.04);
    float windows = sdRoundBox(vec3(mod(q.x+0.7,1.4)-0.7, q.y-0.35, q.z+2.48), vec3(0.22,0.19,0.05), 0.03);
    vec3 small = p*2.0;
    small.z = mod(small.z+3.0,6.0)-3.0;
    float tiny = (max(sdBox(small-vec3(0,-0.7,0), vec3(1.1,0.5,1.1)), -sdBox(small-vec3(0,-0.7,0), vec3(0.92,0.36,0.92))))/2.0;
    float d = min(abs(shell)-0.02, min(door, min(windows, tiny)));
    return res(d,7.0);
}

vec2 roomMoireFogElevator(vec3 p){
    float shaft = max(sdBox(p, vec3(1.35,20.0,1.35)), -sdBox(p, vec3(1.18,19.8,1.18)));
    float bands = sin((p.x+p.z)*18.0 + u_time*1.5) * sin((p.x-p.z)*17.0 - u_time*1.2);
    float planes = abs(bands) - 0.032;
    vec3 q=p; q.y=mod(q.y+1.0,2.0)-1.0;
    float lift = sdRoundBox(q, vec3(1.12,0.03,1.12), 0.02);
    float d = min(abs(shaft)-0.015, min(planes*0.055, lift));
    return res(d,8.0);
}

vec2 roomNonEuclideanAtrium(vec3 p){
    float warp = 0.33*sin(length(p.xz)*1.1 - u_time*0.17);
    p.xz *= rot(warp);
    p.x *= 1.0 + 0.18*sin(p.z*0.55);
    vec3 q = p;
    q.x = mod(q.x+1.6,3.2)-1.6;
    q.z = mod(q.z+2.2,4.4)-2.2;
    float floorD = sdPlane(p, vec3(0,1,0), 1.15);
    float archOuter = sdTorus(vec3(q.x, q.y-0.05, q.z).xzy, vec2(0.95,0.07));
    float pillars = sdRoundBox(q-vec3(0,-0.25,0.0), vec3(0.11,1.1,0.11), 0.045);
    float skylight = abs(sdSphere(p-vec3(0,0.85,2.4),1.2))-0.035;
    float d = min(floorD, min(archOuter, min(pillars, skylight)));
    return res(d,9.0);
}

vec2 roomAntiPhysicsPool(vec3 p){
    float waves = p.y + 0.25 + 0.18*sin(p.x*3.2+u_time) + 0.12*sin(p.z*4.1-u_time*0.8);
    float water = abs(waves)-0.025;
    vec3 r=p; r.x=mod(r.x+0.275,0.55)-0.275; r.z=mod(r.z+0.275,0.55)-0.275;
    float tile = sdRoundBox(r-vec3(0,-1.05,0), vec3(0.24,0.025,0.24), 0.012);
    float walls = min(sdPlane(p,vec3(0,1,0),1.25), min(sdPlane(p,vec3(1,0,0),2.1), sdPlane(p,vec3(-1,0,0),2.1)));
    float ceilingPool = abs(sdPlane(p,vec3(0,-1,0),1.25 + 0.18*sin(length(p.xz)*2.0-u_time)))-0.03;
    float d = min(min(tile,walls), min(water,ceilingPool));
    return res(d,10.0);
}

vec2 roomSymbolicThreshold(vec3 p){
    float floorD = sdPlane(p, vec3(0,1,0), 1.05);
    vec3 g = p - vec3(0,0.05,2.2);
    float ring = sdTorus(g.xzy, vec2(0.9,0.055));
    float stem = sdCapsule(g, vec3(0,-0.85,0), vec3(0,0.85,0), 0.055);
    float arm1 = sdCapsule(g, vec3(-0.65,0.0,0), vec3(0.65,0.0,0), 0.045);
    float arm2 = sdCapsule(g, vec3(-0.35,0.48,0), vec3(0.35,-0.48,0), 0.04);
    float glyph = min(min(ring, stem), min(arm1,arm2));
    float threshold = sdRoundBox(p-vec3(0,0.0,2.3), vec3(1.25,1.25,0.08), 0.06);
    float cut = -sdRoundBox(p-vec3(0,0.0,2.31), vec3(0.72,0.92,0.11), 0.08);
    float frame = max(threshold, cut);
    float d = min(floorD, min(glyph, frame));
    return res(d,11.0);
}

vec2 roomHyperbolicBackroomsSeed(vec3 p){
    float k = exp(-0.035*p.z);
    p.xy *= 1.0 + 0.25*sin(p.z*0.38);
    vec3 q=p;
    q.x = mod(q.x+1.75,3.5)-1.75;
    q.z = mod(q.z+2.8,5.6)-2.8;
    float floorD = sdPlane(p, vec3(0,1,0), 1.15);
    float ceilD = sdPlane(p, vec3(0,-1,0), 1.35);
    float wallPanels = sdRoundBox(q-vec3(0,0.0,0.0), vec3(0.05,0.95,1.05), 0.025);
    float fluorescent = sdRoundBox(q-vec3(0,1.18,0), vec3(1.0,0.035,0.08), 0.02);
    float farMouth = sdRoundBox(vec3(p.x*k,p.y,p.z-4.0), vec3(0.85,0.8,0.09), 0.055);
    float d = min(min(floorD,ceilD), min(wallPanels, min(fluorescent, farMouth)));
    return res(d,12.0);
}

vec2 mapScene(vec3 p){
    int r = u_room;
    if(r==0) return roomFoldedVestibule(p);
    if(r==1) return roomTwistStairwell(p);
    if(r==2) return roomInversionChapel(p);
    if(r==3) return roomSoftBooleanBasilica(p);
    if(r==4) return roomGravityQuiltHall(p);
    if(r==5) return roomPortalMouth(p);
    if(r==6) return roomRecursiveHotel(p);
    if(r==7) return roomMoireFogElevator(p);
    if(r==8) return roomNonEuclideanAtrium(p);
    if(r==9) return roomAntiPhysicsPool(p);
    if(r==10) return roomSymbolicThreshold(p);
    return roomHyperbolicBackroomsSeed(p);
}

vec3 getNormal(vec3 p){
    vec2 e = vec2(0.0015, 0.0);
    return normalize(vec3(
        mapScene(p+e.xyy).x - mapScene(p-e.xyy).x,
        mapScene(p+e.yxy).x - mapScene(p-e.yxy).x,
        mapScene(p+e.yyx).x - mapScene(p-e.yyx).x
    ));
}

float ambientOcclusion(vec3 p, vec3 n){
    float occ = 0.0;
    float sca = 1.0;
    for(int i=0;i<5;i++){
        float h = 0.025 + 0.13*float(i)/4.0;
        float d = mapScene(p+n*h).x;
        occ += (h-d)*sca;
        sca *= 0.72;
    }
    return saturate(1.0 - 1.8*occ);
}

vec3 materialColor(float m, vec3 p, float glow){
    float id = m * 0.073 + 0.07*sin(u_time*0.08);
    vec3 base = palette(id + 0.04*p.y + 0.02*p.z);
    if(m < 2.0) base = mix(vec3(0.05,0.03,0.11), vec3(1.0,0.2,0.9), 0.45+0.35*sin(p.z*2.0));
    if(m > 5.5 && m < 6.5) base = palette(length(p.xz)*0.22 + u_time*0.03);
    if(m > 7.5 && m < 8.5) base = mix(vec3(0.06), vec3(0.8,0.65,1.0), 0.5+0.5*sin((p.x+p.z)*20.0));
    if(m > 11.5) base = mix(vec3(0.18,0.16,0.05), vec3(0.75,0.85,0.25), 0.5+0.5*sin(p.z*4.0+p.x*1.7));
    return base + glow;
}

float rayMarch(vec3 ro, vec3 rd, out vec3 p, out float mat, out float stepsFrac){
    float dO = 0.0;
    mat = 0.0;
    stepsFrac = 0.0;
    for(int i=0;i<MAX_STEPS;i++){
        p = ro + rd*dO;
        // wrong physics: ray sag only in specific rooms
        if(u_room==4){
            p.y += 0.08*dO*dO*sin(0.4 + u_time*0.11);
        }
        vec2 h = mapScene(p);
        if(h.x < SURF_DIST || dO > MAX_DIST){
            mat = h.y;
            stepsFrac = float(i)/float(MAX_STEPS);
            break;
        }
        // intentionally unsafe-ish: under/over-relaxation for haunted shimmer
        float relax = 0.78 + 0.18*sin(u_time*0.17 + float(u_room));
        if(u_room==2) relax = 0.62; 
        if(u_room==11) relax = 0.68;
        dO += max(h.x*relax, 0.008);
        stepsFrac = float(i)/float(MAX_STEPS);
    }
    return dO;
}

vec3 cameraRay(vec2 uv){
    float cy=cos(u_yaw), sy=sin(u_yaw);
    float cp=cos(u_pitch), sp=sin(u_pitch);
    vec3 forward = normalize(vec3(sy*cp, sp, cy*cp));
    vec3 right = normalize(vec3(cy, 0.0, -sy));
    vec3 up = normalize(cross(right, forward));
    return normalize(forward + uv.x*right + uv.y*up);
}

void main(){
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = (fragCoord - 0.5*u_resolution.xy) / u_resolution.y;
    vec2 m = (u_mouse.xy / max(u_resolution.xy, vec2(1.0))) - 0.5;
    float t = u_time;

    // lens wobble: wrong camera meat
    uv *= 1.0 + 0.025*sin(t*0.7 + length(uv)*9.0 + float(u_room));

    vec3 ro = u_camPos;
    vec3 rd = cameraRay(uv);

    vec3 p; float mat; float sf;
    float dist = rayMarch(ro, rd, p, mat, sf);

    vec3 col;
    if(dist < MAX_DIST){
        vec3 n = getNormal(p);
        vec3 lightPos = vec3(3.5*sin(t*0.3), 3.2, -2.0+3.0*cos(t*0.21));
        vec3 l = normalize(lightPos-p);
        float dif = saturate(dot(n,l));
        float rim = pow(saturate(1.0 + dot(n,rd)), 2.2);
        float ao = ambientOcclusion(p,n);
        float fres = pow(1.0 - saturate(dot(-rd,n)), 3.0);
        vec3 glow = vec3(0.0);
        glow += palette(float(u_room)*0.11 + length(p)*0.025 + t*0.025) * (0.11*fres + 0.06*rim);
        col = materialColor(mat,p,glow);
        col *= (0.22 + 0.95*dif) * ao;
        col += 0.18*rim*palette(t*0.03 + float(u_room)*0.09);
        col += 0.05*vec3(hash31(floor(p*7.0)));
    } else {
        float v = 0.5 + 0.5*rd.y;
        col = mix(vec3(0.02,0.01,0.05), palette(v*0.25 + float(u_room)*0.05 + t*0.015)*0.45, v);
        col += 0.08*palette(length(uv)+t*0.03+float(u_room)*0.12);
    }

    float fog = 1.0 - exp(-0.025*dist*dist);
    vec3 fogCol = palette(float(u_room)*0.13 + t*0.015 + rd.y*0.2)*0.32;
    if(u_room==7) fogCol += vec3(0.08,0.06,0.13)*(0.5+0.5*sin((uv.x+uv.y)*90.0+t));
    col = mix(col, fogCol, saturate(fog));

    // chromatic edge nonsense
    float vign = smoothstep(1.35,0.25,length(uv));
    col *= vign;
    col += (1.0-vign)*0.12*palette(uv.x+uv.y+t*0.03);
    col = pow(saturate(col), vec3(0.82));
    fragColor = vec4(col,1.0);
}
