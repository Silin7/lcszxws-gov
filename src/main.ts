import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";
import "../public/css/index.css";

import App from "./App.vue";

// 路由配置
import router from "./router";

// 状态管理工具 pinia
import pinia from "./store";

const app = createApp(App);

// 初始化Element Plus国际化
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(createPinia());
app.use(router);
app.use(pinia);

app.mount("#app");
