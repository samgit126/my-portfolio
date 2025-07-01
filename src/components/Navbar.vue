<script setup>
import { ref } from "vue";

const darkMode = ref(false);
const openDropdown = ref(false);
const mobileMenu = ref(false);
const showLangCard = ref(false);
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
};
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>
<template>
  <nav
    class="fixed top-0 left-0 right-0 bg-qelem-white shadow-md px-2 py-4 lg:py-6 flex grow items-center justify-between w-full z-30">
    <!-- Logo Section -->
    <div class="flex items-center space-x-2 xl:space-x-4 xl:px-6  min-w-0">
      <img src="/logo.png" alt="Logo" class="h-10 w-10 min-w-[40px] object-contain" />
      <div class="min-w-0">
        <h1 class="xl:text-xl md:text-sm text-qelem-primary font-bold tracking-wide">
          Addis Ababa Education Bureau
        </h1>
        <p class="text-xs xl:text-md text-qelem-netural tracking-wide">
          QMT Exam Service
        </p>
      </div>
    </div>

    <!-- Links -->
    <div
      class="hidden lg:flex flex-wrap space-x-3 xl:space-x-6  text-base lg:text-lg md:text-sm font-medium text-qelem-netural-300 cursor-pointer ">
      <router-link
        to="/"
        class="hover:text-qelem-secondary group relative flex items-center whitespace-nowrap">
        Home
        <span
          class="absolute left-0 right-0 bottom-[-20px] md:bottom-[-35px] w-full h-0.5 bg-qelem-secondary scale-x-0 transition-transform duration-300 group-hover:scale-x-100">
        </span>
      </router-link>
      <router-link to="/" 
        @click.prevent="scrollToSection('check-result')"
        class="hover:text-qelem-secondary group relative flex items-center whitespace-nowrap">
        Check Result
        <span
          class="absolute left-0 right-0 bottom-[-20px] md:bottom-[-35px] w-full h-0.5 bg-qelem-secondary scale-x-0 transition-transform duration-300 group-hover:scale-x-100">
        </span>
      </router-link>
      <router-link
        to="/complaint"
        class="hover:text-qelem-secondary group relative flex items-center whitespace-nowrap">
        Complaint
        <span
          class="absolute left-0 right-0 bottom-[-20px] md:bottom-[-35px] w-full h-0.5 bg-qelem-secondary scale-x-0 transition-transform duration-300 group-hover:scale-x-100">
        </span>
      </router-link>
      <router-link
        to="/top-scorers"
        class="hover:text-qelem-secondary group relative flex items-center whitespace-nowrap">
        Top Scorers
        <span
          class="absolute left-0 right-0 bottom-[-20px] md:bottom-[-35px] w-full h-0.5 bg-qelem-secondary scale-x-0 transition-transform duration-300 group-hover:scale-x-100">
        </span>
      </router-link>
      <!-- Resource Dropdown -->
      <div class="relative" @click="openDropdown = !openDropdown">
        <button
          class="hover:text-qelem-secondary group relative flex items-center cursor-pointer whitespace-nowrap">
          Resources
          <svg
            class="ml-1 w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <span
            class="absolute left-0 right-0 bottom-[-20px] md:bottom-[-35px] w-full h-0.5 bg-qelem-secondary scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
        <div
          v-if="openDropdown"
          class="absolute left-0 md:-left-24 mt-8 md:mt-11 w-56 md:w-72 bg-white border border-gray-100 rounded-xl shadow-lg z-10 text-qelem-netural">
          <a
            @click.prevent="scrollToSection('feedback')"
            class="block mx-2 md:mx-4 mt-1 rounded-lg px-2 md:px-4 py-2 hover:bg-qelem-secondary-light"
            >Feed back Form</a>
          <a
            @click.prevent="scrollToSection('faqs')"
            class="block mx-2 md:mx-4 px-2 md:px-4 rounded-lg py-2 hover:bg-qelem-secondary-light"
            >FAQs</a>
          <a
            @click.prevent="scrollToSection('contact-us')"
            class="block mx-2 md:mx-4 px-2 md:px-4 rounded-lg py-2 hover:bg-qelem-secondary-light"
            >Contact Us</a>
          <a
            href="#"
            class="block mx-2 md:mx-4 mb-1 px-2 md:px-4 rounded-lg py-2 hover:bg-qelem-secondary-light"
            >Announcment</a>
        </div>
      </div>
    </div>

    <!-- Language Selector & Login -->
    <div class="hidden lg:flex md:items-center  md:space-x-2 lg:space-x-6 pr-2 lg:pr-10">
      <div class="relative">
        <button
          @click="showLangCard = !showLangCard"
          class="border-2 border-gray-100 rounded-lg py-2 px-2 md:py-2.5 lg:px-4 md:px-2 text-base md:text-lg focus:bg-qelem-secondary-light focus:border-0 text-qelem-netural-300 flex items-center">
          English
          <svg
            class="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          v-if="showLangCard"
          class="absolute right-0 mt-2 w-44 md:w-64 bg-white border-2 border-gray-100 rounded-lg shadow-lg z-20 text-base md:text-lg text-qelem-netural">
          <ul>
            <li>
              <a
                href="#"
                class="block mx-2 md:mx-4 mt-1 rounded-lg px-2 md:px-4 py-2 hover:bg-qelem-secondary-light"
                >English</a>
            </li>
            <li>
              <a
                href="#"
                class="block mx-2 md:mx-4 rounded-lg px-2 md:px-4 py-2 hover:bg-qelem-secondary-light"
                >Amharic</a>
            </li>
            <li>
              <a
                href="#"
                class="block mx-2 md:mx-4 mb-1 rounded-lg px-2 md:px-4 py-2 hover:bg-qelem-secondary-light"
                >Afaan Oromo</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        @click="toggleDarkMode"
        class="h-9 w-6 md:h-10 md:w-8 py-1 px-0.5 bg-qelem-white border-2 border-gray-100 rounded-lg">
        <svg
          v-if="!darkMode"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.039 1.98-5.27t4.904-2.634q.081 0 .159.006t.153.017q-.506.706-.801 1.57T10.158 7.5q0 2.667 1.866 4.533t4.534 1.867q.951 0 1.813-.295t1.548-.801q.012.075.017.153t.006.159q-.384 2.923-2.615 4.903T12.057 20"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 512 512">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M277.333 405.333v85.333h-42.667v-85.333zm99.346-58.824l60.34 60.34l-30.17 30.17l-60.34-60.34zm-241.359 0l30.17 30.17l-60.34 60.34l-30.17-30.17zM256 139.353c64.422 0 116.647 52.224 116.647 116.647c0 64.422-52.225 116.647-116.647 116.647A116.427 116.427 0 0 1 139.352 256c0-64.423 52.225-116.647 116.648-116.647m0 42.666c-40.859 0-73.981 33.123-73.981 74.062a73.76 73.76 0 0 0 21.603 52.296c13.867 13.867 32.685 21.64 52.378 21.603zm234.666 52.647v42.667h-85.333v-42.667zm-384 0v42.667H21.333v-42.667zM105.15 74.98l60.34 60.34l-30.17 30.17l-60.34-60.34zm301.7 0l30.169 30.17l-60.34 60.34l-30.17-30.17zM277.332 21.333v85.333h-42.667V21.333z"
          />
        </svg>
      </div>
      <router-link to="/login"
        class="px-3 md:px-4 py-2 md:py-3 bg-qelem-primary hover:bg-qelem-secondary text-white rounded-xl text-sm md:text-md">
        Login
      </router-link>
    </div>
    <!-- Mobile menu button -->
    <div>
      <button @click="mobileMenu = !mobileMenu" class="lg:hidden focus:outline-none ml-2">
        <svg
          class="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            v-if="!mobileMenu"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenu"
      class="lg:hidden absolute top-full min-h-screen left-0 w-1/2 bg-qelem-white shadow-xl border-t border-gray-200 z-20">
      <div class="flex flex-col space-y-2 px-4 py-2">
        <router-link
          to="/"
          class="hover:text-qelem-secondary group relative flex items-center whitespace-nowrap">
          Home
        </router-link>
        <router-link
          to="/"
          class="hover:text-qelem-secondary group relative flex items-center whitespace-nowrap">
          Check Result
        </router-link>
        <router-link
          to="/"
          class="hover:text-qelem-secondary group relative flex items-center whitespace-nowrap">
          Complaint
        </router-link>
        <router-link
          to="/"
          class="hover:text-qelem-secondary group relative flex items-center whitespace-nowrap">
          Top Scorers
        </router-link>

        <!-- Dropdown in mobile -->
        <div>
          <button
            @click="openDropdown = !openDropdown"
            class="hover:text-qelem-secondary group relative flex items-center cursor-pointer whitespace-nowrap">
            Resources
            <svg
              class="ml-1 w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <span
              class="absolute left-0 right-0 bottom-[-20px] md:bottom-[-35px] w-full h-0.5 bg-qelem-secondary scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </button>
          <div v-if="openDropdown" class="pl-4 mt-1">
            <a
              href="#"
              class="block mx-2 md:mx-4 mt-1 rounded-lg px-2 md:px-4 py-2 hover:bg-qelem-secondary-light"
              >Feed back Form</a>
            <a
              href="#"
              class="block mx-2 md:mx-4 px-2 md:px-4 rounded-lg py-2 hover:bg-qelem-secondary-light"
              >FAQs</a>
            <a
              href="#"
              class="block mx-2 md:mx-4 px-2 md:px-4 rounded-lg py-2 hover:bg-qelem-secondary-light"
              >Contact Us</a>
            <a
              href="#"
              class="block mx-2 md:mx-4 mb-1 px-2 md:px-4 rounded-lg py-2 hover:bg-qelem-secondary-light"
              >Announcment</a>
          </div>
        </div>

        <!-- Language Selector & Login -->
        <div class="items-center min-w-0">
          <div class="relative">
            <button
              @click="showLangCard = !showLangCard"
              class="border-2 border-gray-100 rounded-lg py-2 px-2 md:py-2.5 lg:px-4 md:px-2 text-base md:text-lg focus:bg-qelem-secondary-light focus:border-0 text-qelem-netural flex items-center">
              English
              <svg
                class="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              v-if="showLangCard"
              class="absolute left-0 right-0 mt-2 w-44 md:w-64 bg-white border-2 border-gray-100 rounded-lg shadow-lg z-20 text-base md:text-lg text-qelem-netural">
              <ul>
                <li>
                  <a
                    href="#"
                    class="block mx-2 md:mx-4 mt-1 rounded-lg px-2 md:px-4 py-2 hover:bg-qelem-secondary-light"
                    >English</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block mx-2 md:mx-4 rounded-lg px-2 md:px-4 py-2 hover:bg-qelem-secondary-light"
                    >Amharic</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block mx-2 md:mx-4 mb-1 rounded-lg px-2 md:px-4 py-2 hover:bg-qelem-secondary-light"
                    >Afaan Oromo</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex items-center space-x-2 mt-2">
            <div
              @click="toggleDarkMode"
              class="h-9 w-6 md:h-10 md:w-8 py-1 px-0.5 bg-qelem-white border-2 border-gray-100 rounded-lg">
              <svg
                v-if="!darkMode"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.039 1.98-5.27t4.904-2.634q.081 0 .159.006t.153.017q-.506.706-.801 1.57T10.158 7.5q0 2.667 1.866 4.533t4.534 1.867q.951 0 1.813-.295t1.548-.801q.012.075.017.153t.006.159q-.384 2.923-2.615 4.903T12.057 20"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M277.333 405.333v85.333h-42.667v-85.333zm99.346-58.824l60.34 60.34l-30.17 30.17l-60.34-60.34zm-241.359 0l30.17 30.17l-60.34 60.34l-30.17-30.17zM256 139.353c64.422 0 116.647 52.224 116.647 116.647c0 64.422-52.225 116.647-116.647 116.647A116.427 116.427 0 0 1 139.352 256c0-64.423 52.225-116.647 116.648-116.647m0 42.666c-40.859 0-73.981 33.123-73.981 74.062a73.76 73.76 0 0 0 21.603 52.296c13.867 13.867 32.685 21.64 52.378 21.603zm234.666 52.647v42.667h-85.333v-42.667zm-384 0v42.667H21.333v-42.667zM105.15 74.98l60.34 60.34l-30.17 30.17l-60.34-60.34zm301.7 0l30.169 30.17l-60.34 60.34l-30.17-30.17zM277.332 21.333v85.333h-42.667V21.333z"
                />
              </svg>
            </div>
            <button
              class="px-3 md:px-4 py-2 md:py-3 bg-qelem-primary hover:bg-qelem-secondary text-white rounded-xl text-sm md:text-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

