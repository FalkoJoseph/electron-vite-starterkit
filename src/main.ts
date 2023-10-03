import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router"

import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import Home from "./pages/Home/View.vue"
import HelloWorld from "./pages/HelloWorld/View.vue"
import Media from "./pages/Media/View.vue"

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/hello-world",
    component: HelloWorld,
    name: "hello-world",
  },
  {
    path: "/media",
    component: Media,
    name: "media",
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const pinia = createPinia();

const app = createApp(App).use(pinia).use(ElementPlus).use(router);

app.config.globalProperties.$store = {};

app.mount("#app").$nextTick(() => {
  postMessage({ payload: "removeLoading" }, "*");
});
