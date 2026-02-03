# Echoes of Elsewhere — Website

Website for the Echoes of Elsewhere actual play podcast. Built with [Astro](https://astro.build/).

## Deploy flow

| Step | What happens |
|------|----------------|
| **Push to `main`** | **Staging** deploys automatically to GitHub Pages: `https://echoes-of-elsewhere.github.io/websiteCode/`. Use this to test. |
| **Run “Publish to production”** | When staging looks good, run this workflow manually. It builds with your **custom domain** (no `/websiteCode/` in URLs) and deploys to a **separate production repo** that has your domain. Only that run updates the public site. |

## Repo structure

- **`astro-site/`** — Astro app (pages, components, styles).
- **`.github/workflows/deploy.yml`** — Deploys to GitHub Pages (staging) on every push to `main`.
- **`.github/workflows/publish-production.yml`** — Manual workflow that builds for your custom domain and pushes to the production repo.

## Local development

```bash
cd astro-site
npm install
npm run dev
```

Open http://localhost:4321 (or the port Astro prints).

## One-time setup

### Staging (GitHub Pages)

1. In this repo **Settings → Pages**, set **Source** to **GitHub Actions**.
2. **`astro-site/astro.config.mjs`** is already set for staging (`site` + `base: '/websiteCode/'`). No change needed unless you rename the repo.

### Production (custom domain)

You need a **second repo** that will hold the built site and have your custom domain attached.

1. **Create the production repo** (e.g. `echoes-of-elsewhere/echoesofelsewhere-production`). Enable **GitHub Pages** and set **Source** to **Deploy from a branch**, branch **gh-pages** (the workflow pushes the built site to this branch). Add your **Custom domain** in that repo’s Settings → Pages.

2. **In this repo** go to **Settings → Secrets and variables → Actions**:
   - **Variables**: Add **`PRODUCTION_SITE`** = your site URL, e.g. `https://echoesofelsewhere.com`.
   - **Secrets**: Add **`PRODUCTION_GITHUB_TOKEN`** = a [Personal Access Token](https://github.com/settings/tokens) with `repo` scope and write access to the **production** repo (so this repo can push the built site there).

3. **Edit `.github/workflows/publish-production.yml`** and set **`external_repository`** to your production repo (e.g. `echoes-of-elsewhere/echoesofelsewhere-production`).

4. **DNS** (at your domain registrar): Point your domain at GitHub Pages (A records for apex, or CNAME for `www` to your GitHub Pages host). GitHub’s docs: [Configuring a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Publishing to production

1. Push to `main` and wait for the staging workflow to finish.
2. Open **https://echoes-of-elsewhere.github.io/websiteCode/** and confirm everything looks correct.
3. Go to **Actions** → **Publish to production** → **Run workflow** → **Run workflow**.
4. When it finishes, your custom domain will show the new build. Staging (github.io/websiteCode) is unchanged.

## Build / preview

```bash
cd astro-site
npm run build    # output in astro-site/dist
npm run preview  # serve dist locally
```

See **astro-site/README.md** for project structure and adding content (e.g. cast members).
