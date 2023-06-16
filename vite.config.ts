import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@layouts': '/src/components/layouts',
      '@features': '/src/features',
      '@forms': '/src/components/forms',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@lib': '/src/lib',
      '@web': '/src/pages/web',
      '@dashboard': '/src/pages/dashboard',
      '@auth': '/src/auth',
      '@context': '/src/context',
      '@utils': '/src/utils'
    }
  }
})
