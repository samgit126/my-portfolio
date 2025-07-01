<template>
  <nav class="bg-white/80 backdrop-blur-md rounded-2xl shadow px-4 py-3 mx-24 my-5 flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <span class="text-2xl font-semibold text-gray-900">
        Samuel <span class="text-blue-500">Temesgen</span>
      </span>
    </div>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex items-center space-x-2 lg:space-x-4">
      <li>
        <a href="#" class="flex items-center px-4 py-2 rounded-xl bg-gray-100 text-gray-900 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9.447 15.398a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852" />
            <path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.708 0-1.351.203-2.05.542c-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465c-.589.45-1.041.91-1.368 1.507c-.326.595-.472 1.229-.543 1.978c-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582c.156 1.205.486 2.178 1.23 2.947c.747.773 1.697 1.119 2.875 1.282c1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159c1.177-.163 2.128-.509 2.876-1.282c.743-.769 1.073-1.742 1.23-2.947c.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726c-.07-.75-.217-1.383-.543-1.978c-.327-.597-.78-1.056-1.368-1.507c-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416c-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363c.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402c.489.375.77.684.963 1.036c.193.353.306.766.365 1.398c.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443c-.136 1.048-.393 1.656-.82 2.099c-.425.439-1.003.7-2.004.839c-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144c-1.001-.14-1.579-.4-2.003-.84c-.428-.442-.685-1.05-.82-2.098c-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623c.059-.632.172-1.045.365-1.398c.193-.352.474-.661.964-1.036c.503-.386 1.178-.805 2.139-1.402z" clip-rule="evenodd" />
          </svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-200 active:bg-gray-200 font-medium">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.5 21a7.5 7.5 0 0113 0" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          About
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-200 active:bg-gray-200 font-medium">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="4" y="4" width="16" height="8" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Services
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-200 active:bg-gray-200 font-medium">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 3v4M8 3v4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Portfolio
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-200 active:bg-gray-200 font-medium">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2 2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Blog
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-200 active:bg-gray-200 font-medium">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Contact
        </a>
      </li>
    </ul>

    <!-- Right Side -->
    <div class="flex items-center space-x-2">
      <!-- Theme Toggle -->
      <button class="p-2 rounded-full hover:bg-gray-100 transition">
        <svg class="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <!-- Call to Action -->
      <a href="#" class="bg-gray-900 text-white font-bold px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-gray-800 transition">
        <span>Let's Talk</span>
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M17 7l-10 10M17 7h-6m6 0v6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <!-- Mobile Menu Button -->
      <button @click="mobileMenu = !mobileMenu" class="md:hidden p-2 rounded-full hover:bg-gray-100 transition">
        <svg v-if="!mobileMenu" class="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else class="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="mobileMenu" class="fixed inset-0 z-40 bg-black/40 flex justify-end md:hidden">
        <div class="bg-white w-64 h-full p-6 space-y-4 shadow-lg ">
          <button @click="mobileMenu = false" class="mb-6 p-2 rounded-full  hover:bg-gray-100 transition">
            <svg class="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <a href="#" class="flex items-center px-4 py-2 rounded-xl bg-gray-100 text-gray-900 font-medium">
            <svg class="h-5 w-5 mr-2 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Home
          </a>
          <a href="#" class="flex items-center px-4 py-2 rounded-xl text-gray-500 hover:text-blue-500 font-medium">
            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="7" r="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.5 21a7.5 7.5 0 0113 0" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            About
          </a>
          <a href="#" class="flex items-center px-4 py-2 rounded-xl text-gray-500 hover:text-blue-500 font-medium">
            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="4" y="4" width="16" height="8" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Services
          </a>
          <a href="#" class="flex items-center px-4 py-2 rounded-xl text-gray-500 hover:text-blue-500 font-medium">
            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="3" y="7" width="18" height="13" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 3v4M8 3v4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Portfolio
          </a>
          <a href="#" class="flex items-center px-4 py-2 rounded-xl text-gray-500 hover:text-blue-500 font-medium">
            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2 2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Blog
          </a>
          <a href="#" class="flex items-center px-4 py-2 rounded-xl text-gray-500 hover:text-blue-500 font-medium">
            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Contact
          </a>
          <a href="#" class="bg-gray-900 text-white font-bold px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-gray-800 transition">
            <span>Let's Talk</span>
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M17 7l-10 10M17 7h-6m6 0v6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenu = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>