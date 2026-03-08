# create-agent-boilerplate

Scaffold a new project with the [agent-boilerplate](https://github.com/MotionComplex/agent-boilerplate) workflow.

## Usage

```bash
npx create-agent-boilerplate
```

Prompts for project name, then scaffolds into that directory.

**Non-interactive:**
```bash
npx create-agent-boilerplate my-app
```

## What you get

- `.cursor/` rules, skills, commands, agents, hooks
- `docs/idea.md`, `spec.md`, `tasks.md` templates
- Cursor plugin manifest

Fill `docs/idea.md`, then run `/generate-spec` and `/generate-tasks` in Cursor.
