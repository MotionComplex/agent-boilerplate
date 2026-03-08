---
name: generate-tasks
description: Reads docs/spec.md and produces agent-friendly docs/tasks.md with granular sub-tasks, concrete acceptance criteria, and implementation hints. Use when the user has a spec and wants a task breakdown for agents.
---

# Generate Tasks (Agent-Oriented)

Transforms `docs/spec.md` into an actionable, agent-friendly `docs/tasks.md`.

## When to use

- User has `docs/spec.md` and wants a task list
- User asks to "generate tasks", "create tasks", or "break down spec into tasks"
- `docs/tasks.md` is missing or outdated and user wants it refreshed

## Instructions

1. **Read** `docs/spec.md` fully. If it is empty or placeholder-only, ask the user to run `/generate-spec` first or fill the spec.

2. **Produce** `docs/tasks.md` with **agent-friendly** tasks. For each task:

   - **Granularity**: Break large features into sub-tasks (Task N.1, N.2, …). Each sub-task should be completable in one focused implementation step.
   - **Checkbox format**: `- [ ] **Task N** (or **Task N.M**): Short, concrete description`
   - **Acceptance**: Concrete, testable criteria. Avoid vague phrases like "works" or "integrated". Prefer: "Component X renders; clicking Y triggers Z; invalid input shows error state."
   - **File** (when applicable): Suggested file path or component location, e.g. `src/components/LocationPicker.tsx`
   - **Contract** (when applicable): Data types, API shapes, props. E.g. `onLocationChange(lat: number, lon: number) => void`
   - **Depends**: Note dependencies (Task N depends on Task M)

3. **Order** tasks by dependency: foundational work first (setup, schema, auth), then features, then polish.

4. **Preserve** the existing `docs/tasks.md` template structure if the file already exists and has custom formatting. Merge new content rather than overwriting blindly.

5. **Write** the result to `docs/tasks.md`. Implementation should follow this list.

6. **After tasks**, run or suggest `/generate-features` to produce Gherkin feature specs in `docs/features/` for key user flows.

## Output format

```markdown
## Task list

### Phase 1: Foundation

- [ ] **Task 1.1**: Create project scaffold
  - Acceptance: package.json, tsconfig, folder layout exist; framework chosen
  - File: project root
- [ ] **Task 1.2**: Configure build and dev scripts
  - Acceptance: `npm run dev` and `npm run build` work
  - Depends: Task 1.1

### Phase 2: Features

- [ ] **Task 2.1**: Create LocationPicker component
  - Acceptance: Map renders; click sets lat/lon; coordinates displayed
  - File: `src/components/LocationPicker.tsx`
  - Contract: `onLocationChange(lat: number, lon: number) => void`
- [ ] **Task 2.2**: Validate and persist coordinates
  - Acceptance: Reject lat ∉ [-90,90], lon ∉ [-180,180]; persist to URL/context
  - Depends: Task 2.1
```

Mark tasks as done with `[x]` when the user completes them.
