import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

console.log(process.env)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  define: {
    'E_TITLE': process.env.title,
    'E_EMAIL': process.env.email,
  },
})
