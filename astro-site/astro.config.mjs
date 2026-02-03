// @ts-check
import { defineConfig } from 'astro/config';

// Production build (e.g. from "Publish to production" workflow) overrides via env so links use custom domain and no base path.
const site = process.env.ASTRO_SITE || 'https://echoes-of-elsewhere.github.io';
const base = process.env.ASTRO_BASE !== undefined ? process.env.ASTRO_BASE : '/websiteCode/';

// https://astro.build/config
export default defineConfig({
  site,
  ...(base && { base }),
  devToolbar: { enabled: false },
});
