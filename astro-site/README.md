# Echoes of Elsewhere Astro site

The Astro app for the Echoes of Elsewhere actual play podcast.

## Project structure

```text
src/
  components/       Shared navigation, footer, hero, portal, and cards
  data/             Show links, cast interviews, and Keshanar resources
  layouts/          Base document metadata and page shell
  pages/            Home, cast, community, Keshanar, and legacy alias routes
  styles/            Shared theme and responsive layout
public/
  downloads/        Original supplied character-sheet PDFs
  images/           Reused show and character-sheet assets
scripts/
  verify-build.mjs  Generated-link and asset verification
```

## Development

```bash
npm install
npm run dev
```

The staging base path is `/websiteCode/`, so the local site opens at
`http://localhost:4321/websiteCode/`.

## Build and verification

```bash
npm run verify
```

This builds the static site and checks generated local links, images, downloads, and stylesheets.
For a production-shaped build, set `ASTRO_SITE` and `ASTRO_BASE` before running `npm run build`,
then run `node scripts/verify-build.mjs --production --site=https://www.eoeap.com --base=/`.

The accessibility scripts expect the local dev server on port 4321:

```bash
npm run check:a11y:all
```

## Content updates

- Add or update show destinations in `src/data/site.ts`.
- Add interview answers in `src/data/cast.ts`. Leave unanswered questions out of a member's `qa` object; the page will only render questions with answers.
- Add supplied Keshanar PDFs under `public/downloads/keshanar/` and page previews under `public/images/keshanar/`, then update `src/data/keshanar.ts`.
- Add the contact email and a verified form endpoint to `src/pages/contact.astro` only after they are confirmed.

The Keshanar map pages intentionally link to the current public map pages until full-size map assets are available in this repository.
