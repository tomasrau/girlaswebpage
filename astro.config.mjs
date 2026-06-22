// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://girlas.com.ar',
  base: '/',
  output: 'static',
  build: {
    assets: '_assets',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
