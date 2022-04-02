import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Estilos CSS
import "./sass/app.scss";

createApp(App).use(router).mount("#app");
