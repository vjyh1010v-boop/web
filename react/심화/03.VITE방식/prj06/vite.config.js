import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist', // 상위 폴더의 dist 폴더로 빌드 결과물이 가도록 설정
    emptyOutDir: true, // 빌드 시 기존 dist 폴더 비우기
  }
})
