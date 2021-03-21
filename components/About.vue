<template>
  <section id="about" class="max-w-7xl mx-auto py-12 px-4 sm:px-6 sm:py-24 lg:py-36 lg:px-8">
    <div class="text-center">
      <h2 class="text-5xl sm:text-7xl md:text-8xl font-semibold text-gray-100">
        <span class="font-light tracking-wide">Portfolio</span>
        <br class="md:hidden">
        <h1 class="text-gradient bg-gradient-to-r from-green-400 to-blue-500 inline-block font-bold leading-snug">
          Matis Baguelin
        </h1>
      </h2>
      <p class="mt-3 max-w-md mx-auto text-base text-gray-300 font-medium sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Jeune développeur depuis 2020, je suis passioné par le développement web.
        <br class="hidden xl:inline-block">
        Mes frameworks favoris sont : Vue.js et Laravel !
      </p>
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md shadow">
          <a href="https://github.com/MatisBag/" target="_blank" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-emerald-500 duration-500">
            Github &#160;
            <img src="~/assets/icons/github.svg" alt="github icon" class="h-6 w-6">
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a href="" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-500 bg-black hover:text-emerald-600 duration-500">
            CV &#160;
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
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
