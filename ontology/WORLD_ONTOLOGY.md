# World Ontology for Raymarched Wrong Physics

This repo is not merely a shader collection. It is a grammar for making navigable impossible spaces.

## Primary entities

### Room
A bounded or seemingly bounded navigable field. A room may be:
- a chamber
- a corridor
- a vestibule
- a chapel
- a staircase
- a pool
- a mouth
- an atrium
- a hotel loop
- a basement of fake memory

### Domain
The coordinate field before geometry is sampled.

Every room begins by damaging `p`, the position vector.

Common domain injuries:

```glsl
p = fold(p);
p = twist(p);
p = repeat(p);
p = invert(p);
p = bend(p);
p = portalWarp(p);
p = recursiveRemap(p);
```

The room is not wrong because the object is weird.  
The room is wrong because the space itself has poor boundaries and suspicious motives.

### Constraint
The rule that makes the room feel like it has physics.

Examples:
- gravity points sideways
- all verticals bend toward a symbol
- distances get smaller when approached
- surfaces flee the camera
- fog has memory
- portals change handedness
- the floor is an attractor, not a plane
- reflections render rooms that are not present

### Witness
The viewer/camera/ray itself.

In this repo, the camera is not neutral. It may:
- drift
- hesitate
- orbit the wrong center
- be pulled by invisible mass
- snap into false symmetry
- believe a portal
- suffer coordinate amnesia
- become folded with the room

### Threshold
A boundary with behavior.

Threshold types:
- door
- membrane
- arch
- slit
- wound
- mirror
- glyph
- soft boolean seam
- fog wall
- event horizon
- recursive error

### Haunting
The emotional output of coherent wrongness.

Haunting emerges when:
- the geometry is readable enough to seem architectural
- the domain operation violates expectation
- lighting reveals depth but refuses certainty
- the camera behaves like it is being watched
- repetition implies intention

## The Four-Layer Room Model

Every room should be documented with:

```json
{
  "surface": "what geometry is sampled",
  "domain": "how space is warped before sampling",
  "physics": "what impossible rule dominates",
  "haunting": "what emotional effect the room creates"
}
```

## Recommended room formula

1. Start with one architectural primitive.
2. Add one major domain operation.
3. Add one wrong-physics law.
4. Add one fog/lighting contradiction.
5. Add one symbolic threshold.
6. Make it navigable.
7. Do not overdecorate until the core wrongness reads clearly.

Bad: thirty tricks at once.  
Good: one impossible law, executed like a little bastard.
