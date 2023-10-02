import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const pinia = createPinia();

const app = createApp(App).use(pinia).use(ElementPlus);

app.config.globalProperties.$store = {};

app.mount("#app").$nextTick(() => {
  postMessage({ payload: "removeLoading" }, "*");
});
