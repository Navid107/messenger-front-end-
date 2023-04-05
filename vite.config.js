import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src')}]
  },
  build: {
    chunkSizeWarningLimit: 1500,
    commonjsOptions: {
      transformMixedEsModules: true,
      exclude: [
        "node_modules/lodash-es/**",
        "node_modules/@types/lodash-es/**",
      ],
    },
  },
})
