import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

// Change base to match your GitHub repo name, e.g. '/tokenlearn/'
// For local dev, '/' is fine — Vite ignores base in dev mode
export default defineConfig({
  base: '/tokenlearn/',
  plugins: [
    react(),
    wasm(),
    topLevelAwait(),
  ],
  optimizeDeps: {
    exclude: ['@dqbd/tiktoken'],
  },
  build: {
    outDir: 'dist',
    target: 'esnext', // required for top-level await
  },
})