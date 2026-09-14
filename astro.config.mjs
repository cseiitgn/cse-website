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
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: ['400', '500', '600', '700'],
      subsets: ['latin'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
