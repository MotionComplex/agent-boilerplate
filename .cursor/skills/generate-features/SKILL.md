---
name: generate-features
description: Reads docs/spec.md and docs/tasks.md and produces Gherkin feature specs in docs/features/ for key user flows. Use after generate-tasks to give agents executable, scenario-based acceptance criteria.
---

# Generate Features (Gherkin)

Produces Gherkin `.feature` files from `docs/spec.md` and `docs/tasks.md` for agent-friendly, scenario-based acceptance criteria.

## When to use

- User has `docs/spec.md` and `docs/tasks.md` and wants feature specs
- User asks to "generate features", "create gherkin specs", or "add BDD scenarios"
- After `/generate-tasks` to complement tasks with executable scenarios

## Instructions

1. **Read** `docs/spec.md` and `docs/tasks.md`. If either is empty, ask the user to run `/generate-spec` and `/generate-tasks` first.

2. **Create** `docs/features/` if it does not exist.

3. **Produce** one `.feature` file per major user flow or feature area. Map from spec's "User flows / features" and tasks. Each file:
   - `Feature:` – short title matching the flow
   - `Scenario:` blocks with `Given` / `When` / `Then` steps
   - Steps must be concrete and testable (no vague "user sees something")
   - Reference actual UI elements, data, and outcomes

4. **Write** each file to `docs/features/<kebab-case-name>.feature`.

5. **Link** features to tasks: add a `@task-N` or `@task-N.M` tag to scenarios so agents can trace back.

## Output format

```gherkin
# docs/features/location-placement.feature
@task-5.1 @task-5.2
Feature: Location placement for session planning

  Scenario: User places pin on map
    Given the user is on the session planner page
    When they click on the map at latitude 52.52 and longitude 13.40
    Then the selected coordinates are displayed
    And the coordinates are persisted for planning
    And object visibility is recalculated for the new location

  Scenario: User enters invalid coordinates
    Given the user is on the session planner page
    When they enter latitude 100 and longitude 200
    Then an error message is shown
    And the invalid coordinates are not persisted
```

## Naming

- File: `docs/features/<feature-name>.feature` (kebab-case)
- Feature name: matches user flow from spec
- Scenarios: one per distinct path or edge case
