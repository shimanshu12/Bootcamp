import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: repo name = Bootcamp
export default defineConfig({
  plugins: [react()],
  base: '/Bootcamp/',
})