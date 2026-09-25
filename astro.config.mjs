import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tinnova.com.br',
  integrations: [sitemap()],
});