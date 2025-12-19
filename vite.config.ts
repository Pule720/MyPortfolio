import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Replace 'portfolio-os' with your EXACT GitHub repository name
  base: "/MyPortfolio/", 
})