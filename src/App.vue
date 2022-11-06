<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200"
  >
    <SignIn />
  </div>
</template>

<script>
import SignIn from "./components/SignIn.vue";

export default {
  name: "App",
  components: {
    SignIn,
  },
};
</script>
