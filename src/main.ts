import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// 初始化Element Plus国际化
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(createPinia());
app.use(router);

app.mount("#app");
