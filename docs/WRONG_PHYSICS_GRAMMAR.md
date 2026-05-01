# Wrong Physics Grammar

A wrong-physics room is made from three layers:

```text
VISIBLE ARCHITECTURE
+ LOCAL LAW
+ REVEALING MEDIUM
= IMPOSSIBLE ROOM
```

## Layer 1: visible architecture

Pick recognizable spatial bait:

- hallway
- stairwell
- chapel
- atrium
- motel room
- elevator
- pool
- threshold
- lobby
- basement
- arcade
- laundromat
- school corridor

## Layer 2: local law

Pick one lie:

### Fold

Space mirrors itself.

```glsl
p = abs(p) - offset;
```

### Repeat

The room is tiled by modular arithmetic.

```glsl
p = mod(p + c*.5, c) - c*.5;
```

### Twist

Height rotates the room.

```glsl
p.xz *= rot(p.y * k);
```

### Invert

Near/far relationship breaks.

```glsl
p *= r*r / dot(p,p);
```

### Blend

Architecture grows instead of intersects.

```glsl
d = opSmin(d1, d2, k);
```

### Bend

The ray or point sags through a field.

```glsl
p.y += traveled*traveled*k;
```

### Symbolize

Glyph strokes are geometry.

```glsl
d = min(sdCapsule(...), sdTorus(...));
```

## Layer 3: revealing medium

Make the invisible law visible:

- fog bands
- rimlight
- edge glow
- scanline density
- moiré overlays
- chromatic aberration
- AO dirt in folds
- distance-based palette
- procedural material stripes

## Naming formula

```text
[Spatial lie] + [Architectural archetype]
```

Examples:

- Folded Vestibule
- Inversion Chapel
- Gravity Quilt Hall
- Recursive Hotel
- Symbolic Threshold
- Hyperbolic Backrooms Seed
