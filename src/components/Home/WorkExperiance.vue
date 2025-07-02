<template>
  <div class="max-w-lg mx-auto">
    <div class="bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold mb-4 text-gray-800">Work Experience</h2>
      <transition-group name="slide-fade" tag="ul" class="space-y-4">
        <li
          v-for="(exp, idx) in experiences"
          :key="exp.id"
          class="bg-gray-100 rounded-md p-4 flex flex-col shadow transition-transform"
        >
          <span class="text-lg font-semibold text-blue-700">{{ exp.role }}</span>
          <span class="text-gray-600">{{ exp.company }} &mdash; {{ exp.period }}</span>
          <span class="text-gray-500 text-sm mt-1">{{ exp.description }}</span>
        </li>
      </transition-group>
    </div>
    <div class="bg-white shadow-lg rounded-lg p-6 mt-4">
      <h1 class="text-xl font-semibold font-inter">My Expert Area</h1>
      <div class="grid grid-cols-3 gap-3">
        <div class="p-3">
          <img src="/public/vue.png" class="w-8 h-8 bg-gray" />
          <h1>Vue Js</h1>
        </div>
        <div class="p-3">
          <img src="/public/taliwind.png" class="w-8 h-8 bg-gray" />
          <h1>Tailwind</h1>
        </div>
        <div class="p-3">
          <img src="/public/laravel.png" class="w-8 h-8 bg-gray" />
          <h1>Laravel</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const experiences = ref([
  {
    id: 1,
    role: "Frontend Developer",
    company: "Qelem Meda Technlogies",
    period: "2024 - Present",
    description: "Building responsive web apps with Vue.js and TailwindCSS.",
  },
  {
    id: 2,
    role: "Lecturer",
    company: "Wollo University, KIoT",
    period: "2022 - Present",
    description: "Teaching different courses and engaging in different researchs.",
  },
  {
    id: 3,
    role: "Assistant Lecturer",
    company: "Wollo University, KIoT",
    period: "2019 - 2022",
    description: "Teaching different courses and mentoring students.",
  },
]);
</script>
