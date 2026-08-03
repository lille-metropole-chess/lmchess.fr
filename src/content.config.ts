// @ts-ignore
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
  }),
});

const chessTours = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/chessTours' }),
  schema: z.object({
    title: z.string(),
  }),
});

const resultSchema = z.object({
  place: z.number(),
  fideId: z.string().optional(),
  name: z.string(),
  rating: z.number().optional(),
  category: z.string().optional(),
  club: z.string().optional(),
  score: z.number(),
});

const tournaments = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/tournaments' }),
  schema: z.object({
    name: z.string(),
    tourEditionSlug: z.string(),
    date: z.string().optional(),
    rounds: z.number().optional(),
    results: z.array(resultSchema).default([]),
  }),
});

export const collections = { posts, chessTours, tournaments };
