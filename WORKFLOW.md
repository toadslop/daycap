# Development Workflow Rules

## Guidelines

- All changes must be small and focused
- One feature or fix per branch
- Prefer <100 lines changed
- Never exceed 500 lines in a single PR
- Avoid refactors unless explicitly requested
- Preserve existing behavior unless stated otherwise

## Workflow

1. Identify an open task from TODO.md
2. Create a new branch using the `git` cli
3. Implement the change
4. Mark the task as completed in [TODO.md](./TODO.md)
4. Push the change to GitHub using `git`
5. Open a PR using the GitHub CLI (`gh`)