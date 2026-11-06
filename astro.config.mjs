import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  site: 'https://ahmadmuhammadgd.github.io',
});
