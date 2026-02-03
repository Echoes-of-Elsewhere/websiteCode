// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://Echoes-of-Elsewhere.github.io/websiteCode/',
  // For project pages use base: '/REPO_NAME/' (e.g. '/EoEWebsite/'). Omit for user/org pages (username.github.io).
  base: '/websiteCode/',
  devToolbar: { enabled: false },
});
