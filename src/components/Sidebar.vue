<script setup>
import { ref } from "vue";

const email = "samueltemesgen158@gmail.com";
const copied = ref(false);

function copyEmail() {
  navigator.clipboard.writeText(email).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
  });
}
</script>

<template>
  <div class="lg:block hidden bg-white/80 backdrop-blur-md rounded-2xl shadow px-4 py-3 max-w-sm mx-24">
    <img src="/ceo.jpg" alt="Profile" class="w-full h-64 mb-4" />
    <h2 class="mt-2 mb-1 text-xl font-semibold text-left font-serif">Samuel Temesgen</h2>
    <p class="mb-4 text-gray-600 text-justify">
      Hi there, I'm a results-oriented
      <strong class="text-lg text-blue-500">Software Engineer</strong> holding a
      <strong class="text-lg text-blue-500">master's degree</strong>
      in the field. I bring a wide skill set to the table with a solid foundation in
      software development and a passion for crafting amazing digital experiences.
    </p>
    <div class="flex items-center space-x-6">
      <button
        class="flex items-center justify-center bg-blue-600 text-white rounded-md px-6 py-4 mb-4 font-medium hover:bg-blue-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
          />
        </svg>
        Book A Call
      </button>
      <button
        @click="copyEmail"
        class="flex items-center justify-center text-black rounded-md px-6 py-4 mb-4 border-2 border-gray-200 font-medium hover:bg-gray-50 transition relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
        <path
          d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"
        />
        <path
          d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h4a3 3 0 0 1 3 3"
        />
          </g>
        </svg>
        Copy Email
        <span
          v-if="copied"
          class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 shadow"
        >
          Email copied!
        </span>
      </button>
    </div>

    <div class="flex gap-4">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener"
        class="text-2xl hover:text-blue-600 transition"
      >
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
            /></svg
        ></span>
      </a>
      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener"
        class="text-2xl hover:text-blue-600 transition"
      >
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
            /></svg
        ></span>
      </a>
      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener"
        class="text-2xl hover:text-blue-600 transition"
      >
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            /></svg
        ></span>
      </a>
    </div>
  </div>
</template>
