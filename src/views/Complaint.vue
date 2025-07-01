<script setup>
import { ref } from "vue";

const showForm = ref(true);

const subjectResults = ref([
  {
    name: "English",
    answered: "50/60",
    score: 90,
    submittedDate: "2024-06-01",
    resolvedDate: "2024-06-05",
    status: "Resolved",
  },
  {
    name: "Mathematics",
    answered: "42/45",
    score: 95,
    submittedDate: "2024-06-02",
    resolvedDate: "2024-06-06",
    status: "Cancelled",
  },
  {
    name: "Physics",
    answered: "26/50",
    score: 70,
    submittedDate: "2024-06-03",
    resolvedDate: "",
    status: "In Progress",
  },
  {
    name: "Social Study",
    answered: "32/40",
    score: 80,
    submittedDate: "2024-06-04",
    resolvedDate: "2024-06-07",
    status: "Resolved",
  },
  {
    name: "Biology",
    answered: "54/60",
    score: 92,
    submittedDate: "2024-06-05",
    resolvedDate: "",
    status: "Cancelled",
  },
]);
</script>
<template>
  <div class="bg-qelem-white pt-28 mb-24">
    <div class="container mx-auto px-4 lg:px-8 lg:pt-10 pt-4">
      <div class="flex flex-col items-center">
        <h1 class="text-2xl lg:text-4xl font-semibold mb-6">
          Submit and Track Complaints
        </h1>
        <p class="text-md text-qelem-netural-400 mb-4">
          Easily report your issues and track complaint status
        </p>
      </div>
      <div>
        <!-- toggle between complaint form and status tracking -->
        <div
          class="lg:flex lg:justify-between lg:text-xl text-sm mb-6 mt-6 bg-qelem-secondary-light max-w-md mx-auto rounded-r-full rounded-l-full p-3"
        >
          <button
            :class="[
              'px-4 py-1 rounded lg:ml-6 ml-2',
              showForm ? 'bg-qelem-primary text-white' : 'text-gray-800 ',
            ]"
            @click="showForm = true"
          >
            Complaint Form
          </button>
          <button
            :class="[
              'px-4 py-1 rounded mr-6',
              !showForm ? 'bg-qelem-primary text-white' : 'text-gray-800',
            ]"
            @click="showForm = false"
          >
            Complaint Status
          </button>
        </div>
        <div v-if="showForm">
          <div
            class="max-w-3xl mx-auto bg-white p-6 rounded-xl border-2 border-gray-200 shadow"
          >
            <form class="space-y-4">
              <div class="grid gap-2 lg:grid-cols-2 grid-cols-1">
                <div class="mb-4">
                  <label
                    for="regNumber"
                    class="block font-medium text-md pl-2 text-qelem-black mb-2"
                    >Registration Number</label
                  >
                  <input
                    id="regNumber"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:bg-qelem-primary-light focus:ring"
                    placeholder="Enter Your Registration Number"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="firstName"
                    class="block font-medium text-md pl-2 text-qelem-black mb-2"
                    >First Name</label
                  >
                  <input
                    id="firstName"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:bg-qelem-primary-light focus:ring"
                    placeholder="Please Enter Your First Name"
                  />
                </div>
              </div>
              <div class="lg:flex items-center space-x-6 lg:space-y-0 space-y-2 mb-4">
                <button
                  type="button"
                  class="bg-qelem-primary hover:bg-qelem-secondary flex items-center text-white px-4 py-2 rounded hover:bg-qelem-primary-dark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                    />
                  </svg>
                  Search Student
                </button>
                <button
                  type="button"
                  class="bg-gray-300 text-qelem-netural-300 border-2 border-gray-300 hover:text-qelem-secondary hover:border-2 hover:border-qelem-secondary hover:bg-qelem-secondary-light px-3 py-1.5 rounded"
                >
                  Clear
                </button>
              </div>
            </form>
            <!-- Display student details after search -->
            <div class="lg:flex justify-between mb-4 space-x-4">
              <div class="flex items-center space-x-4">
                <div>
                  <img
                    src="/profile.png"
                    alt="Student Photo"
                    class="w-16 h-16 rounded-full border-2 border-qelem-primary object-cover"
                  />
                </div>

                <div>
                  <div class="font-semibold text-lg text-qelem-black">Abebe Kebede</div>
                  <div class="text-qelem-netural-400">12345678</div>
                  <div class="text-qelem-netural-400">Grade: 8</div>
                </div>
              </div>
              <div class="text-qelem-netural-400">
                Previous Complaints
                <span class="text-center text-qelem-primary font-bold">2</span>
              </div>
            </div>
          </div>
          <!-- Complaint Form -->
          <div
            class="max-w-3xl mx-auto bg-white p-6 mt-6 rounded-xl border-2 border-gray-200 shadow"
          >
            <h1
              class="text-xl font-medium rounded-xl text-white bg-qelem-primary text-center p-1"
            >
              Complaint Form
            </h1>

            <form class="space-y-4 pt-4">
              <div class="mb-4 pt-6">
                <h1 class="block font-medium text-md pl-2 text-qelem-black mb-2">
                  Subject Wise Results *
                </h1>
                <label class="block font-normal text-sm pl-2 text-qelem-netural-400 mb-2"
                  >Please select the subjects you want to report the issue?</label
                >
                <div class="max-w-4xl mx-auto px-4">
                  <div>
                    <div class="overflow-x-auto">
                      <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th
                              class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400"
                            >
                              Subject
                            </th>
                            <th
                              class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400"
                            >
                              Answered
                            </th>
                            <th
                              class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400"
                            >
                              Score / 100
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-100">
                          <tr v-for="subject in subjectResults" :key="subject.name">
                            <td class="px-6 py-4 whitespace-nowrap text-qelem-black">
                              <input type="checkbox" class="mr-2" />
                              {{ subject.name }}
                            </td>
                            <td
                              class="px-6 py-4 whitespace-nowrap text-qelem-netural-400"
                            >
                              {{ subject.answered }}
                            </td>
                            <td
                              class="px-6 py-4 whitespace-nowrap text-qelem-netural-400"
                            >
                              {{ subject.score }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="lg:flex items-center lg:space-y-0 space-y-2 lg:ml-10 ml-2 space-x-6 mb-4 pt-10"
              >
                <button
                  type="button"
                  class="bg-qelem-primary hover:bg-qelem-secondary flex items-center text-white px-2 py-2 rounded hover:bg-qelem-primary-dark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20.04 2.323c1.016-.355 1.992.621 1.637 1.637l-5.925 16.93c-.385 1.098-1.915 1.16-2.387.097l-2.859-6.432l4.024-4.025a.75.75 0 0 0-1.06-1.06l-4.025 4.024l-6.432-2.859c-1.063-.473-1-2.002.097-2.387z"
                    />
                  </svg>
                  Submit Complaint
                </button>
                <button
                  type="button"
                  class="bg-gray-300 text-qelem-netural-300 border-2 border-gray-300 hover:text-qelem-secondary hover:border-2 hover:border-qelem-secondary hover:bg-qelem-secondary-light px-3 py-1.5 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        <div v-else>
          <div
            class="max-w-3xl mx-auto bg-white p-6 rounded-xl border-2 border-gray-200 shadow"
          >
            <form class="space-y-4">
              <div class="grid gap-2 lg:grid-cols-2 grid-cols-1">
                <div class="mb-4">
                  <label
                    for="regNumber"
                    class="block font-medium text-md pl-2 text-qelem-black mb-2"
                    >Registration Number</label
                  >
                  <input
                    id="regNumber"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:bg-qelem-primary-light focus:ring"
                    placeholder="Enter Your Registration Number"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="firstName"
                    class="block font-medium text-md pl-2 text-qelem-black mb-2"
                    >First Name</label
                  >
                  <input
                    id="firstName"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:bg-qelem-primary-light focus:ring"
                    placeholder="Please Enter Your First Name"
                  />
                </div>
              </div>
              <div class="lg:flex items-center space-x-6 lg:space-y-0 space-y-2 mb-4">
                <button
                  type="button"
                  class="bg-qelem-primary hover:bg-qelem-secondary flex items-center text-white px-4 py-2 rounded hover:bg-qelem-primary-dark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                    />
                  </svg>
                  Search Student
                </button>
                <button
                  type="button"
                  @click="clearForm"
                  class="bg-gray-300 text-qelem-netural-300 border-2 border-gray-300 hover:text-qelem-secondary hover:border-2 hover:border-qelem-secondary hover:bg-qelem-secondary-light px-3 py-1.5 rounded"
                >
                  Clear
                </button>
              </div>
            </form>
            <!-- Display student details after search -->
            <div class="lg:flex justify-between mb-4 space-x-4">
              <div class="flex items-center space-x-4">
                <div>
                  <img
                    src="/profile.png"
                    alt="Student Photo"
                    class="w-16 h-16 rounded-full border-2 border-qelem-primary object-cover"
                  />
                </div>

                <div>
                  <div class="font-semibold text-lg text-qelem-black">Abebe Kebede</div>
                  <div class="text-qelem-netural-400">12345678</div>
                  <div class="text-qelem-netural-400">Grade: 8</div>
                </div>
              </div>
              <div class="text-qelem-netural-400">
                Previous Complaints
                <span class="text-center text-qelem-primary font-bold">2</span>
              </div>
            </div>
          </div>
          <!-- Tracking Complaint -->
          <div
            class="max-w-6xl mx-auto bg-white p-6 mt-6 rounded-xl border-2 border-gray-200 shadow"
          >
            <h1
              class="text-xl font-medium rounded-xl text-white bg-qelem-primary text-center p-1"
            >
              Tracking Complaint
            </h1>

            <form class="space-y-4 pt-4">
              <div class="mb-4 max-w-6xl pt-6">
                <div class="max-w-6xl mx-auto px-4">
                  <div>
                    <div class="overflow-x-auto">
                      <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th
                              class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400"
                            >
                              Subject
                            </th>
                            <th
                              class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400"
                            >
                              Answered
                            </th>
                            <th
                              class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400"
                            >
                              Score / 100
                            </th>
                            <th
                              class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400"
                            >
                              Submitted Date
                            </th>

                            <th
                              class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400"
                            >
                              Status
                            </th>
                            <th
                              class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400"
                            >
                              Resolved Date
                            </th>
                            <th
                              class="px-6 py-3 text-left text-md font-medium text-qelem-netural-400"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-100">
                          <tr v-for="subject in subjectResults" :key="subject.name">
                            <td class="px-6 py-4 whitespace-nowrap text-qelem-black">
                              {{ subject.name }}
                            </td>
                            <td
                              class="px-6 py-4 whitespace-nowrap text-qelem-netural-400"
                            >
                              {{ subject.answered }}
                            </td>
                            <td
                              class="px-6 py-4 whitespace-nowrap text-qelem-netural-400"
                            >
                              {{ subject.score }}
                            </td>
                            <td
                              class="px-6 py-4 whitespace-nowrap text-qelem-netural-400"
                            >
                              {{ subject.submittedDate }}
                            </td>

                            <td
                              class="px-6 py-4 whitespace-nowrap flex items-center"
                              :class="{
                                'text-qelem-primary': subject.status === 'Resolved',
                                'text-qelem-secondary': subject.status === 'In Progress',
                                'text-red-500':
                                  subject.status !== 'Resolved' &&
                                  subject.status !== 'In Progress',
                              }"
                            >
                              <svg
                                v-if="subject.status === 'Resolved'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-1"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                                />
                              </svg>
                              <svg
                                v-else-if="subject.status === 'In Progress'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-1"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                                />
                              </svg>
                              <svg
                                v-else
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                class="mr-1"
                              >
                                <path
                                  fill="currentColor"
                                  d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                                />
                              </svg>
                              {{ subject.status }}
                            </td>
                            <td
                              class="px-6 py-4 whitespace-nowrap text-qelem-netural-400"
                            >
                              {{ subject.resolvedDate }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-qelem-primary">
                              View Preview
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
