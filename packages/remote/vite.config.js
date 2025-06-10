import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteButton': './src/components/RemoteButton.vue',
      },
      shared: ['vue'],
    }),
  ],
  base: './',
  server: {
    port: 5173,
  },
  build: {
    target: 'esnext',
  },
})