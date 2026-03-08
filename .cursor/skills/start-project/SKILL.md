---
name: start-project
description: Runs the full idea-to-spec-to-tasks workflow. Reads docs/idea.md, generates docs/spec.md, then docs/tasks.md. Use when the user wants to bootstrap a new project from an idea, or when asked to "start project" or "run the workflow".
---

# Start Project

Chains idea → spec → tasks in one flow.

## When to use

- User has filled `docs/idea.md` and wants the full workflow
- User asks to "start project", "bootstrap", or "run the workflow"
- New project setup from scratch

## Instructions

1. **Check** `docs/idea.md`. If empty or placeholder-only, ask the user to fill it first. Do not proceed with empty idea.

2. **Run generate-spec**:
   - Read `docs/idea.md`
   - Produce `docs/spec.md` with: problem statement, goals, non-goals, scope, architecture, user flows, success criteria, tech decisions
   - Write to `docs/spec.md`

3. **Run generate-tasks**:
   - Read `docs/spec.md`
   - Produce `docs/tasks.md` with ordered tasks, acceptance criteria, dependencies
   - Write to `docs/tasks.md`

4. **Summarize** for the user: spec and tasks are ready. Suggest they review `docs/spec.md` before implementation. Do not start implementation unless explicitly requested.

## Error handling

- If `docs/idea.md` is missing or empty: stop and ask user to fill it
- If user wants to skip spec: explain that spec is required for tasks; offer to generate a minimal spec from a brief description
