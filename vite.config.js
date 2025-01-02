import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3001
  },
  css : {
    modules : {
      localsConvention :"camelCase",
      generateScopedName : "[name]__[local]"
    }
  },
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, 'src/components'),
      '@images': path.resolve(__dirname, 'public/images'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@node': path.resolve(__dirname, 'node_modules')
    }
  }
})
