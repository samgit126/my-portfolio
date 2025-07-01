<script setup>
import { ref } from "vue";

const subjectResults = ref([
  { name: "English", answered: "50/60", score: 90 },
  { name: "Mathematics", answered: "42/45", score: 95 },
  { name: "Physics", answered: "26/50", score: 70 },
  { name: "Social Study", answered: "32/40", score: 80 },
  { name: "Biology", answered: "54/60", score: 92 },
]);

</script>

<template>
  <!-- User Input Field  -->
  <div
    id="check-result"
    class="bg-gradient-to-b from-qelem-secondary-light to bg-qelem-primary-light mb-10 p-6 rounded-xl shadow-md max-w-max mx-auto mt-10">
    <h2 class="lg:text-4xl text-3xl font-medium mb-6 text-center text-qelem-black">
      Check Your Results
    </h2>
    <p class="text-base font-normal text-qelem-netural-300 text-center">
      Check your results by entering your registration number and first name
    </p>
    <form @submit.prevent="checkResult">
      <div class="mb-4 pt-4">
        <label class="block text-qelem-netural-400 font-medium pl-2 mb-2" for="regNumber">
          Registration Number
        </label>
        <input
          id="regNumber"
          type="text"
          class="w-full px-4 py-2 rounded-xl bg-qelem-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-qelem-primary"
          placeholder="Enter your registration number (e.g., 7 digits)"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block text-qelem-netural-400 font-medium pl-2 mb-2" for="firstName">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          class="w-full px-4 py-2 rounded-xl bg-qelem-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-qelem-primary"
          placeholder="Enter your first name"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full flex items-center justify-center cursor-pointer bg-qelem-primary text-white font-normal py-2 rounded-lg hover:bg-qelem-secondary transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="mr-2"
        >
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
          />
        </svg>
        Check My Result
      </button>
      <p class="text-center text-qelem-netural-400 pt-4">OR check result with:</p>
      <a
        class="w-full mt-4 flex items-center space-x-2 justify-center cursor-pointer border-2 border-qelem-primary bg-qelem-white hover:border-qelem-secondary hover:text-qelem-secondary text-qelem-primary font-medium py-2 rounded-lg transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434"
          />
        </svg>
        Get Result via Telegram Bot
      </a>
      <p class="text-center text-base text-qelem-netural-400 pt-4">
        Looking for last year exam results?
      </p>
      <a
        href="#"
        class="text-qelem-primary font-medium pt-4 flex items-center justify-center space-x-2">
        View Previous Results
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5h6v6m0-6L5 19"
          />
        </svg>
      </a>
    </form>
  </div>
  <!-- End of User Input -->

  <div class="max-w-4xl mx-auto px-4">
    <div class="bg-qelem-primary rounded-lg shadow-md p-3 mb-6">
      <h3 class="text-2xl font-normal text-qelem-white">Grade 8 Examination Result</h3>
    </div>
  </div>
  <!-- Student Profile -->
  <div class="max-w-4xl mx-auto px-4">
    <div class="bg-qelem-white rounded-lg border-2 border-gray-200 p-3 mb-10">
      <h3 class="text-xl font-medium text-qelem-black">Student Profile</h3>
      <div class="md:flex items-center justify-between">
        <div>
          <img src="/profile.png" class="rounded-full p-4" />
          <h3 class="text-md font-medium text-qelem-black">Abebe Kebede Zeleke</h3>
        </div>
        <div>
          <h1 class="text-md text-qelem-netural-300">Registration Number</h1>
          <h3 class="text-md font-medium text-qelem-netural-400 pb-1.5">00001</h3>
          <h1 class="text-md text-qelem-netural-300">Gender</h1>
          <h3 class="text-md font-medium text-qelem-netural-400 pb-1.5">Male</h3>
          <h1 class="text-md text-qelem-netural-300">Grade/Class</h1>
          <h3 class="text-md font-medium text-qelem-netural-400 pb-1.5">8</h3>
          <h1 class="text-md text-qelem-netural-300">Academic Year</h1>
          <h3 class="text-md font-medium text-qelem-netural-400 pb-1.5">2025</h3>
        </div>
        <div class="pr-10">
          <h1 class="text-md text-qelem-netural-300">Nationality</h1>
          <h3 class="text-md font-medium text-qelem-netural-400 pb-1.5">Ethiopian</h3>
          <h1 class="text-md text-qelem-netural-300">Zone</h1>
          <h3 class="text-md font-medium text-qelem-netural-400 pb-1.5">South Gonder</h3>
          <h1 class="text-md text-qelem-netural-300">Woreda</h1>
          <h3 class="text-md font-medium text-qelem-netural-400 pb-1.5">Debre Tabor</h3>
          <h1 class="text-md text-qelem-netural-300">School</h1>
          <h3 class="text-md font-medium text-qelem-netural-400 pb-1.5">
            Tewodros Primary School
          </h3>
        </div>
      </div>
    </div>
  </div>
  <!-- Result Summary -->
  <div class="max-w-4xl mx-auto px-4">
    <div class="bg-qelem-white rounded-lg border-2 border-gray-200 p-3 mb-10">
      <h3 class="text-xl font-medium text-qelem-black">Result Summary</h3>
      <div class="md:flex items-center justify-between">
        <div class="p-4">
          <h1 class="text-md text-qelem-netural-300">Total Score</h1>
          <h3 class="text-xl font-medium text-qelem-netural-400">
            <span class="text-qelem-primary text-2xl">410/</span>500
          </h3>
        </div>
        <div class="p-4">
          <h1 class="text-md text-qelem-netural-300">Percentile</h1>
          <h3 class="text-xl font-medium text-qelem-netural-400">
            <span class="text-qelem-primary text-2xl">92%/</span>2M candidates
          </h3>
        </div>
        <div class="p-4">
          <h1 class="text-md text-qelem-netural-300">Average</h1>
          <h3 class="text-xl font-medium text-qelem-netural-400">82</h3>
        </div>
        <div class="md:p-4">
          <h1 class="text-md text-qelem-netural-300">Status</h1>
          <div
            class="flex items-center space-x-4 justify-center bg-qelem-primary-light py-2 text-xl font-semibold md:px-6 text-qelem-primary rounded-l-full rounded-r-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
              class="pr-1"
            >
              <defs>
                <mask id="ipSCheckOne0">
                  <g fill="none" stroke-linejoin="round" stroke-width="4">
                    <path
                      fill="#fff"
                      stroke="#fff"
                      d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"
                    />
                    <path stroke="#000" stroke-linecap="round" d="m16 24l6 6l12-12" />
                  </g>
                </mask>
              </defs>
              <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)" />
            </svg>
            Passed
          </div>
          <h1 class="text-sm text-qelem-netural-400">Promoted to grade 9</h1>
        </div>
      </div>
    </div>
  </div>
  <!-- Subject Results -->
  <div class="max-w-4xl mx-auto px-4">
    <div class="bg-qelem-white rounded-lg border-2 border-gray-200 p-3 mb-10">
      <h3 class="text-lg font-semibold text-qelem-black mb-4">Subject Wise Results</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400">
                Subject
              </th>
              <th class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400">
                Answered
              </th>
              <th class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400">
                Score / 100
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-100">
            <tr v-for="subject in subjectResults" :key="subject.name">
              <td class="px-6 py-4 whitespace-nowrap text-qelem-black">
                {{ subject.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-qelem-netural-400">
                {{ subject.answered }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-qelem-netural-400">
                {{ subject.score }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Download  and other button-->
  <div class="max-w-4xl mx-auto px-4 md:pb-16">
    <div class="bg-qelem-white rounded-lg border-2 border-gray-200 mb-10">
      <div class="md:flex items-center p-3 md:space-x-10 space-y-4 md:space-y-0">
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
        <router-link to="/top-scorers"
          class="flex items-center px-3 cursor-pointer py-2 border-2 border-qelem-primary text-qelem-primary rounded-lg hover:border-qelem-secondary hover:text-qelem-secondary transition font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            class="mr-1">
            <path
              fill="currentColor"
              d="M11.18 14.356c0-1.451 1.1-2.254 2.894-3.442C16.268 9.458 19 7.649 19 3.354a.703.703 0 0 0-.709-.699h-3.43C14.377 1.759 12.932.8 10 .8c-2.934 0-4.377.959-4.862 1.855H1.707A.703.703 0 0 0 1 3.354c0 4.295 2.73 6.104 4.926 7.559c1.794 1.188 2.894 1.991 2.894 3.442v1.311c-1.884.209-3.269.906-3.269 1.736c0 .994 1.992 1.799 4.449 1.799s4.449-.805 4.449-1.799c0-.83-1.385-1.527-3.269-1.736zM13.957 9.3c.566-1.199 1.016-2.826 1.088-5.246h2.51c-.24 2.701-1.862 4.064-3.598 5.246M10 2.026c2.732-.002 3.799 1.115 3.798 1.529c0 .418-1.066 1.533-3.798 1.535c-2.732-.001-3.799-1.116-3.799-1.534C6.2 3.142 7.268 2.024 10 2.026M2.445 4.054h2.509c.073 2.42.521 4.047 1.089 5.246c-1.736-1.182-3.359-2.545-3.598-5.246"
            />
          </svg>
          View Top Scorers
        </router-link>
        <button
          class="flex items-center px-3 cursor-pointer py-2 border-2 border-qelem-primary text-qelem-primary rounded-lg hover:border-qelem-secondary hover:text-qelem-secondary transition font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="mr-1"
          >
            <path
              fill="currentColor"
              d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4.724l-4.762 2.857a1 1 0 0 1-1.508-.743L7 21v-2H6a4 4 0 0 1-3.995-3.8L2 15V7a4 4 0 0 1 4-4zm-4 9H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m2-4H8a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2"
            />
          </svg>
          Submit Compliant
        </button>
      </div>
    </div>
  </div>
</template>


