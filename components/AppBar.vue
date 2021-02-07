<template>
  <header> <!-- bg-white shadow-lg w-full fixed -->
    <!-- <nav class="container mx-auto flex justify-between items-center py-2 px-10">
      <div class="logo p-4 font-bold">
        <NuxtLink to="/"><img src="~/assets/home-icon.png" alt=""></NuxtLink>
      </div>
      <div>
        <NuxtLink to="/about" class="btn px-4 py-2 text-gray-500 rounded-lg hover:bg-emerald-100 hover:text-emerald-700">About</NuxtLink>
        <NuxtLink to="/login" class="btn px-4 py-2 text-gray-500 rounded-lg hover:bg-emerald-100 hover:text-emerald-700">Login</NuxtLink>
      </div>
    </nav> -->

    <nav class="bg-gray-800 w-full shadow-md">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button @click="menuOn = !menuOn" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
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
            <div class="flex-shrink-0 flex items-center">
              <img class="h-12 w-auto" src="~/assets/d-home-icon.png" alt="Matis Baguelin">
            </div>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4 sm:items-stretch">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <NuxtLink to="/" class="px-4 py-2 text-gray-500 rounded-lg hover:bg-green-500 hover:text-gray-50">About</NuxtLink>
              <NuxtLink to="/about" class="px-4 py-2 text-gray-500 rounded-lg hover:bg-green-500 hover:text-gray-50 hover:font-medium">Projects</NuxtLink>
              <NuxtLink to="/login" class="px-4 py-2 text-gray-500 rounded-lg hover:bg-green-500 hover:text-gray-50">Skills</NuxtLink>
              <NuxtLink to="/" class="px-4 py-2 text-gray-500 rounded-lg hover:bg-green-500 hover:text-gray-50">Contact</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, toggle classes based on menu state. -->
      <div :class="menuOn ? 'block' : 'hidden'" class="sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <NuxtLink to="/" class="text-gray-300 hover:bg-green-500 hover:text-gray-50 block px-3 py-2 rounded-md text-base font-medium">Dashboard</NuxtLink>
          <NuxtLink to="/about" class="text-gray-300 hover:bg-green-500 hover:text-gray-50 block px-3 py-2 rounded-md text-base font-medium">Team</NuxtLink>
          <NuxtLink to="/login" class="text-gray-300 hover:bg-green-500 hover:text-gray-50 block px-3 py-2 rounded-md text-base font-medium">Projects</NuxtLink>
        </div>
      </div>
    </nav>
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
// .header {
//   @apply bg-white shadow-lg w-full fixed;
//   nav {
//     @apply container mx-auto flex justify-between items-center py-2 px-10;
//     .logo {
//       @apply p-4 font-bold;
//     }
//     .btn {
//       @apply px-4 py-2 text-gray-500 rounded-lg hover:bg-emerald-100 hover:text-emerald-700;
      .nuxt-link-exact-active {
        @apply text-green-500 bg-gray-900;
      }
//     }
//   }
// }
</style>