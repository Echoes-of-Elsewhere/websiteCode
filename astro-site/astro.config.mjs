// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Dev toolbar keeps a WebSocket/token pending; disable so load event and scroll aren't affected
  devToolbar: { enabled: false },
});
