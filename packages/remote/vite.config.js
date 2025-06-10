import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: './',
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
  server: {
    port: 5173,
  },
  build: {
    target: 'esnext',
    assetsDir: "",
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`, // 入口文件直接输出到根目录
        chunkFileNames: `assets/[name].js`, // 非入口 chunk 仍可保留在 assets 下
        assetFileNames: `assets/[name].[ext]`, // 静态资源仍可保留在 assets 下
      },
    },
  },
})