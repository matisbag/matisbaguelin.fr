<template>
  <main class="flex justify-center items-center max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div>
      <h1 class="text-gray-200 text-5xl md:text-7xl lg:text-9xl font-bold pr-4 duration-700">Error 404</h1>
      <NuxtLink to="/" class="text-base sm:text-xl font-semibold"><span class="text-emerald-500">/</span> <span class="italic transform hover:translate-x-4 duration-200">Home page</span></NuxtLink>
    </div>
  </main>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<style lang="scss" scoped>
  h1{
	  animation: type .5s alternate infinite;
  }

  @keyframes type{
	  from{box-shadow: inset -3px 0px 0px rgb(212, 212, 212);}
	  to{box-shadow: inset -3px 0px 0px transparent;}
  }
</style>