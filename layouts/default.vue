<template>
  <div class="min-h-screen flex flex-col">
    <AppBar />
    <Nuxt class="flex-1 px-4 py-10"/>
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  @apply bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white;
}
</style>