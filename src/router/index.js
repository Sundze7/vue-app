import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("/src/components/SignUp.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("/src/components/Login.vue"),
  },
  {
    path: "/loginwithgoogle",
    name: "LoginWithGoogle",
    component: () => import("/src/components/LoginWithGoogle.vue"),
  },
  {
    path: "/googlelogin",
    name: "GoogleLogin",
    component: () => import("/src/components//GoogleLogin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
