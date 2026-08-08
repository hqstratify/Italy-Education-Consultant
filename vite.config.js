import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';

/**
 * Multi-page build: the home page, the contact page and three legal pages.
 * Each becomes a real static route (/contact/, /privacy-policy/,
 * /terms-and-conditions/, /disclaimer/), so deep links and browser
 * back/forward work on any host with no server rewrites and no client-side
 * router.
 */
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        privacy: resolve(__dirname, 'privacy-policy/index.html'),
        terms: resolve(__dirname, 'terms-and-conditions/index.html'),
        disclaimer: resolve(__dirname, 'disclaimer/index.html'),
      },
    },
  },
});
