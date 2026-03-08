---
name: spec-to-tasks
description: Read docs/spec.md and generate agent-friendly docs/tasks.md with granular sub-tasks, acceptance criteria, and implementation hints.
---

# Spec to Tasks

1. Read `docs/spec.md` fully.
2. If empty or placeholder-only, ask the user to run idea-to-spec first or fill the spec.
3. Produce `docs/tasks.md` with **agent-friendly** tasks:
   - Granular sub-tasks (Task N.1, N.2) for large features
   - Checkbox format: `- [ ] **Task N** (or **Task N.M**): Description`
   - Acceptance: concrete, testable criteria
   - File: suggested file path when applicable
   - Contract: data types, props, API shapes when applicable
   - Depends: task dependencies
4. Write the result to `docs/tasks.md`.
5. Suggest running `/generate-features` to add Gherkin specs in `docs/features/`.
6. Implementation should follow this list.
