// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Automatically inject variables and mixins into EVERY scss file
        additionalData: `@use "@/styles/_variables.scss" as *; @use "@/styles/_mixins.scss" as *;`,
      },
    },
  },
});
