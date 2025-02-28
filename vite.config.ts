/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  test: {
    globals: true, // Enable global test APIs like describe, it, and expect
    environment: 'jsdom', // Simulate a browser-like environment
    setupFiles: './vitest.setup.ts', // Optional: Add global setup
},
})
