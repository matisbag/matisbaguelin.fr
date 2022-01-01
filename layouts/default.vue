<template>
  <div class="flex flex-col min-h-screen">
    <AppBar />
    <Nuxt keep-alive :keep-alive-props="{ max: 5 }" class="flex-1 px-4 py-10" />
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  @apply text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-900;
}
</style>
