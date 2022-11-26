<template>
  <div>
    <router-view />
    <h1>Hi there, {{ name }}</h1>
    <h1>is initialized: {{ Vue3GoogleOauth.isInit }}</h1>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "LoginWithGoogle",
  setup() {
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");

    return {
      Vue3GoogleOauth,
    };
  },
};
</script>
