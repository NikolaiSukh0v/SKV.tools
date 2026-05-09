import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['react-router-dom'], // Dedupe react-router-dom
  },
  optimizeDeps: {
    exclude: ['react-router-dom'], // Exclude react-router-dom from pre-bundling
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
})
