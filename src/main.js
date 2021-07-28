import { createApp } from "vue";
import App from "./App.vue";

// 引入路由
import router from "./router/";
// 全局样式在此设置
// import './index.css';

// 自定义插件
// import vm from "virtual-module";
// console.log(111, vm);

createApp(App).use(router).mount("#app");
