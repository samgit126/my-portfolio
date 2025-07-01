<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "How do I check my examination results?",
    answer: "Click on 'Forgot password' at the login page and follow the instructions.",
  },
  {
    question: "What should I do if my results not working?",
    answer: "You can view your results in the 'Results' section after logging in.",
  },
  {
    question: "How can Download my results?",
    answer: "Please email support@ministryresult.com for any assistance.",
  },
  {
    question: "How to submit a complaint about my results?",
    answer: "Please email support@ministryresult.com for any assistance.",
  },
  {
    question: "How to check my complaint status?",
    answer: "Please email support@ministryresult.com for any assistance.",
  },
]);

const openIndex = ref(null);

function toggle(idx) {
  openIndex.value = openIndex.value === idx ? null : idx;
}
</script>
<template>
  <div
    id="faqs"
    class="bg-gradient-to-r from-qelem-secondary-light to-qelem-primary-light">
    <div class="max-w-4xl mx-auto p-6">
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
        FAQs
      </div>
      <h1 class="lg:text-4xl text-xl font-semibold text-center">Frequently Asked Questions</h1>
      <div class="text-md font-normal place-self-center p-6 text-center text-qelem-netural-300 max-w-xl">
        Everything you need to know about grade 8 ministry result portal
      </div>
      <div v-for="(faq, idx) in faqs" :key="idx" class="mb-2 mt-4">
        <button
          @click="toggle(idx)"
          class="w-full flex justify-between items-center border-b-0 border-gray-100 bg-qelem-white px-4 py-5 rounded-xl focus:outline-none transition">
          <span class="text-left font-medium">{{ faq.question }}</span>
          <svg
            :class="{
              'transform rotate-180': openIndex === idx,
              'transform rotate-0': openIndex !== idx,
            }"
            class="w-5 h-5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          v-show="openIndex === idx"
          class="bg-white px-4 py-4 border border-t-0 border-gray-200 rounded-b-lg text-gray-700 transition">
          {{ faq.answer }}
        </div>
      </div>
    </div>
    <p class="text-center text-qelem-netural-400 pt-4">
      Still have questions? We are here to help!
    </p>
    <p class="text-center text-qelem-primary font-semibold pt-1 pb-10">
      Contact our support team ->
    </p>
  </div>
</template>
