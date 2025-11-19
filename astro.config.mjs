// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Add real guide entries here later, e.g.:
						// { label: 'Getting Started', slug: 'guides/getting-started' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
