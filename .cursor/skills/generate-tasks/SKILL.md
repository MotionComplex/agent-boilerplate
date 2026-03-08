---
name: generate-tasks
description: Reads docs/spec.md and produces docs/tasks.md with ordered tasks, acceptance criteria, and dependencies. Use when the user has a spec and wants a task breakdown, or when asked to create tasks from a spec.
---

# Generate Tasks

Transforms `docs/spec.md` into an actionable `docs/tasks.md`.

## When to use

- User has `docs/spec.md` and wants a task list
- User asks to "generate tasks", "create tasks", or "break down spec into tasks"
- `docs/tasks.md` is missing or outdated and user wants it refreshed

## Instructions

1. **Read** `docs/spec.md` fully. If it is empty or placeholder-only, ask the user to run `/generate-spec` first or fill the spec.

2. **Produce** `docs/tasks.md` with ordered, actionable tasks. For each task:
   - Use checkbox format: `- [ ] **Task N**: Description`
   - Add acceptance criteria under each task (indented or sub-bullet)
   - Note dependencies where Task N depends on Task M

3. **Order** tasks by dependency: foundational work first (setup, schema, auth), then features, then polish.

4. **Preserve** the existing `docs/tasks.md` template structure if the file already exists and has custom formatting. Merge new content rather than overwriting blindly.

5. **Write** the result to `docs/tasks.md`. Implementation should follow this list.

## Output format

```markdown
## Task list

- [ ] **Task 1**: Setup project structure
  - Acceptance: package.json, tsconfig, folder layout exist
- [ ] **Task 2**: Implement auth
  - Acceptance: login/logout works, tokens validated
...
```

Mark tasks as done with `[x]` when the user completes them.
