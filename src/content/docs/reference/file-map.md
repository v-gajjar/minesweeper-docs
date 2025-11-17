---
title: File Map
description: A structured overview of the Minesweeper project’s directory layout and what each major folder contains.
---

# File Map

This page provides a clear, structured look at the Minesweeper repository.  
Use it to understand where core logic lives, how components are organized, and where to add new features.

---

## Project Structure

```plaintext
.
├── .github
│   ├── ISSUE_TEMPLATE/         # GitHub issue templates for bugs, docs, features, etc.
│   ├── pull_request_template.md
│   └── workflows/
│       └── build-checks.yaml   # Automated linting and type checks
├── .gitignore
├── .prettierignore
├── .prettierrc.yml             # Prettier configuration
├── .stylelintignore
├── .stylelintrc.json           # Stylelint rules for CSS
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── CONTRIBUTORS.md
├── Dockerfile                  # Optional container configuration for local or CI use
├── eslint.config.js            # ESLint configuration
├── globals.d.ts                # Global TypeScript types (if needed)
├── index.html                  # Vite root HTML
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx                 # Root application component
│   ├── assets/                 # Images, GIFs, and static media
│   ├── components/
│   │   └── feature/            # Grouped feature-specific React components
│   │       ├── DifficultySelect/
│   │       ├── GameBoard/
│   │       ├── RemainingFlagsCounter/
│   │       └── ResultModal/
│   ├── config/
│   │   └── gameDifficultyLevelSettings.ts  # Bomb count / grid size per difficulty
│   ├── index.css
│   ├── main.tsx                # React/Vite entry point
│   ├── minesweeperUtils.ts     # Core game state + reducer utilities
│   ├── types.ts                # Shared TypeScript types
│   ├── utils/                  # More granular helpers for board + cell logic
│   │   ├── boardUtils.ts
│   │   ├── cellUtils.ts
│   │   ├── mineUtils.ts
│   │   └── index.ts
│   └── vite-env.d.ts
├── tests/
│   └── unit/                   # Unit tests (Vitest)
│       ├── App.test.jsx
│       ├── Board.test.jsx
│       └── GameBoard.test.jsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts              # Vite configuration for build + dev