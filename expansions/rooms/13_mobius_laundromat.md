# Möbius Laundromat

## Concept

A fluorescent laundromat corridor whose washers rotate the coordinate system and return the camera mirrored.

## Core wrongness

This room should have one dominant impossible law. Do not decorate first. Establish the law, then let materials and fog obey or disobey it.

## Geometry ingredients

- one readable architectural primitive
- one warped coordinate field
- one obvious threshold or attraction point
- one fog layer that makes depth readable
- one material contradiction

## GLSL sketch

```glsl
float map13(vec3 p) {
    vec3 q = p;
    // TODO: apply this room's domain injury.
    // q = twist(q, ...);
    // q = repeat(q, ...);
    // q = portalSwirl(q, ...);

    float floorD = q.y + 1.0;
    float wallD = min(abs(q.x) - 2.0, abs(q.z) - 4.0);
    float roomD = min(floorD, -wallD);

    return roomD;
}
```

## Visual targets

- legible enough to feel like a place
- wrong enough to feel like the place is doing math behind your back
- no generic abstract blob unless the blob is the architectural law

## Prompt seed

A raymarched impossible liminal room called **Möbius Laundromat**, a fluorescent laundromat corridor whose washers rotate the coordinate system and return the camera mirrored. Volumetric fog, soft boolean architecture, SDF distance fields, wrong physics, haunted navigable math, surreal but structured, luminous threshold, phosphor bloom, recursive spatial contradiction.
