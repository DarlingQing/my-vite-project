import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { viteMockServe } from "vite-plugin-mock";
import VueJsx from "@vitejs/plugin-vue-jsx";
// import virtualModule from "./plugins/vite-plugin-example";
import i18n from "./plugins/vite-plugin-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  // 配置代理
  server: {
    proxy: {
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    // 别名
    alias: {
      "@": resolve("./src"),
    },
  },
  // Vue的整合也通过插件实现
  // plugins: [vue(), viteMockServe({})],
  // plugins: [vue(), viteMockServe({}), virtualModule()],
  // eslint-disable-next-line prettier/prettier
  plugins: [
    VueJsx(),
    vue(),
    viteMockServe({}),
    i18n,
  ],
});
