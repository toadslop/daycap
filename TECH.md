# Technology & Architecture Rules

This document defines the allowed technologies and architectural constraints
for this repository. Copilot-generated code MUST follow these rules.

---

## 1. Programming Languages

### Allowed

- **TypeScript**
  - All application code MUST be written in TypeScript
  - Strict typing is preferred
  - Avoid `any` unless explicitly justified

### Disallowed

- JavaScript (non-typed)
- Rust
- Python
- Go
- Any other language not explicitly listed

---

## 2. Frontend Framework

### Framework

- **React**
- Functional components only
- Hooks-based state management

### Rules

- Do NOT use class components
- Do NOT introduce custom frameworks
- Prefer simple, idiomatic React patterns

---

## 3. State Management

### Primary State

- Local component state (`useState`)
- Reducers (`useReducer`) when complexity increases

### Rules

- No global state libraries unless explicitly requested
- No Redux, MobX, Zustand, etc.
- State updates must be synchronous and predictable

---

## 4. Persistence

### Primary Storage

- Browser-based storage:
  - `localStorage` OR
  - `IndexedDB` (via a small wrapper if needed)

### Rules

- Data must be stored locally by default
- Persistence must be transparent to the user
- No cloud sync unless explicitly requested

---

## 5. Backend / Server Code

### Current Policy

- No backend required initially
- Application must function fully without a server

### If Backend Is Introduced

- Must be implemented as **Vercel serverless functions**
- Must be written in TypeScript
- Must remain optional and minimal

---

## 6. Deployment Target

### Hosting

- **Vercel**

### Rules

- Application must be deployable via `vercel deploy`
- No custom infrastructure
- No Docker
- No VM-based deployment

---

## 7. Build & Tooling

### Tooling

- Package manager: `npm` or `pnpm`
- Build system: Vite or Next.js (choose one and stay consistent)

### Rules

- Do not introduce alternative build tools
- Avoid unnecessary dependencies
- Prefer native platform APIs

---

## 8. Styling

### Approach

- Plain CSS, CSS Modules, or inline styles
- Utility-first frameworks only if explicitly approved

### Rules

- No heavy CSS frameworks by default
- Keep styling minimal and readable
- Prioritize mobile-first layouts

---

## 9. Code Organization

### Structure

- Feature-oriented file organization
- Avoid deep nesting
- Prefer clarity over clever abstractions

### Rules

- Do not introduce unused layers
- No premature abstractions
- No speculative generalization

---

## 10. Testing

### Current Policy

- Tests are optional initially

### If Tests Are Added

- Use lightweight, standard tools
- Avoid complex test frameworks unless necessary

---

## 11. Security & Privacy

- No tracking by default
- No third-party analytics unless explicitly requested
- No sending user data off-device without consent

---

## 12. Performance Constraints

- App must remain responsive on mobile devices
- Avoid blocking the main thread
- Avoid unnecessary re-renders

---

## 13. Change Discipline

- Small, narrowly scoped changes only
- One feature or fix per branch
- Avoid refactors unless explicitly requested

---

## 14. When In Doubt

If a technical decision is unclear:
- Prefer the simplest solution
- Prefer local-first behavior
- Ask for clarification rather than guessing
