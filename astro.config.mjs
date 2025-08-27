// // @ts-check
// import { defineConfig } from 'astro/config';
// import tailwindcss from "@tailwindcss/vite";
// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()],
//   },
// });

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';

export default defineConfig({
  base: '/', 
  site: 'https://csehrafin.github.io/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()]
});