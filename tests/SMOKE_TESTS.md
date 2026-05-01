# Smoke Tests

These are not formal unit tests. They are sanity rituals.

## Browser smoke test

For each `standalone/*.html`:

- opens in Chrome/Safari/Firefox
- no console shader compile errors
- image appears within 2 seconds
- mouse changes view
- animation runs
- resizing does not break aspect ratio

## Visual smoke test

A room passes if:

- it has a floor or spatial anchor
- it has visible depth
- the central impossible law is apparent
- fog helps, not hides
- it does not look like generic shader confetti
- it can be described in one sentence

## Performance smoke test

On an older machine:

- target 30 fps for simple rooms
- accept 15–30 fps for heavy fog/portal rooms
- avoid max steps above 160 unless needed
- reduce shadow steps before reducing main scene readability

## Repo smoke test

- `README.md` explains the project
- `GITHUB_REPO_STRUCTURE.md` matches folders
- all new files are plain text or local HTML
- no external build dependency required for demos
