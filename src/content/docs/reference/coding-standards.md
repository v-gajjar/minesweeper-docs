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
- **Styling:** CSS Modules + Global CSS

---

## 2. Naming Conventions

Use clear and consistent naming that follows our actual codebase patterns.

---

## 2.1 File & Folder Naming

### Core rules

- **Component folders and component files:** **PascalCase**
- **Non-component `.ts` files (utilities, hooks, services, etc.):** **camelCase**

### Conventions

| Type | Convention | Example |
|------|------------|---------|
| **Component folders** | PascalCase | `ResultModal/` |
| **Component files** | PascalCase | `ResultModal.tsx` |
| **Component props / interfaces** | Co-located `.interface.ts` or `.interfaces.ts` | `GameBoard.interface.ts` |
| **Hooks** | camelCase, prefixed with `use` | `useMinesweeperGame.ts` |
| **Utility files** | camelCase | `boardUtils.ts` |
| **CSS Modules** | PascalCase + `.module.css` | `ResultModal.module.css` |
| **Global CSS files** | kebab-case | `app.css` |

Notes:
- Interface file naming (`.interface.ts` vs `.interfaces.ts`) is not yet standardized. Follow the existing pattern when modifying files.

---

## 2.2 CSS Class Naming

### ✔ All CSS class names use **kebab-case**
This applies to both:

- CSS modules
- Global CSS

### ✔ Referencing classes in React components:
- **CSS module classes** → camelCase (auto-transformed by build tools)
- **Global CSS classes** → kebab-case (literal class names)

### Examples

#### CSS Module (`ResultModal.module.css`)

```css
.result-modal { ... }
.result-modal-button { ... }
.modal-overlay { ... }
```

#### Component usage

```tsx
import styles from "./ResultModal.module.css";

<div className={styles.resultModal}>...</div>
<button className={styles.resultModalButton}>...</button>
```

#### Global CSS (`app.css`)

```css
.header-game-title { ... }
```

```tsx
<h1 className="header-game-title">Minesweeper</h1>
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

- **ESLint** for TypeScript and React
- **Stylelint** for CSS Modules & global CSS
- **Prettier** for formatting

Local checks:

```bash
pnpm run lint
pnpm run lint:css
pnpm run format:check
```

---

## 5. Component Guidelines

- Keep components small and focused
- Extract shared or complex logic into custom hooks
- Prefer functional components with Hooks
- Avoid deep prop drilling — use context when helpful
- Separate UI and logic when components grow complex

---

## 6. TypeScript Practices

- Type all function parameters and return values
- Use **interfaces** for component props
- Use **types** for unions and utilities
- Avoid `any`; use `unknown` or proper types
- Use `readonly` where appropriate

---

## 7. Commits and Branches

### Commit Messages (Conventional Commits)

- `feat:` new feature
- `fix:` bug fix
- `refactor:` internal change
- `docs:` documentation updates
- `test:` tests
- `chore:` tooling, configs

Example:

```bash
feat: add animations to result modal
```

### Branch Naming

- `feature/<short-description>`
- `fix/<short-description>`
- `docs/<short-description>`

Example:

```bash
git checkout -b feature/add-result-modal
```

---

## 8. Testing

- Use **Vitest** + React Testing Library
- Focus on behavior, not implementation details
- Test logic-heavy hooks and components

```bash
pnpm test
```

---

## 9. Documentation & Comments

- Keep code self-explanatory
- Use comments only when needed
- Use JSDoc for complex logic
- Update comments when behavior changes

---

## 10. Pull Requests

- Ensure lint, formatting, and tests pass
- Include screenshots for UI changes
- Reference related issues
- Keep PRs focused and scoped
