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
  assetsInclude: ['**/*.mp4', '**/*.webp', '**/*.jpg', '**/*.png'],
  css: {
    preprocessorOptions: {
      scss: {
        // ✅ Silences ONLY the if-function deprecation warning
        // All other important warnings remain visible
        silenceDeprecations: ['if-function'],
        additionalData: `@use "@/styles/_variables.scss" as *; @use "@/styles/_mixins.scss" as *;`,
      },
    },
  },
});
