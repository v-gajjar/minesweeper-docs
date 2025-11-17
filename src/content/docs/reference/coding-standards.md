# Coding Standards

Consistent coding standards ensure maintainability, readability, and collaboration across the team.

---

## 1. Language and Framework

- **Language:** TypeScript
- **Framework:** React with Vite
- **Styling:** CSS Modules

---

## 2. Naming Conventions

Use clear, consistent, and descriptive names.

| Type | Convention | Example |
|------|-------------|----------|
| Components | PascalCase | `GameBoard.tsx` |
| Hooks | camelCase, prefixed with `use` | `useGameLogic.ts` |
| Interfaces | Prefix with `I` | `IGameState` |
| CSS Classes | kebab-case | `.cell-revealed` |
| Files/Folders | kebab-case | `remaining-flags-counter/` |
| Constants | UPPER_SNAKE_CASE | `MAX_MINES` |

---

## 3. Code Formatting

- Use **Prettier** for consistent formatting.  
- Run `npm run format` before committing.
- Indentation: 2 spaces  
- Line length: 100 characters (soft limit)
- End files with a newline

---

## 4. Linting and Style Rules

- **ESLint** enforces JavaScript/TypeScript best practices.
- **Stylelint** enforces CSS rules and class naming.
- **Prettier** ensures consistent formatting across all files.

Run checks locally:

```bash
npm run lint
npm run lint:css
npm run format:check
```

## 5. Component Guidelines

- Keep components small and focused on a single responsibility.
- Extract logic into custom hooks when reusable or complex.
- Prefer functional components and React Hooks.
- Avoid deep prop drilling; use context or state management when needed.
- Separate UI (presentational) and logic (container) layers.

---

## 6. TypeScript Practices

- Always type function parameters and return values.
- Prefer interfaces for public shapes and types for unions or utility definitions.
- Avoid any — use unknown or define proper types.
- Use readonly when appropriate to protect immutable data.

---

##7. Commits and Branches

- Follow Conventional Commits:
	- feat: new feature
	- fix: bug fix
	- refactor: code change without behavior change
	- docs: documentation update
	- test: adding or updating tests
	- chore: tooling or maintenance

Example:

```bash
feat: add timer component to dashboard
```

- Branch naming:
	- feature/<short-description>
	- fix/<short-description>
	- docs/<short-description>

Example:

```bash
git checkout -b feature/timer-component
```

---

## 8. Testing

- Use Vitest with React Testing Library.
- Write tests for all logic-heavy components and hooks.
- Focus on user behavior, not implementation details.
- Ensure tests run cleanly before pushing:

```bash
npm test
```

---

## 9. Documentation and Comments

- Keep code self-explanatory; comment only when necessary.
- Use JSDoc-style comments for complex functions or interfaces.
- Update inline documentation when logic changes.

---

## 10. Pull Requests

- Ensure all lint, test, and format checks pass.
- Include screenshots for UI changes.
- Reference related issues in the PR description.
- Keep changes small and focused.
