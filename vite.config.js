import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: parseInt(process.env.PORT) || 5173,
    strictPort: false,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        en: resolve(__dirname, 'en/index.html'),
        luxcleaning: resolve(__dirname, 'werk/luxcleaning.html'),
        strakplan: resolve(__dirname, 'werk/strakplan.html'),
        artquake: resolve(__dirname, 'werk/artquake.html'),
      },
    },
    target: 'es2020',
    minify: 'esbuild',
  },
});
