import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const solucoes = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/solucoes' }),
  schema: z.object({
    name: z.string(),
    contactLabel: z.string(),
    title: z.string(),
    description: z.string(),
    hero: z.object({
      h1: z.string(),
      lead: z.string(),
      secondaryLinkText: z.string(),
      image: z.object({ src: z.string(), alt: z.string() }),
    }),
    challengeText: z.string(),
    cenario: z.object({
      h2: z.string(),
      body: z.array(z.string()),
      image: z.object({ src: z.string(), alt: z.string() }),
    }),
    solucao: z.object({
      lines: z.tuple([z.string(), z.string()]),
      body: z.array(z.string()),
    }),
    comoFazemos: z.object({
      lines: z.tuple([z.string(), z.string()]),
      body: z.array(z.string()),
    }),
    beneficios: z.object({
      h2: z.string(),
      subtitle: z.string(),
      items: z.array(z.string()).length(4),
    }),
    aboutCards: z
      .array(
        z.object({
          tag: z.string(),
          h3: z.string(),
          body: z.string(),
        }),
      )
      .length(2),
    proximoPasso: z.object({
      h2: z.string(),
      body: z.string(),
    }),
  }),
});

export const collections = { solucoes };
