<script setup>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
</script>
<template>
  <header>
    <Navbar />
    <Sidebar />
  </header>
  <RouterView class="-mt-[590px] justify-center ml-[500px] max-w-4xl"/>
  <div class="justify-center mt-10">
    <p class="text-center text-gray-700 font-medium">&copy; Samuel Temesgen 2025</p>
  </div>
</template>
