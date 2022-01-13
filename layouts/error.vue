<template>
  <main class="flex items-center justify-center mx-auto px-4 py-12 max-w-7xl sm:px-6 lg:px-8">
    <div>
      <h1
        v-if="error.statusCode === 404"
        class="pr-4 text-gray-200 text-5xl font-bold duration-700 md:text-7xl lg:text-9xl"
      >
        Erreur {{ error.statusCode }}
      </h1>
      <h1 v-else class="pr-4 text-gray-200 text-5xl font-bold duration-700 md:text-7xl lg:text-9xl">
        Erreur
      </h1>
      <NuxtLink to="/" class="text-base font-semibold sm:text-xl">
        <span class="text-green-500" />
        <span class="italic transform hover:translate-x-4 duration-200">Home page</span>
      </NuxtLink>
    </div>
  </main>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>

<style lang="scss" scoped>
h1 {
  animation: type 0.5s alternate infinite;
}

@keyframes type {
  from {
    box-shadow: inset -3px 0px 0px rgb(212, 212, 212);
  }
  to {
    box-shadow: inset -3px 0px 0px transparent;
  }
}
</style>
