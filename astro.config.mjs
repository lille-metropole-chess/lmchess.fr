import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';
import keystatic from '@keystatic/astro';

import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

import mailObfuscation from 'astro-mail-obfuscation';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [react(), markdoc(), keystatic(), partytown(), sitemap(), mailObfuscation(), robotsTxt()],

  vite: {
    plugins: [tailwindcss()],
  },
});