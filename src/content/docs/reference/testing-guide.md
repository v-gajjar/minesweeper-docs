The Minesweeper project includes an automated test suite to verify game logic, UI behavior, and component reliability.  
All tests are written with **[Vitest](https://vitest.dev/)** — a fast, Vite-native testing framework designed for modern React + TypeScript projects.

---

## Running Tests

To execute all tests locally, run:

```bash
npm run test
```

This command runs Vitest in non-interactive (CI) mode and outputs results directly to the console.
You’ll see a summary of passed, failed, and skipped tests.

---

## Test Coverage

To view coverage information:

```bash
npm run test -- --coverage
```

This generates a detailed report showing which files, lines, and branches are tested.
Coverage results are displayed in the terminal and saved to the /coverage directory.

---

## Writing Tests

All test files follow this convention:

```plaintest
src/
 ├── components/
 │    └── GameBoard/
 │         ├── GameBoard.tsx
 │         └── GameBoard.test.tsx
 └── ...
```

### Guidelines:

- Each component or module should have a matching *.test.tsx or *.test.ts file.
- Use React Testing Library for component rendering and user interactions.
- Use Vitest’s describe, it, and expect syntax for assertions.
- Keep tests focused on behavior, not implementation details.

Example:

```bash
import { render, screen } from '@testing-library/react';
import { GameBoard } from '@/components/GameBoard/GameBoard';

describe('GameBoard', () => {
  it('renders the correct number of cells', () => {
    render(<GameBoard rows={9} cols={9} mines={10} />);
    const cells = screen.getAllByTestId('cell');
    expect(cells.length).toBe(81);
  });
});
```

---

## Common Commands

| Task | Command |
|------|----------|
| Run all tests | `npm run test` |
| Run a single test file | `npx vitest run src/components/GameBoard/GameBoard.test.tsx` |
| Run tests in watch mode | `npx vitest` |
| Show coverage report | `npm run test -- --coverage` |

---

## Best Practices

- Test user behavior rather than implementation details.
- Keep tests isolated: each test should run independently.
- Use descriptive test names: they should read like short sentences.
- Mock dependencies (like timers or random functions) where deterministic results are required.
- Run tests before every pull request to catch regressions early.

---

## Continuous Integration

All tests are automatically executed in the project’s GitHub Actions workflow to ensure every pull request maintains stability.
Contributors should confirm all tests pass locally before submitting new code.

---

Additional Resources

- [Vitest Documentation](https://vitest.dev/guide/)
- [Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro)
- [Contributing Guide](https://github.com/v-gajjar/Minesweeper/blob/develop/CONTRIBUTING.md)