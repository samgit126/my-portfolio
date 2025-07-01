<script setup>
import { ref } from "vue";
const isPasswordVisible = ref(false);
const passwordInput = ref(null);
const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
  if (passwordInput.value) {
    passwordInput.value.type = isPasswordVisible.value ? "text" : "password";
  }
};
</script>
<template>
  <div class="bg-qelem-white pt-32 max-w-xl mx-auto pb-16">
    <div class="place-self-center">
      <img src="/logo.png" class="rounded-full h-24 w-28 place-self-center mt-4" />
      <h1 class="text-3xl text-bold pt-2">Addis Ababa Education Bureau</h1>
      <p class="lg:pl-24 font-normal text-qelem-netural-400 pt-2">
        EMACS Ministry Admin Login
      </p>
    </div>
    <form class="mt-8 space-y-6 max-w-xl border-2 border-gray-200 p-4 rounded-xl pb-10">
      <h1 class="text-center text-3xl font-medium pt-2">Admin Portal</h1>
      <div class="px-10">
        <label for="username" class="block text-md pl-2 pb-2 font-medium text-qelem-black"
          >Username</label
        >
        <input
          id="username"
          type="text"
          required
          class="mt-1 block w-full px-3 py-2.5 border focus:bg-qelem-primary-light border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter user name"
        />
      </div>
      <div class="px-10">
        <label
          for="password-icon"
          class="block text-md pl-2 pb-2 font-medium text-qelem-black"
          >Password</label
        >
        <div class="relative">
          <input
            ref="passwordInput"
            type="password"
            id="password-icon"
            class="mt-1 block w-full px-3 py-2.5 border focus:bg-qelem-primary-light border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="*********"
            required
          />

          <button
            type="button"
            @click="togglePasswordVisibility"
            class="absolute inset-y-0 flex items-center end-0 pe-3 text-lyu-brand-primary focus:outline-none"
          >
            <svg
              v-if="isPasswordVisible"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448M248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69a64.11 64.11 0 0 0 53.49 53.49a2 2 0 0 0 1.69-3.39m16-119.7L315.87 248a2 2 0 0 0 3.4-1.69a64.13 64.13 0 0 0-53.55-53.55a2 2 0 0 0-1.72 3.39"
              />
              <path
                fill="currentColor"
                d="M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.5 226.5 0 0 0-71.82 11.79a4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05a96 96 0 0 1 116 116a4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24a343.8 343.8 0 0 0 67.24-77.4M256 352a96 96 0 0 1-93.3-118.63a4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.2 238.2 0 0 0 72.64-11.55a4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <circle cx="256" cy="256" r="64" fill="currentColor" />
              <path
                fill="currentColor"
                d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11c-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72c38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76M256 352a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96"
              />
            </svg>
          </button>
        </div>
        <div class="mt-4">
          <label
            for="security-code"
            class="block text-md pl-2 pb-2 font-medium text-qelem-black"
            >Security Code</label
          >
          <div class="flex items-center space-x-2">
            <input
              id="security-code"
              type="text"
              maxlength="6"
              class="block w-62 px-3 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter security code"
              required
            />
            <span class="text-md text-qelem-black bg-gray-300 rounded-xl px-3 py-3"
              >123456</span
            >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
              class="ml-10"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4.75 10.75h-3m12.5-2c0 3-2.798 5.5-6.25 5.5c-3.75 0-6.25-3.5-6.25-3.5v3.5m9.5-9h3m-12.5 2c0-3 2.798-5.5 6.25-5.5c3.75 0 6.25 3.5 6.25 3.5v-3.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="px-10 flex items-center">
        <input
          id="remember-me"
          type="checkbox"
          class="h-4 w-4 text-qelem-primary focus:ring-qelem-primary border-gray-200 rounded"
        />
        <label for="remember-me" class="ml-3 block text-md text-qelem-netural-400">
          Remember me
        </label>
      </div>
      <div>
        <button
          type="submit"
          class="w-96 ml-18 flex justify-center py-2 px-4  border border-transparent rounded-md shadow-sm text-white bg-qelem-primary hover:bg-qelem-secondary focus:outline-none"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>
