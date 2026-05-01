# Raymarch Debugging Rituals

When a raymarched scene turns into black nothing or neon diarrhea, do this.

## 1. Render distance as grayscale

```glsl
float d = sceneDistance(p);
fragColor = vec4(vec3(d * 0.2), 1.0);
```

## 2. Render steps

```glsl
col = vec3(float(steps) / float(MAX_STEPS));
```

If everything is white, your SDF is too slow or rays are not hitting.

## 3. Render normals

```glsl
col = normal * 0.5 + 0.5;
```

If normals sparkle like cursed sand, your epsilon is too small or SDF is discontinuous.

## 4. Disable all domain warps

Comment out fold/twist/invert. Confirm primitives work. Re-add operations one bastard at a time.

## 5. Clamp distance

For dangerous warps:

```glsl
d = max(d, 0.001);
```

## 6. Check scale

Common mistake: camera is inside geometry or scene is 100x too big.

## 7. Use fog to reveal depth

If the room exists but is unreadable, add simple fog.

## 8. Color by material id

Never debug everything with final lighting. Material IDs tell the truth before lighting starts lying.

## Emergency diagnosis table

| Symptom | Likely cause | Fix |
|---|---|---|
| black screen | camera misses scene | move camera back, add floor |
| white screen | too much glow/fog | clamp color, lower density |
| salt noise | normal epsilon issue | increase epsilon |
| slow browser | too many steps | lower max steps, add bounding volumes |
| holes in walls | invalid SDF from warp | use conservative distance, clamp |
| flicker | time warp too strong | reduce animation amplitude |
| melted garbage | too many effects | isolate core law |
