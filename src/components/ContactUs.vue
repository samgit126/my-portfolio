<template>
  <div id="contact-us" class="bg-gradient-to-r from-qelem-secondary-light to-qelem-primary-light p-6 md:pb-24">
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
      Contact Us
    </div>
    <h1 class="lg:text-4xl text-xl font-semibold text-center pb-10">Get in Touch</h1>
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-16 justify-center">
      <form
        class="w-full md:w-1/2 bg-qelem-secondary-light rounded-lg shadow p-8 space-y-6">
        <div>
          <label class="block text-qelem-black text-md pl-2 mb-1" for="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            class="w-full border bg-qelem-white border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label class="block text-qelem-black text-md pl-2 mb-1" for="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            class="w-full border bg-qelem-white border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label class="block text-qelem-black text-md pl-2 mb-1" for="subject">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            class="w-full border bg-qelem-white border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write a subject here"
          />
        </div>
        <div>
          <label class="block text-qelem-black text-md pl-2 mb-1" for="message">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            class="w-full border bg-qelem-white border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your message"></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-qelem-primary text-white font-semibold py-2 rounded-xl hover:bg-qelem-secondary transition">
          Send Message
        </button>
      </form>

      <div class="w-full lg:w-1/2 flex flex-col items-start mb-8 md:mb-0  mt-4 lg:-mt-36">
        <h2 class="text-3xl font-bold mb-4 text-gray-800">Get in Touch</h2>
        <div class="space-y-2 text-gray-700">
          <div class="flex items-center space-x-2 pb-4">
            <div class="bg-qelem-primary-light w-10 h-10 rounded-xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="text-qelem-primary"
              >
                <path
                  fill="currentColor"
                  d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                />
              </svg>
            </div>
            <div>
              <p class="text-md font-medium">Helpline</p>
              <p class="font-normal text-qelem-netural-300 text-sm">+251900000000</p>
            </div>
          </div>
          <div class="flex items-center space-x-2 pb-4">
            <div class="bg-qelem-primary-light w-10 h-10 rounded-xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                class="text-qelem-primary"
              >
                <path
                  fill="currentColor"
                  d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5m-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51c-.13.16-.43.15-.56.05l-4.37-3.73l-2.14 1.95l-2.13-1.95l-4.37 3.73c-.13.1-.43.11-.56-.05c-.14-.15-.06-.37.06-.51l3.9-4.06l-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04l6.25-5.04c.28-.24.62-.4.95-.07"
                />
              </svg>
            </div>
            <div>
              <p class="text-md font-medium">Email</p>
              <p class="font-normal text-qelem-netural-300 text-sm">
                support@ministry.et
              </p>
            </div>
          </div>
          <div class="flex items-center space-x-2 pb-4">
            <div class="bg-qelem-primary-light w-10 h-10 rounded-xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="text-qelem-primary"
              >
                <path
                  fill="currentColor"
                  d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.97 6.97 0 0 0 19 9m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
                />
              </svg>
            </div>
            <div>
              <p class="text-md font-medium">Location</p>
              <p class="font-normal text-qelem-netural-300 text-sm">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
          <div class="flex items-center space-x-2 pb-4">
            <div class="bg-qelem-primary-light w-10 h-10 rounded-xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="text-qelem-primary"
              >
                <path
                  fill="currentColor"
                  d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-.993.883L11 7v5l.009.131a1 1 0 0 0 .197.477l.087.1l3 3l.094.082a1 1 0 0 0 1.226 0l.094-.083l.083-.094a1 1 0 0 0 0-1.226l-.083-.094L13 11.585V7l-.007-.117A1 1 0 0 0 12 6"
                />
              </svg>
            </div>
            <div>
              <p class="text-md font-medium">Hours</p>
              <p class="font-normal text-qelem-netural-300 text-sm">
                Mon-Fri, 8:00 AM - 5:0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
