// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://robert-gleis.github.io',
	base: process.env.NODE_ENV === 'production' ? '/eldevel-page' : '/',
	output: 'static',
	integrations: [
		sitemap(),
		tailwind()
	],
	image: {
		domains: ['robert-gleis.github.io'],
	},
});
