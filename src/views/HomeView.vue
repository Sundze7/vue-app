<template>
  <div>
    <router-view />
    <h1>Hi there, {{ name }}</h1>
    <h1>is initialized: {{ Vue3GoogleOauth.isInit }}</h1>
  </div>
</template>

<script>
import { inject } from "vue";
import { mapState } from "vuex";
export default {
  name: "HomeView",
  computed: {
    ...mapState("auth", {
      name: (state) => state.name,
    }),
  },
  setup() {
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");

    return {
      Vue3GoogleOauth,
    };
  },
};
</script>
