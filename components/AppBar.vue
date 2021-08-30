<template>
  <header class="w-full">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button @click="menuOn = !menuOn" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <svg :class="menuOn ? 'hidden' : 'block'" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open. -->
            <svg :class="menuOn ? 'block' : 'hidden'" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:justify-start py-6 sm:py-10">
          <nuxt-link to="/">
            <div class="flex-shrink-0 flex items-center">
              <img class="h-12 w-auto hidden dark:block" src="~/assets/d-home-icon.png" alt="Matis Baguelin">
              <img class="h-12 w-auto dark:hidden" src="~/assets/home-icon.png" alt="Matis Baguelin">
            </div>
          </nuxt-link>
        </div>
        <nav class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4 sm:items-stretch">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <nuxt-link to="/#about" class="px-4 py-2 text-green-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 duration-100">About</nuxt-link>
            <nuxt-link to="/#projects" class="px-4 py-2 text-green-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 duration-100">Projects</nuxt-link>
            <nuxt-link to="/#skills" class="px-4 py-2 text-green-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 duration-100">Skills</nuxt-link>
            <!-- <nuxt-link to="/#contact" class="px-4 py-2 text-green-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 duration-100">Contact</nuxt-link> -->
          </div>
        </nav>
      </div>
    </div>

    <!-- Mobile menu, toggle classes based on menu state. -->
    <div :class="menuOn ? 'block' : 'hidden'" class="sm:hidden absolute w-full px-2 animate__animated animate__bounceInDown">
      <div class="p-2 space-y-1 shadow-md rounded-lg bg-gray-100 bg-opacity-90 dark:bg-black dark:bg-opacity-80">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <nuxt-link to="/#about" class="mobile-link">About</nuxt-link>
        <nuxt-link to="/#projects" class="mobile-link">Projects</nuxt-link>
        <nuxt-link to="/#skills" class="mobile-link">Skills</nuxt-link>
        <!-- <nuxt-link to="/#contact" class="mobile-link">Contact</nuxt-link> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOn: false,
      isOn: false
    }
  }
};
</script>

<style lang="scss" scoped>
.mobile-link {
  @apply dark:text-gray-300 hover:bg-gray-200 hover:bg-opacity-70 dark:hover:bg-gray-800 hover:text-green-500 dark:hover:bg-opacity-90 block px-3 py-2 rounded-md text-base font-medium;
}
</style>