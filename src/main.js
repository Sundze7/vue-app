import { createApp } from "vue";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from './router'
import store from './store'

library.add(fas, faGithub, faGoogle, faLinkedin);

createApp(App).use(store).use(router).component("fa", FontAwesomeIcon).mount("#app");
