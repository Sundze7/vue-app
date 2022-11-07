<template>
  <div
    class="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"
  >
    <div class="bg-white rounded-2xl shadow-2xl w-2/3 flex max-w-4xl">
      <div class="w-3/5 p-5">
        <div class="text-left font-bold mt-5">
          <span class="text-blue-800">SUNDZE'S</span
          ><span class="text-red-800">/CORP</span>
        </div>
        <div class="py-20 mt-8">
          <h4 class="text-left mb-4 text-xl text-gray-500 font-semibold">
            Welcome Back ...
          </h4>
          <h2 class="text-4xl font-bold text-blue-500">
            Sign In To Your Account
          </h2>
          <div class="border-2 w-20 border-blue-500 inline-block mb-2"></div>
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
          <form action="">
            <div
              class="flex bg-gray-200 w-full p-2 items-center mb-6 rounded-full"
            >
              <fa icon="envelope" class="text-gray-400 m-2" />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                class="bg-gray-100 outline-none flex-1 p-2"
              />
            </div>
            <div
              class="flex bg-gray-200 w-full p-2 items-center mb-10 rounded-full border focus:border-blue-500 focus:outline-none"
            >
              <fa icon="key" class="text-gray-400 m-2" />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                class="bg-gray-100 outline-none flex-1 p-2"
              />
            </div>
            <div class="flex justify-between mb-10">
              <label class="flex items-center font-semibold">
                <input type="checkbox" name="remember" class="mr-1" />
                Remember me
              </label>
              <a href="" class="text-right hover:text-blue-500 font-semibold"
                >Forgot Password?</a
              >
            </div>
            <button
              class="border-2 border-blue-800 text-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-800 hover:text-white"
            >
              Log In
            </button>
          </form>
        </div>
      </div>

      <div class="w-2/5 bg-blue-800 text-white rounded-tr-2xl py-60 px-8">
        <h2 class="text-4xl font-bold mb-2">Hello Friend</h2>
        <div class="border-2 w-10 border-white inline-block mb-10"></div>
        <p class="mb-20 text-2xl">
          If you do not have an account with us yet, fill up your personal
          information and start a journey with us
        </p>
        <a
          href="SignUp.vue"
          class="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-800"
        >
          Sign Up
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped></style>
