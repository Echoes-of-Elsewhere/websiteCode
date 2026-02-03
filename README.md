# Echoes of Elsewhere — Website

Website for the Echoes of Elsewhere actual play podcast. Built with [Astro](https://astro.build/) and deployed to **GitHub Pages** via GitHub Actions.

## Repo structure

- **`astro-site/`** — Astro app (pages, components, styles). This is the only site source; the previous vanilla HTML/CSS/JS has been removed.
- **`.github/workflows/deploy.yml`** — Builds the Astro site and deploys it to GitHub Pages on push to `main`.

## Local development

```bash
cd astro-site
npm install
npm run dev
```

Open http://localhost:4321 (or the port Astro prints).

## Deploy to GitHub Pages

1. **One-time setup**
   - In **astro-site/astro.config.mjs** set:
     - **`site`** to your GitHub Pages URL, e.g. `https://YOUR_USERNAME.github.io` or `https://YOUR_USERNAME.github.io/EoEWebsite`.
     - **`base`**: use `'/EoEWebsite/'` if the site is at `https://USERNAME.github.io/EoEWebsite/` (project pages). For a user/org site at `https://USERNAME.github.io`, remove the `base` option.
   - In the repo **Settings → Pages**, set **Source** to **GitHub Actions**.

2. **Deploys**
   - Pushing to `main` runs the workflow, builds `astro-site`, and deploys the output to GitHub Pages. The site will be at the URL you configured in `site` (and `base` if used).

## Build / preview

```bash
cd astro-site
npm run build    # output in astro-site/dist
npm run preview  # serve dist locally
```

See **astro-site/README.md** for project structure and adding content (e.g. cast members).
