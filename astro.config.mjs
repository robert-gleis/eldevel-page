// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://eldevel.de',
	base: '/',
	output: 'static',
	integrations: [
		sitemap(),
		tailwind()
	],
	image: {
		domains: ['eldevel.de', 'www.eldevel.de'],
	},
});
