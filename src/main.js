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
import router from "./router";
import store from "./store/store";

library.add(fas, faGithub, faGoogle, faLinkedin);

const app = createApp(App);
import gAuthPlugin from "vue3-google-oauth2";
let gauthClientId =
  "779574074115-vaqbbbmgj932d3tqngh8ri34ffjlnr2m.apps.googleusercontent.com";
app.use(gAuthPlugin, {
  clientId: gauthClientId,
  scope: "email",
  prompt: "consent",
});

app.use(store).use(router).component("fa", FontAwesomeIcon).mount("#app");
