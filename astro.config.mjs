import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tinnova.net.br',
  integrations: [sitemap()],
});