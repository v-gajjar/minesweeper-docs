// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://vinayscode.github.io/',
  base: '/minesweeper-docs',
  integrations: [
    starlight({
      title: 'Minesweeper Docs',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/v-gajjar/Minesweeper',
        },
      ],
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: 'Guides',
          items: [],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  // Optional – only if you want to hide that UNUSED_EXTERNAL_IMPORT warning
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, handler) {
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT') {
            return;
          }
          handler(warning);
        },
      },
    },
  },
});