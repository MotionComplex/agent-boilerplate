# Project-Starter

Boilerplate for starting projects with a standardized AI workflow: **idea → spec → tasks → implementation**.

## Quick start

```bash
npx create-agent-boilerplate my-app
cd my-app
```

Open in Cursor, then:

1. **Fill** `docs/idea.md` with What, Why, scope, and constraints.
2. **Run** `/generate-spec` in Cursor chat → produces `docs/spec.md`.
3. **Run** `/generate-tasks` → produces `docs/tasks.md`.
4. **Implement** following the task list.

Or run `/start-project` after filling `docs/idea.md` to do steps 2–3 in one go.

**Alternatives:** `npx create-agent-boilerplate` (prompts for name) · `npx --yes degit MotionComplex/agent-boilerplate#v1.0.0 my-app` · copy this repo or install as Cursor plugin.

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
