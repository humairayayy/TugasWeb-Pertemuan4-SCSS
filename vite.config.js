import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // pakai Dart Sass modern API (@use/@forward)
      },
    },
  },
});
