<template>
  <div id="feedback" class="bg-qelem-white pt-10 md:ml-0 ml-2 pb-10">
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
      Feedback
    </div>
    <h1 class="lg:text-4xl text-xl font-semibold text-center">We value your feedback</h1>
    <div
      class="text-md font-normal place-self-center p-6 text-center text-qelem-netural-300 max-w-xl">
      Helps us improve our services by sharing your experience with result portal
    </div>
    <form
      class="max-w-2xl mx-auto bg-gradient-to-b from-qelem-secondary-light to bg-qelem-primary-light rounded-lg shadow p-6 space-y-6">
      <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div class="flex-1">
          <label
            class="block pl-2 text-md text-qelem-netural-400 font-medium mb-1"
            for="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            class="w-full border border-gray-300 bg-qelem-white text-qelem-netural-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-qelem-primary"
            placeholder="Enter your full name"
          />
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div class="flex-1">
          <label
            class="block text-md text-qelem-netural-400 pl-2 font-medium mb-1"
            for="who">
            Who are you?
          </label>
          <select
            id="who"
            class="w-full border text-qelem-netural-300 bg-qelem-white border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-qelem-primary">
            <option value="">Select User Type</option>
            <option value="student">Grade 8</option>
            <option value="teacher">Grade 6</option>
          </select>
        </div>
        <div class="flex-1">
          <label
            class="block text-md text-qelem-netural-400 pl-2 font-medium mb-1"
            for="rating">
            Rate your experience
          </label
          >
          <select
            id="rating"
            class="w-full border text-qelem-netural-300 bg-qelem-white border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-qelem-primary">
            <option value="">Select</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
        </div>
      </div>
      <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div class="flex-1">
          <label
            class="block text-md text-qelem-netural-400 pl-2 font-medium mb-1"
            for="region">
            Region
          </label
          >
          <select
            id="region"
            class="w-full border text-qelem-netural-300 bg-qelem-white border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-qelem-primary">
            <option value="">Select Region</option>
            <option value="addis">Addis Ababa</option>
            <option value="amhara">Amhara</option>
            <option value="oromia">Oromia</option>
            <option value="tigray">Tigray</option>
          </select>
        </div>
        <div class="flex-1">
          <label
            class="block text-md text-qelem-netural-400 pl-2 font-medium mb-1"
            for="zone">
            Zone
          </label>
          <select
            id="zone"
            class="w-full border text-qelem-netural-300 bg-qelem-white border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-qelem-primary">
            <option value="">Select Zone</option>
            <option value="bole">Bole</option>
            <option value="arada">Arada</option>
            <option value="kolfe">Kolfe</option>
          </select>
        </div>
      </div>
      <div>
        <span class="block text-md pl-2 text-qelem-netural-400 font-medium mb-2">
          Did you to receive your result via SMS?
        </span>
        <div class="flex space-x-6 pl-4">
          <label class="inline-flex items-center">
            <input
              type="radio"
              class="form-radio text-qelem-primary"
              name="sms"
              value="yes"
            />
            <span class="ml-2">Yes</span>
          </label>
          <label class="inline-flex items-center">
            <input
              type="radio"
              class="form-radio text-qelem-primary"
              name="sms"
              value="no"
            />
            <span class="ml-2">No</span>
          </label>
        </div>
      </div>
      <div>
        <span class="block text-md pl-2 text-qelem-netural-400 font-medium mb-2">
        Did you experiance any problem in this platform?
        </span>
        <div class="flex space-x-6 pl-4">
          <label class="inline-flex items-center">
            <input
              type="radio"
              class="form-radio text-qelem-primary"
              name="problem"
              value="yes"
            />
            <span class="ml-2">Yes</span>
          </label>
          <label class="inline-flex items-center">
            <input
              type="radio"
              class="form-radio text-qelem-primary"
              name="problem"
              value="no"
            />
            <span class="ml-2">No</span>
          </label>
        </div>
      </div>
      <div>
        <label
          class="block text-md pl-2 text-qelem-netural-400 font-medium mb-1"
          for="experience">
          Write Your experience
        </label>
        <textarea
          id="experience"
          rows="4"
          class="w-full border bg-qelem-white border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-qelem-primary"
          placeholder="Share your experience">
        </textarea>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="bg-qelem-primary hover:bg-qelem-secondary text-white px-4 py-2 rounded-xl hover:bg-qelem-primary-dark transition">
          Submit Feedback
        </button>
      </div>
    </form>
  </div>
</template>
