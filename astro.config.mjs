// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.eldevel.de',
	base: '/',
	output: 'static',
	integrations: [
		sitemap(),
		tailwind()
	],
	image: {
		domains: ['www.eldevel.de'],
	},
});
