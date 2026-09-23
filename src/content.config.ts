// @ts-ignore
import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { formatFrenchDate } from './lib/dates';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    logo: z.string().optional(),
    url: z.string().optional(),
  }),
});

const chessTours = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/chessTours' }),
  schema: z.object({
    title: z.string(),
    partners: z.array(reference('partners')).default([]),
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

const hotelSchema = z.object({
  name: z.string(),
  url: z.string().optional(),
  phone: z.string().optional(),
  discountCode: z.string().optional(),
  discountInfo: z.string().optional(),
});

const keyInfoSchema = z.object({
  label: z.string(),
  value: z.string(),
});

// Accepts either a free-text date ("19-23 Octobre 2026") or a bare ISO date
// (Keystatic writes YAML dates like 2026-09-26, which js-yaml parses as a
// Date object) and normalizes both to the free-text display format.
const dateSchema = z
  .union([z.string(), z.date()])
  .transform((value) => (typeof value === 'string' ? value : formatFrenchDate(value)))
  .optional();

const tournaments = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/tournaments' }),
  schema: z.object({
    name: z.string(),
    tourEditionSlug: z.string().optional(),
    date: dateSchema,
    rounds: z.number().optional(),
    results: z.array(resultSchema).default([]),
    poster: z.string().optional(),
    helloAssoUrl: z.string().optional(),
    keyInfo: z.array(keyInfoSchema).default([]),
    accommodations: z.array(hotelSchema).default([]),
    ffeResultsUrl: z.string().optional(),
    winnerPhotos: z.array(z.string()).default([]),
  }),
});

export const collections = { posts, partners, chessTours, tournaments };
