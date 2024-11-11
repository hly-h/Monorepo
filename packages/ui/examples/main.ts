import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "ssy-ui-vite/style.css";
import SSYUI from "ssy-ui-vite";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(SSYUI);
app.mount("#app");