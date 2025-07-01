<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";
</script>
<template>
  <header >
    <Navbar />
  </header>
  <Sidebar/>
  <RouterView />
  <Footer />
</template>
