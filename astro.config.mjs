import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tinnova.com.br',
  i18n: {
    locales: ['pt-BR', 'en', 'es'],
    defaultLocale: 'pt-BR',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt-BR',
        locales: {
          'pt-BR': 'pt-BR',
          en: 'en',
          es: 'es',
        },
      },
    }),
  ],
  build: {
    // Page CSS is small (~8-12kb); inlining it avoids extra render-blocking
    // <link rel="stylesheet"> round-trips for styles needed on first paint.
    inlineStylesheets: 'always',
  },
});