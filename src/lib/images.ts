import type { ImageMetadata } from 'astro';

// Every bitmap under src/assets, keyed by its absolute project path.
// Eager so .astro files can resolve a content-authored path synchronously.
const assets = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpeg,jpg,png,gif,webp,avif}',
  { eager: true },
);

/**
 * Resolve an image path stored in a content collection to its ImageMetadata.
 *
 * Accepts both conventions: the canonical "/src/assets/partners/x.png" that
 * Keystatic now writes, and the legacy "/partners/x.png" left over from when
 * these files lived in public/.
 */
export function resolveAsset(path?: string): ImageMetadata | undefined {
  if (!path) return undefined;
  const key = path.startsWith('/src/assets/')
    ? path
    : `/src/assets/${path.replace(/^\/+/, '')}`;
  return assets[key]?.default;
}

/** All assets under a src/assets subdirectory, sorted by filename. */
export function assetsIn(dir: string): { path: string; image: ImageMetadata }[] {
  const prefix = `/src/assets/${dir.replace(/^\/+|\/+$/g, '')}/`;
  return Object.entries(assets)
    .filter(([path]) => path.startsWith(prefix))
    .map(([path, mod]) => ({ path, image: mod.default }))
    .sort((a, b) => a.path.localeCompare(b.path));
}
