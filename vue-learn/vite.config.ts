import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // 中转服务器
    proxy: {
      // 通过代理解决跨域
      "/proxy": {
        target: "https://i.maoyan.com",
        changeOrigin: true, // true：可以跨域
        rewrite: (path) => path.replace(/^\/proxy/, ""),
      },
    },
  },
});
