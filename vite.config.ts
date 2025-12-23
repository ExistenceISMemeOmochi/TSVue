import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    // ここを追加！
    watch: {
      // backendフォルダの中身が変わったら、Viteに教えてあげる
      ignored: ['!**/backend/**'] 
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})