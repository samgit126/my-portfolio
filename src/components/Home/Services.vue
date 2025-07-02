<template>
  <div class="flex items-center space-x-6">
    <div class="bg-white max-w-4xl rounded-xl mt-6">
      <div class="flex justify-between p-4">
        <h1 class="text-xl font-semibold">Services I Offered</h1>
        <a
          href="#"
          class="text-base font-normal text-qelem-primary underline underline-offset-4"
          >See All Services</a
        >
      </div>
      <div class="grid grid-cols-4 p-4 gap-4">
        <div class="bg-gray-50 p-2 w-full">
          <img src="/system.png" class="p-4 rounded-2xl" />
          <h1 class="text-center font-medium">System dev't</h1>
        </div>
        <div class="bg-gray-50 p-2 w-full">
          <img src="/mobile.png" class="p-4 rounded-2xl" />
          <h1 class="text-center font-medium">Mobile App</h1>
        </div>
        <div class="bg-gray-50 p-2 w-full">
          <img src="/ui.png" class="p-4 rounded-2xl" />
          <h1 class="text-center font-medium">UI/UX Design</h1>
        </div>
        <div class="bg-gray-50 p-2 w-full">
          <img src="/training.png" class="p-4 rounded-2xl" />
          <h1 class="text-center font-medium">Professional Training</h1>
        </div>
      </div>
    </div>
    <div class=" bg-white p-4 rounded-xl shadow-lg pb-12 pt-10">
      <div class="bg-gray-100 px-2 py-3 rounded-xl">
        <div class="overflow-hidden whitespace-nowrap">
          <div class="inline-block animate-marquee" style="min-width: 100%">
            <h1>Available for Hire 🚀 Crafting Digital Experience</h1>
          </div>
        </div>
      </div>
      <h1 class="text-4xl font-bold font-inter p-7">Let's 🤝 <span> <br>Work Together</span></h1>
      <a class="text-qelem-primary font-semibold pl-2 underline underline-offset-2">Let's Talk</a>
    </div>
  </div>
</template>
<style scoped>
.animate-marquee {
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
