# Echoes of Elsewhere — Astro site

The podcast website. This folder is the Astro project; the repo root has the GitHub Actions workflow that builds and deploys it to GitHub Pages.

### Project structure

```
astro-site/
├── public/               # Static assets (images)
│   └── images/
├── src/
│   ├── components/       # Nav, Footer, HeroSection, PortalGraphic, CastCard
│   ├── data/             # cast.ts
│   ├── layouts/          # BaseLayout.astro
│   ├── pages/            # index, cast, contact
│   └── styles/
│       └── global.css
```

## Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Content

### Add a new cast member:
Edit `src/data/cast.ts` and add to the array:

```ts
{
  name: "New Person",
  role: "as Character Name",
  bio: "Optional bio",
  website: "https://...",
  social: "https://..."
}
```

### Add a video card (future):
Create `src/components/VideoCard.astro` and use it anywhere!

## Deployment

The repo root has `.github/workflows/deploy.yml`, which builds this Astro site (`path: astro-site`) and deploys to GitHub Pages on push to `main`. Set **Settings → Pages → Source** to **GitHub Actions** and configure `site` (and `base` for project pages) in `astro.config.mjs`. See the root README for one-time setup.
