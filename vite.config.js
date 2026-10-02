import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': '/src' },
  },
  build: {
    // The brick system leans on color-mix() and :has(). Both are
    // Baseline 2023; pinning the CSS target stops Vite/Lightning from
    // trying to downlevel them into something that loses the derived
    // brick tints entirely.
    cssTarget: 'chrome111',
  },
})
