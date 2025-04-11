import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {fileUrlToPath, URL} from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve : {
    alias : {
      '@' : fileUrlToPath(new URL('./src', import.meta.url)),
      '@assets' : fileUrlToPath(new URL('./src/assets', import.meta.url)),
      '@components' : fileUrlToPath(new URL('./src/components', import.meta.url)),
      '@pages' : fileUrlToPath(new URL('./src/pages', import.meta.url)),
      '@recoil' : fileUrlToPath(new URL('./src/recoil', import.meta.url)),
      '@apis' : fileUrlToPath(new URL('./src/apis', import.meta.url)),
    }
  },
  //scss 전역사용
  css : {
    preprocessorOptions : {
      scss : {
        additionalData : `@import "./src/assets/styles/main.scss`,
        
      }
    }
  }
})
