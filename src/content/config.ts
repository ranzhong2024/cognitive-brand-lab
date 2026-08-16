import { defineCollection, z } from 'astro:content';

const essaysCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    module: z.enum(['M01', 'M02', 'M03', 'M04', 'M05', 'M06']),
    moduleName: z.string(),
    pubDate: z.coerce.date(),
    readingTime: z.string().default('12 min read'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    author: z.string().default('Ran'),
  }),
});

export const collections = {
  essays: essaysCollection,
};
