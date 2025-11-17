# Minesweeper Docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This repository contains the **official documentation website** for the Minesweeper project.  
It replaces the old GitHub Wiki and provides a clean, searchable, and easy-to-maintain documentation hub built with **Astro + Starlight**.

---

## About This Site

This docs site includes:

- **Guides** (Game Rules, Developer Setup, Contribution Flow)
- **Reference Material** (Architecture, File Map, Testing Guide, Coding Standards)
- **Project conventions** (Issue Labels, UX notes, future design docs)
- A rich landing page (`index.mdx`)
- Auto-generated sidebar + dark mode + search

All documentation pages live inside:

```
src/content/docs/
```

---

## Project Structure

```
src/
  content/
    docs/
      guides/      → Tutorials & walkthroughs
      reference/   → Technical documentation & standards
      index.mdx    → Homepage for the docs site
public/
astro.config.mjs
```

This organization helps contributors quickly find where a new page should go.

---

## Commands

All commands run from the project root:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:4321`       |
| `npm run build`           | Build production site into `./dist/`             |
| `npm run preview`         | Preview the production build locally             |
| `npm run astro ...`       | Run Astro CLI commands (`astro add`, etc.)       |
| `npm run astro -- --help` | Show full Astro CLI help                          |

---

## Deployment

This site is deployed automatically whenever changes are pushed to the `main` branch.  
Your hosting provider (Vercel, GitHub Pages, or Netlify) will:

- Install dependencies  
- Run the production build  
- Deploy the updated site  

If needed, add your specific deployment target here.

---

## Contributing

To add or update documentation:

1. Add or edit a file inside [src/content/docs/](src/content/docs)
2. Include frontmatter at the top:

   ```md
   ---
   title: Page Title
   description: Short summary of the page.
   ---
   ```

3. Use lowercase hyphenated filenames (e.g., `game-rules.md`)
4. Commit and push your changes  
   PRs welcome!

---

## Want to Learn More?

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)

---

## Related Repositories

- **Main Minesweeper Game:** https://github.com/v-gajjar/Minesweeper  
- **Docs Site (this repo):** _you are here_
