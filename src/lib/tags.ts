import type { CollectionEntry } from 'astro:content';

export function getUniqueTags(posts: CollectionEntry<'posts'>[]): string[] {
  return [...new Set(posts.flatMap((post) => post.data.tags))];
}
