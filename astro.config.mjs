// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cse.iitgn.ac.in',
  integrations: [mdx(), sitemap(), react()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Imprima',
      cssVariable: '--font-imprima',
      weights: ['400'],
    },
    {
      provider: fontProviders.google(),
      name: 'Rubik',
      cssVariable: '--font-rubik',
      weights: ['400', '500', '600', '700'],
    },
    {
      provider: fontProviders.google(),
      name: 'EB Garamond',
      cssVariable: '--font-eb-garamond',
      weights: ['400', '500', '600', '700'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
