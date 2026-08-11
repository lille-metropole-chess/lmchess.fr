#!/usr/bin/env node
// Fetches the "grille américaine" standings from the FFE website (echecs.asso.fr,
// URL with Action=Ga) and writes them into a tournament's `results:` field.
//
// Usage:
//   node scripts/fetch-ffe-results.mjs                # all tournaments with a Ga ffeResultsUrl
//   node scripts/fetch-ffe-results.mjs open-classique-26-27  # one tournament, by file/slug
//
// Only fields the FFE page actually exposes (place, name, rating, category, score)
// are overwritten. `fideId` and `club`, which aren't on the grille américaine, are
// carried over from the existing entry when a name matches.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseDocument } from 'yaml';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOURNAMENTS_DIR = path.join(__dirname, '..', 'src', 'content', 'tournaments');

function parseScore(text) {
  const normalized = text.replace(/½/g, '.5').trim();
  const value = parseFloat(normalized);
  return Number.isNaN(value) ? 0 : value;
}

function parseRating(text) {
  const match = text.match(/\d+/);
  return match ? parseInt(match[0], 10) : undefined;
}

function normalizeName(name) {
  return name.trim().toLowerCase().replace(/\s+/g, ' ');
}

async function fetchGrilleAmericaine(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; lmchess.fr results sync)' },
  });
  if (!res.ok) {
    throw new Error(`request failed: ${res.status} ${res.statusText}`);
  }
  const html = await res.text();
  const $ = cheerio.load(html);

  // Player rows are the only <tr>s with a direct <td class="papi_l"> child
  // (the pairing-history table nested inside that cell has its own <tr>s,
  // but none of them carry a papi_l cell, so this reliably tells them apart).
  const rows = $('tr').filter((_, el) => $(el).children('td.papi_l').length > 0);
  if (rows.length === 0) {
    throw new Error('no player rows found — is this really an Action=Ga (grille américaine) URL?');
  }

  const results = [];
  rows.each((_, el) => {
    const tds = $(el).children('td');
    const place = parseInt($(tds[0]).text().trim(), 10);
    const name = $(tds[2]).find('b').first().text().trim();
    const rating = parseRating($(tds[3]).text());
    const category = $(tds[4]).text().trim() || undefined;
    const score = parseScore($(tds.get(tds.length - 3)).text());

    if (!name || Number.isNaN(place)) return;
    results.push({ place, name, rating, category, score });
  });

  results.sort((a, b) => a.place - b.place);
  return results;
}

function mergeResults(existing, scraped) {
  const byName = new Map(existing.map((r) => [normalizeName(r.name), r]));
  return scraped.map((r) => {
    const prev = byName.get(normalizeName(r.name));
    return {
      place: r.place,
      ...(prev?.fideId ? { fideId: prev.fideId } : {}),
      name: r.name,
      ...(r.rating !== undefined ? { rating: r.rating } : {}),
      ...(r.category ? { category: r.category } : {}),
      ...(prev?.club ? { club: prev.club } : {}),
      score: r.score,
    };
  });
}

async function updateTournamentFile(filePath) {
  const base = path.basename(filePath);
  const raw = readFileSync(filePath, 'utf8');
  const doc = parseDocument(raw);
  const ffeResultsUrl = doc.get('ffeResultsUrl');

  if (!ffeResultsUrl) {
    console.log(`skip ${base} (no ffeResultsUrl)`);
    return;
  }
  if (!/Action=Ga/i.test(ffeResultsUrl)) {
    console.log(`skip ${base} (ffeResultsUrl isn't a grille américaine link — expected Action=Ga)`);
    return;
  }

  console.log(`fetching ${base} <- ${ffeResultsUrl}`);
  const scraped = await fetchGrilleAmericaine(ffeResultsUrl);
  const existing = doc.get('results')?.toJSON() ?? [];
  const merged = mergeResults(existing, scraped);

  doc.set('results', merged);
  writeFileSync(filePath, doc.toString());
  console.log(`  -> ${merged.length} results written`);
}

async function main() {
  const args = process.argv.slice(2);
  const files = args.length > 0
    ? args.map((slug) => path.join(TOURNAMENTS_DIR, slug.endsWith('.yaml') ? slug : `${slug}.yaml`))
    : readdirSync(TOURNAMENTS_DIR)
        .filter((f) => f.endsWith('.yaml'))
        .map((f) => path.join(TOURNAMENTS_DIR, f));

  let failed = false;
  for (const file of files) {
    try {
      await updateTournamentFile(file);
    } catch (err) {
      failed = true;
      console.error(`  ! ${path.basename(file)}: ${err.message}`);
    }
  }
  if (failed) process.exitCode = 1;
}

main();
