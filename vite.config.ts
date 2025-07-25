import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/3d-Iphone-website/',
  plugins: [tailwindcss()],
});
