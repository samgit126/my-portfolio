<script setup>
const testimonials = [
  {
    name: "Fikr Alemu",
    position: "Grade 8 student, West Arsi  Zone",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text:
      "I was able to check my Grade 8 results in just a few seconds using the portal on my phone. It was so easy, and I even downloaded my result to show my family. The Top Scorer list made me proud to see my classmates there too!",
  },
  {
    name: "Almaz Kebede ",
    position: "Parent, West Arsi Zone",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text:
      "I appreciate how simple the result website is. I could easily check my daughter’s result and print it for our records. I especially liked that it had language options in Afaan Oromo and Amharic. It made everything clear for me as a parent.",
  },
  {
    name: "Dawit Getachew",
    position: "Region Education Admin, Oromia",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text:
      "The new ministry result portal has made our work so much easier. We can download result reports, track complaints from schools, and even handle student issues from rural areas. It’s efficient, secure, and saves valuable time for our office.",
  },
];
</script>

<template>
  <section class="py-12 bg-qelem-white">
    <div class="max-w-7xl mx-auto px-4">
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
        Testimonials
      </div>
      <h1 class="lg:text-4xl text-xl font-semibold text-center">Hear What Our Users Are Saying</h1>
      <div class="text-md font-normal place-self-center p-6 text-center text-qelem-netural-300 max-w-4xl">
        We’re proud to support students, parents, and administrators with a seamless
        result-checking and reporting experience. Here’s what they have to say about using
        the platform.
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(testimonial, idx) in testimonials"
          :key="idx"
          class="bg-qelem-white hover:bg-gray-50 cursor-pointer p-6 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center mb-2">
            <template v-for="star in 5">
              <svg
                v-if="star <= testimonial.rating"
                key="star-filled"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"
                />
              </svg>
              <svg
                v-else
                key="star-empty"
                class="w-5 h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"
                />
              </svg>
            </template>
            <p class="text-qelem-netural-300 text-md pl-2 pt-1">
              {{ testimonial.rating }} .0
            </p>
          </div>
          <p class="text-qelem-netural-300 text-md text-justify">"{{ testimonial.text }}"</p>
          <div class="flex items-center mb-4">
            <img
              :src="testimonial.photo"
              :alt="testimonial.name"
              class="w-14 h-14 rounded-full object-cover mr-4"
            />
            <div>
              <div class="font-semibold text-lg">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-500">{{ testimonial.position }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

