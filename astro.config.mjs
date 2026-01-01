import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://BananaHello.github.io',
  base: '/FBS',
  integrations: [sitemap()],
  build: {
    assets: 'assets'
  }
});
