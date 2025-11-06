// frontend/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Personal-Website/', // KEEP THIS for GitHub Pages
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Only for local development
        changeOrigin: true
      }
    }
  }
})
