---
name: spec-to-tasks
description: Deploy the spec-to-tasks workflow. Read docs/spec.md and generate docs/tasks.md.
---

# Spec to Tasks

1. Read `docs/spec.md` fully.
2. If empty or placeholder-only, ask the user to run idea-to-spec first or fill the spec.
3. Produce `docs/tasks.md` with ordered tasks in checkbox format: `- [ ] **Task N**: Description`.
4. Add acceptance criteria under each task. Note dependencies where applicable.
5. Write the result to `docs/tasks.md`.
6. Implementation should follow this list.
