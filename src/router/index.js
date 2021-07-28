import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/home.vue";

// Basic相关
import BasicStyle from "@/views/basic/style.vue";
// import BasicJsx from "@/views/basic/JsxDemo.vue";
// import BasicDemo1 from "@/views/basic/demo1.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/basic-style",
      component: BasicStyle,
    },
    // {
    //   path: "/jsx-demo",
    //   component: BasicJsx,
    // },
    // {
    //   path: "/basic-demo1",
    //   component: BasicDemo1,
    // },
  ],
});

export default router;
