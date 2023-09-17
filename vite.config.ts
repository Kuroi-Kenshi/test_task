/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    // setupFiles: ['./tests/setup.ts'],
    // testMatch: ['./tests/**/*.test.tsx'],
    globals: true,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src', 'app'),
      '@components': path.resolve(__dirname, 'src', 'components'),
    },
  },
});
