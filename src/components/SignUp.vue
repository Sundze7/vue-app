<template>
  <div
    class="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"
  >
    <div class="bg-white rounded-2xl shadow-2xl w-2/3 flex max-w-4xl">
      <div class="w-2/5 bg-blue-800 text-white rounded-tl-2xl py-12 px-8">
        <div class="font-bold text-left mb-20">
          <span class="text-blue-300">SUNDZE'S</span
          ><span class="text-red-300">/CORP</span>
        </div>
        <h2 class="text-4xl font-bold mb-2">Login Section</h2>
        <div class="border-2 w-10 border-white inline-block mb-10"></div>
        <p class="mb-20 text-2xl">
          If you already have an account with us, go ahead to login with your
          personal information. Else you would need to sign up
        </p>
        <router-link
          to="/login"
          class="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-800"
        >
          Log In
        </router-link>
      </div>

      <div class="w-3/5 p-5">
        <div class="py-16 mt-8">
          <h2 class="text-4xl font-bold text-blue-500">
            Sign Up To Create An Account
          </h2>
          <div class="border-2 w-20 border-blue-500 inline-block mb-2"></div>

          <form @submit.prevent="onSignup">
            <div class="flex justify-center my-6">
              <a href="" class="border-2 border-gray-200 rounded-full p-4 mx-1">
                <fa
                  :icon="['fab', 'github']"
                  class="text-3xl hover:text-blue-500"
                />
              </a>
              <a href="" class="border-2 border-gray-200 rounded-full p-4 mx-1">
                <fa
                  :icon="['fab', 'google']"
                  class="flex text-3xl hover:text-blue-500"
                />
              </a>
              <a href="" class="border-2 border-gray-200 rounded-full p-4 mx-1">
                <fa
                  :icon="['fab', 'linkedin']"
                  class="text-3xl hover:text-blue-500"
                />
              </a>
            </div>
            <p class="text-gray-500 mt-8 mb-6 text-lg font-semibold">
              or use your Email Account
            </p>
            <div
              class="flex bg-gray-200 w-full p-2 items-center mb-6 rounded-full"
            >
              <fa icon="user" class="text-gray-400 m-2" />
              <input
                type="name"
                name="name"
                placeholder="Enter Full Name"
                class="bg-gray-100 outline-none flex-1 p-2"
              />
            </div>
            <div
              class="flex bg-gray-200 w-full p-2 items-center mb-6 rounded-full"
            >
              <fa icon="envelope" class="text-gray-400 m-2" />
              <input
                type="email"
                v-model.trim="email"
                name="email"
                placeholder="Enter Email"
                class="bg-gray-100 outline-none flex-1 p-2"
              />
            </div>
            <div class="error text-red-400" v-if="errors.email">
              {{ errors.email }}
            </div>
            <div
              class="flex bg-gray-200 w-full p-2 items-center mb-6 rounded-full border focus:border-blue-500 focus:outline-none"
            >
              <fa icon="key" class="text-gray-400 m-2" />
              <input
                :type="passwordFieldType"
                v-model.trim="password"
                name="password"
                placeholder="Enter Password"
                class="bg-gray-100 outline-none flex-1 p-2"
              />
              <fa
                icon="eye"
                @click="switchVisibility"
                class="text-gray-400 m-2"
              />
            </div>
            <div class="error text-red-400" v-if="errors.password">
              {{ errors.password }}
            </div>
            <div
              class="flex bg-gray-200 w-full p-2 items-center mb-10 rounded-full border focus:border-blue-500 focus:outline-none"
            >
              <fa icon="key" class="text-gray-400 m-2" />
              <input
                :type="passwordFieldType"
                v-model.trim="confirm_password"
                name="confirm password"
                placeholder="Confirm Password"
                class="bg-gray-100 outline-none flex-1 p-2"
              />
              <fa
                icon="eye"
                @click="switchPasswordVisibility"
                class="text-gray-400 m-2"
              />
            </div>
            <button
              class="border-2 border-blue-800 text-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-800 hover:text-white"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignupValidations from "../services/signupValidations";

export default {
  name: "SignUp",
  data() {
    return {
      password: "",
      emial: "",
      confirm_password: "",
      passwordFieldType: "password",
      errors: [],
    };
  },
  methods: {
    switchPasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    onSignup() {
      let validations = new SignupValidations(this.email, this.password);

      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
    },
  },
};
</script>

<style scoped></style>
