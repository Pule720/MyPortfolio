import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-os/", // This MUST match your repository name on GitHub
})