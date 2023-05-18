import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@layouts': '/src/components/layouts',
      '@hooks': '/src/hooks',
      '@web': '/src/pages/web',
      '@dashboard': '/src/pages/dashboard'
    }
  }
})
