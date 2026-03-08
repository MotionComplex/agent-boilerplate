---
name: generate-spec
description: Reads docs/idea.md and produces docs/spec.md with problem statement, goals, scope, architecture, and success criteria. Use when the user has filled docs/idea.md and wants to generate a specification, or when asked to create a spec from an idea.
---

# Generate Spec

Transforms `docs/idea.md` into a structured `docs/spec.md`.

## When to use

- User has completed `docs/idea.md` and wants a spec
- User asks to "generate spec", "create spec", or "spec from idea"
- `docs/spec.md` is missing or outdated and user wants it refreshed

## Instructions

1. **Read** `docs/idea.md` fully. If it is empty or placeholder-only, ask the user to fill it first.

2. **Produce** `docs/spec.md` with these sections (fill from idea content):

   - **Problem statement** – What problem are we solving?
   - **Goals** – Bullet list of what we want to achieve
   - **Non-goals** – What we explicitly will not do
   - **Scope** – In scope / out of scope
   - **Architecture** – High-level structure, key components, data flow
   - **User flows / features** – Main flows or feature list
   - **Success criteria** – How we know we're done
   - **Tech decisions** – Key choices (framework, DB, etc.) if inferrable

3. **Preserve** the existing `docs/spec.md` template structure if the file already exists and has custom sections. Merge new content rather than overwriting blindly.

4. **Write** the result to `docs/spec.md`. Do not start implementation until the user approves the spec.

## Output format

Use markdown. Keep sections concise. Use bullet lists for goals, non-goals, and features.
