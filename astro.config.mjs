import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://BananaHello.github.io',
  base: '/FBS',
  build: {
    assets: 'assets'
  }
});
