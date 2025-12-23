import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // '/api' で始まるリクエストをバックエンドに転送
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})