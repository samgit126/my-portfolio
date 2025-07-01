<script setup>
import { ref, computed } from "vue";

import Feedback from "../components/Feedback.vue";

const allScorers = ref([
  {
    fullName: "John Doe",
    registrationNumber: "123",
    totalScore: 95,
    percentile: 99,
    zone: "Zone 1",
    woreda: "Woreda A",
    school: "School X",
  },
  {
    fullName: "Jane Smith",
    registrationNumber: "124",
    totalScore: 93,
    percentile: 97,
    zone: "Zone 2",
    woreda: "Woreda B",
    school: "School Y",
  },
  {
    fullName: "Alice Johnson",
    registrationNumber: "125",
    totalScore: 90,
    percentile: 95,
    zone: "Zone 1",
    woreda: "Woreda A",
    school: "School X",
  },
  {
    fullName: "Bob Brown",
    registrationNumber: "126",
    totalScore: 88,
    percentile: 92,
    zone: "Zone 2",
    woreda: "Woreda B",
    school: "School Y",
  },
  {
    fullName: "Charlie Davis",
    registrationNumber: "127",
    totalScore: 85,
    percentile: 90,
    zone: "Zone 1",
    woreda: "Woreda A",
    school: "School X",
  },
  {
    fullName: "Diana Evans",
    registrationNumber: "128",
    totalScore: 82,
    percentile: 88,
    zone: "Zone 2",
    woreda: "Woreda B",
    school: "School Y",
  },
  {
    fullName: "Ethan Foster",
    registrationNumber: "129",
    totalScore: 80,
    percentile: 85,
    zone: "Zone 1",
    woreda: "Woreda A",
    school: "School X",
  },
  {
    fullName: "Fiona Green",
    registrationNumber: "130",
    totalScore: 78,
    percentile: 83,
    zone: "Zone 2",
    woreda: "Woreda B",
    school: "School Y",
  },
]);

const academicYears = ref(["2023", "2022", "2021"]);
const zones = ref(["Zone 1", "Zone 2"]);
const woredas = ref(["Woreda A", "Woreda B"]);
const schools = ref(["School X", "School Y"]);

const filters = ref({
  academicYear: "",
  zone: "",
  woreda: "",
  school: "",
});

const pagination = ref({
  page: 1,
  pageSize: 10,
});

const filteredScorers = computed(() => allScorers.value);

const totalPages = computed(
  () => Math.ceil(filteredScorers.value.length / pagination.value.pageSize) || 1
);

const paginatedScorers = computed(() => {
  const start = (pagination.value.page - 1) * pagination.value.pageSize;
  return filteredScorers.value.slice(start, start + pagination.value.pageSize);
});
</script>

<template>
  <div class="p-4 lg:pt-24 bg-white mt-16 shadow rounded">
    <div
      class="text-md font-medium flex items-center place-self-center mb-4 p-2 bg-qelem-primary-light max-w-max text-qelem-primary rounded-l-full rounded-r-full px-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
        class="mr-2"
      >
        <path
          fill="#0B529C"
          d="M7.53 1.282a.5.5 0 0 1 .94 0l.478 1.306a7.5 7.5 0 0 0 4.464 4.464l1.305.478a.5.5 0 0 1 0 .94l-1.305.478a7.5 7.5 0 0 0-4.464 4.464l-.478 1.305a.5.5 0 0 1-.94 0l-.478-1.305a7.5 7.5 0 0 0-4.464-4.464L1.282 8.47a.5.5 0 0 1 0-.94l1.306-.478a7.5 7.5 0 0 0 4.464-4.464Z"
        />
      </svg>
      Top Scorers
    </div>
    <h1 class="lg:text-4xl text-xl font-semibold text-center">
      Outstanding students achievement in Ministry
    </h1>
    <div
      class="text-md font-normal place-self-center p-6 text-center text-qelem-netural-300 max-w-xl">
      Celebrating excellence and academic achievement. Here are the outstanding students
      who scored the highest in this examination period.
    </div>
    <div class="max-w-7xl mx-auto p-4 border-2 border-gray-200 rounded-lg">
      <div class="flex flex-wrap gap-4 mb-4">
        <select
          class="border border-gray-200 text-qelem-netural-300 rounded px-3 py-2"
          v-model="filters.academicYear">
          <option value="">All Academic Years</option>
          <option v-for="year in academicYears" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
        <select
          class="border rounded px-3 py-2 border-gray-200 text-qelem-netural-300"
          v-model="filters.zone">
          <option value="">All Zones</option>
          <option v-for="zone in zones" :key="zone" :value="zone">{{ zone }}</option>
        </select>
        <select
          class="border rounded px-3 py-2 border-gray-200 text-qelem-netural-300"
          v-model="filters.woreda">
          <option value="">All Woredas</option>
          <option v-for="woreda in woredas" :key="woreda" :value="woreda">
            {{ woreda }}
          </option>
        </select>
        <select
          class="border rounded px-3 py-2 border-gray-200 text-qelem-netural-300"
          v-model="filters.school">
          <option value="">All Schools</option>
          <option v-for="school in schools" :key="school" :value="school">
            {{ school }}
          </option>
        </select>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full border border-gray-200 bg-white">
          <thead>
            <tr class="bg-gray-100">
              <th class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                Rank
              </th>
              <th class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                Full Name
              </th>
              <th class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                Registration Number
              </th>
              <th class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                Total Score
              </th>
              <th class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                Percentile
              </th>
              <th class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                Zone
              </th>
              <th class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                Woreda
              </th>
              <th class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                School
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(scorer, idx) in paginatedScorers"
              :key="scorer.registrationNumber"
              class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                {{ idx + 1 + (pagination.page - 1) * pagination.pageSize }}
              </td>
              <td class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                {{ scorer.fullName }}
              </td>
              <td class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                {{ scorer.registrationNumber }}
              </td>
              <td class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                {{ scorer.totalScore }}
              </td>
              <td class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                {{ scorer.percentile }}
              </td>
              <td class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                {{ scorer.zone }}
              </td>
              <td class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                {{ scorer.woreda }}
              </td>
              <td class="px-4 py-2 border border-gray-200 text-qelem-netural-300">
                {{ scorer.school }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
        <div class="flex items-center gap-2">
          <button
            class="px-3 py-1 border border-gray-200 rounded disabled:opacity-50"
            :disabled="pagination.page === 1"
            @click="pagination.page--">
            Prev
          </button>
          <span class="text-qelem-netural-400"
            >Page {{ pagination.page }} of {{ totalPages }}</span>
          <button
            class="px-3 py-1 border border-gray-200 rounded disabled:opacity-50"
            :disabled="pagination.page === totalPages"
            @click="pagination.page++">
            Next
          </button>
        </div>
        <button
          class="flex items-center px-3 cursor-pointer py-2 bg-qelem-primary text-white rounded-lg hover:bg-qelem-secondary transition font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="mr-1">
            <path fill="currentColor" d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z" />
          </svg>
          Download
        </button>
      </div>
    </div>
  </div>
  <Feedback />
</template>
