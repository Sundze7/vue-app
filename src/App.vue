<template>
  <section class="mb-10">
    <div class="my-2">
      <label>
        <input
          type="radio"
          name="anim"
          value="fade"
          v-model="anim"
          class="mx-2"
        />Fade
        <input
          type="radio"
          name="anim"
          value="slide"
          v-model="anim"
          class="mx-2"
        />Slide
        <input
          type="radio"
          name="anim"
          value="slide-down"
          v-model="anim"
          class="mx-2"
        />Slide-down
        <input
          type="radio"
          name="anim"
          value="grow-in"
          v-model="anim"
          class="mx-2"
        />Grow-in
        <input
          type="radio"
          name="anim"
          value="grow-out"
          v-model="anim"
          class="mx-2"
        />Grow-out
      </label>
    </div>

    <router-view v-slot="{ Component }">
      <transition :name="anim" mode="out-in">
        <Component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const anim = ref("fade");

    return { anim };
  },
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(300%);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: 0.3s ease-out;
}

.grow-in-enter-from,
.grow-in-leave-to {
  opacity: 0;
  transform: scale(0.3);
}
.grow-in-enter-active,
.grow-in-leave-active {
  transition: 0.3s ease-out;
}

.grow-out-enter-from,
.grow-out-leave-to {
  opacity: 0;
  transform: scale(1.5);
}
.grow-out-enter-active,
.grow-out-leave-active {
  transition: 0.3s ease-out;
}
</style>
