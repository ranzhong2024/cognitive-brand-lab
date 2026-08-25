import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/essays' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    module: z.enum(['M1', 'M2', 'M3', 'M4', 'M5', 'M6']),
    moduleName: z.string(),
    pubDate: z.coerce.date(),
    readingTime: z.string().default('12 min read'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    author: z.string().default('Ran'),
  }),
});

export const collections = {
  essays,
};

export default {
  collections: {
    essays,
  },
};
