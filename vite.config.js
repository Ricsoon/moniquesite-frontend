import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajustar base conforme ambiente
  // Em produção Docker, usar '/' (raiz)
  // Para GitHub Pages, usar '/monique-site-test/'
  base: process.env.VITE_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/' : '/monique-site-test/'),
  server: {
    port: 5173, // Porta padrão do Vite
    open: true,
    // Proxy para desenvolvimento - redireciona /api para o backend
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    sourcemap: false,
    // Otimizações para produção
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
