import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';

import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

import mailObfuscation from 'astro-mail-obfuscation';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [react(), markdoc(), keystatic(), partytown(), sitemap(), mailObfuscation(), robotsTxt()],

  vite: {
    plugins: [tailwindcss()],
  },
});