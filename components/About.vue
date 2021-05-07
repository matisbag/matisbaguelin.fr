<template>
  <section id="about" class="max-w-7xl mx-auto py-12 sm:px-4 sm:py-24 lg:py-36 lg:px-6">
    <div class="text-center">
      <div class="text-5xl sm:text-7xl md:text-8xl font-semibold">
        <h2 class="font-light tracking-wide">Portfolio</h2>
        <h1 class="text-gradient bg-gradient-to-r from-green-400 to-blue-500 inline-block font-bold leading-snug">
          Matis Baguelin
        </h1>
      </div>
      <p class="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-300 font-medium sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Jeune développeur depuis fin 2019, je suis passionné par le développement web.
        <br class="hidden xl:inline-block" />
        Mes frameworks favoris sont : Vue.js et Laravel !
      </p>
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md shadow">
          <a href="https://github.com/MatisBag/" target="_blank" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 dark:bg-black hover:bg-green-500 duration-500">
            Github &#160;
            <img src="~/assets/icons/d-github.svg" alt="github icon" class="h-6 w-6 text-black">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>

<style>
  .text-gradient {
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
