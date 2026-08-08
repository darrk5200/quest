import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  strictPort: true,
  open: false,
  hmr: {
      overlay: false,
    },
  },
  build: {
    outDir: 'dist',
  },
});
