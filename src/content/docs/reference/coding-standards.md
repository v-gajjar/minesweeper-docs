---
title: Coding Standards
description: Coding conventions for the Minesweeper codebase to ensure clarity, consistency, and maintainability.
---

# Coding Standards

Consistent coding standards ensure maintainability, readability, and collaboration across the team.

---

## 1. Language and Framework

- **Language:** TypeScript  
- **Framework:** React (Vite)  
- **Styling:** CSS Modules

---

## 2. Naming Conventions

Use clear, consistent, and descriptive names that reflect the actual conventions used in this codebase.

### File & Folder Naming

| Type | Convention | Example |
|------|------------|---------|
| **Component folders** | PascalCase | `GameBoard/` |
| **Component files** | PascalCase | `GameBoard.tsx` |
| **Hooks** | camelCase, prefixed with `use` | `useGameLogic.ts` |
| **Interfaces (component-specific)** | `ComponentName.interface.ts` | `GameBoard.interface.ts` |
| **Utility files** | camelCase | `formatTimer.ts` |
| **CSS Modules** | PascalCase | `Cell.module.css` |

### CSS Class Naming

We follow what the codebase actually uses:  
➡ **camelCase**, not kebab-case.

Examples:

- `.cell`
- `.revealed`
- `.mine`
- `.exploded`
- `.flagged`

Correct:

```css
.cell.revealed { ... }
```

---

## 3. Code Formatting

- Use **Prettier** for consistent formatting  
- Run formatting before committing  
- Indentation: 2 spaces  
- Soft line limit: 100 characters  
- End files with a newline  

---

## 4. Linting and Style Rules

- **ESLint** for TypeScript/React best practices  
- **Stylelint** for CSS Modules  
- **Prettier** for formatting  

Run checks locally:

```bash
npm run lint
npm run lint:css
npm run format:check
```

---

## 5. Component Guidelines

- Keep components small, focused, and reusable  
- Extract logic into custom hooks when appropriate  
- Prefer functional components with Hooks  
- Avoid deep prop drilling — use context or composed components  
- Separate UI (presentational) and logic (container) when complexity grows  

---

## 6. TypeScript Practices

- Always type function parameters and return values  
- Use **interfaces** for component props and public shapes  
- Use **types** for unions and helpers  
- Avoid `any` — use `unknown` or proper types  
- Use `readonly` when working with immutable data  

---

## 7. Commits and Branches

### Commit Messages (Conventional Commits)

- `feat:` new feature  
- `fix:` bug fix  
- `refactor:` behavior unchanged  
- `docs:` documentation  
- `test:` tests  
- `chore:` tooling / maintenance  

Example:

```bash
feat: add timer display to GameBoard
```

### Branch Naming

- `feature/<short-description>`
- `fix/<short-description>`
- `docs/<short-description>`

Example:

```bash
git checkout -b feature/add-timer
```

---

## 8. Testing

- Use **Vitest** + React Testing Library  
- Test logic-heavy components and hooks  
- Focus on behavior, not implementation details  
- Ensure tests pass before pushing:

```bash
npm test
```

---

## 9. Documentation & Comments

- Keep code self-explanatory  
- Comment only when needed for clarity  
- Use JSDoc for complex functions or interfaces  
- Update comments when logic changes  

---

## 10. Pull Requests

- Ensure lint, format, and tests pass  
- Include screenshots for UI changes  
- Reference related issues  
- Keep PRs small and focused  
