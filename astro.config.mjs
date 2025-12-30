import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://foreverbeautyandslimming.com',
  // For GitHub Pages deployment with custom domain
  // If using username.github.io/repo-name, add: base: '/repo-name'
  build: {
    assets: 'assets'
  }
});
