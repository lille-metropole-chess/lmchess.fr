# Keystatic in Astro

This template shows how you can use Keystatic in an Astro site.

To setup:

```bash
npm install
```

To run:

```
npm run dev
```

Admin UI: [http://127.0.0.1:4321/keystatic](http://127.0.0.1:4321/keystatic)

Homepage: [http://localhost:4321](http://localhost:4321)

## Deploying to Vercel

After you push to GitHub and connect the repo to Vercel, deploy with:

```bash
npm install
npm run build
npx vercel --prod
```

Your site will be served from the Vercel domain, not `http://127.0.0.1:4321/`.

### Note

The project uses `vercel.json` with Vercel Platform configuration only. Keep build settings in the Vercel dashboard, and leave the output directory blank.

## Updating tournament results from the FFE

Tournament results (`results:` in `src/content/tournaments/*.yaml`) can be pulled
straight from the FFE's "grille américaine" instead of typed in by hand.

1. On the FFE tournament page (echecs.asso.fr), open the standings and copy the
   link to the **grille américaine** — the URL contains `Action=Ga`, e.g.
   `https://echecs.asso.fr/Resultats.aspx?URL=Tournois/Id/<id>/<id>&Action=Ga`.
2. Paste it into the tournament's `ffeResultsUrl` field (in Keystatic, or
   directly in the yaml file).
3. Run the fetch script and commit the result:
   ```bash
   npm run results:fetch                              # all tournaments with a Ga link
   npm run results:fetch -- open-classique-26-27       # just one, by filename/slug
   git add src/content/tournaments && git commit -m "Update results" && git push
   ```

This only runs locally — Vercel builds from git and doesn't execute scripts on a
schedule, so a fresh scrape has to be committed and pushed (which then triggers
a normal Vercel deploy) each time you want the site to reflect the latest round.
`fideId` and `club`, which aren't on the FFE page, are preserved across re-runs
by matching player names.
