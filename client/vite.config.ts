import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,     // exposes server on 0.0.0.0 (external access)
    port: 3000,     // desired port
       // https would require certs (see below if needed)
  }
})
