import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host',
      remotes: {
        remoteApp: 'http://localhost:3000/remote/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
  base: './',
  server: {
    port: 5174,
  },
  build: {
    target: 'esnext',
  },
})