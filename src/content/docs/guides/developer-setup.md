# Developer Setup

Get your environment ready to run and contribute to the project.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installing Dependencies](#installing-dependencies)
- [Running the App Locally](#running-the-app-locally)
- [Recommended Setup](#recommended-setup)
- [Optional Tools](#optional-tools)
- [Git Basics for Contributors](#git-basics-for-contributors)

---

## Prerequisites

Before setting up the project locally, ensure you have the following tools installed:

- **Node.js (v18 or higher)** — [Download from nodejs.org](https://nodejs.org/en/download)  
  Includes **npm**, which is used to install project dependencies.

- **Git** — [Install instructions](https://git-scm.com/downloads)  
  Used for cloning and managing project source code.

- **Code Editor** — [Visual Studio Code](https://code.visualstudio.com/) recommended  
  Install extensions for:
  - ESLint (syntax and style checking)
  - Prettier (automatic formatting)
  - Stylelint (CSS linting, optional)

---

## Installing Dependencies

Clone the repository and install dependencies:

1. Clone the repo:

```bash
git clone https://github.com/v-gajjar/Minesweeper.git
```

2. Cd into the project folder:

```bash
cd Minesweeper
```

3. Install the node packages

```bash
npm i
```

---

## Running the App Locally

Start the development server:

```bash
npm run dev
```

Then open your browser to [http://localhost:5173](http://localhost:5173) (Vite default).

---

## Recommended Setup

- Use Node.js LTS for consistency.
- Enable format on save in VS Code.
- Keep Prettier and Stylelint configs aligned with the repo’s .prettierrc and .stylelintrc.json.
- Run lint checks locally before pushing:

1.  Run the linter:

```bash
npm run lint
```

---

## Optional Tools

For contributors who want to explore more:

- **Vitest** — run component and logic tests

1.  How to run the Vitest:
```bash
npm run test
```

Once your environment is set up, head over to the [Quick Start](https://github.com/v-gajjar/Minesweeper/wiki#quick-start)￼ guide to launch and explore the project.

---


## Git Basics for Contributors

### Create a New Branch

1.  How to create a new local branch:

```bash
git checkout -b feature/my-new-feature
```

### Switch Branches

1.  How to switch branches:

```bash
git checkout develop
```

### Pull the Latest Changes

1.  How to pull latest changes from origin:

```bash
git fetch origin
```

### Stage and Commit Changes

1.  Check the current status of your branch:

```bash 
git status 
```

2.  Add your modified files to the staging area:

```bash 
git add .
```

3.  Commit your changes with a descriptive message:

```bash 
git commit -m "Add new feature for flag counter"
```

### Push Your Branch

1. Push your local changes to the remote:

```bash
git push origin feature/my-new-feature
```

### Sync with Remote Changes

1.  Rebase your local branch with the latest changes:

```bash
git pull --rebase origin develop
```