// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://csehrafin.github.io",
  vite: {
      // @ts-ignore
      plugins: [tailwindcss()],
    },

  integrations: [sitemap(), mdx()],
});