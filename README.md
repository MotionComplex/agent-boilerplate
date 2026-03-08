# Project-Starter

Boilerplate for starting projects with a standardized AI workflow: **idea → spec → tasks → implementation**.

## Quick start

1. **Copy** this directory into your new project (or install as a Cursor plugin).
2. **Fill** `docs/idea.md` with What, Why, scope, and constraints.
3. **Run** `/generate-spec` in Cursor chat → produces `docs/spec.md`.
4. **Run** `/generate-tasks` → produces `docs/tasks.md`.
5. **Implement** following the task list.

Or run `/start-project` after filling `docs/idea.md` to do steps 3–4 in one go.

## Workflow

```
docs/idea.md  →  docs/spec.md  →  docs/tasks.md  →  implementation
     ↑                ↑                ↑
  You fill      /generate-spec    /generate-tasks
```

## Skills

| Skill             | Use when                                     |
| ----------------- | -------------------------------------------- |
| `/generate-spec`  | `docs/idea.md` is filled; you want a spec    |
| `/generate-tasks` | `docs/spec.md` exists; you want a task list  |
| `/start-project`  | You want the full flow (idea → spec → tasks) |

## Roles

- **Architect** – Tech stack, structure (rule: 100-tech-stack)
- **Designer** – UI/UX (rule: 200-ui-ux)
- **QA** – Testing (rule: 300-testing)

See [AGENTS.md](AGENTS.md) for more detail.

## Install as plugin

This repo is a Cursor plugin. Install from Git or add to your team marketplace:

- **From Git**: Cursor Settings → Plugins → Add from URL
- **Team marketplace**: Dashboard → Settings → Plugins → Import (Teams/Enterprise)
