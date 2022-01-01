<template>
  <section id="about" class="mx-auto py-12 max-w-7xl sm:px-4 sm:py-24 lg:px-6 lg:py-36">
    <div class="text-center">
      <div class="text-5xl font-semibold sm:text-7xl md:text-8xl">
        <h2 class="font-light tracking-wide">Portfolio</h2>
        <h1
          class="
            text-gradient
            inline-block
            font-bold
            leading-snug
            bg-gradient-to-r
            from-green-400
            to-blue-500
          "
        >
          Matis Baguelin
        </h1>
      </div>
      <p
        class="
          mt-3
          mx-auto
          max-w-md
          dark:text-gray-300
          text-gray-600 text-base
          font-medium
          sm:text-lg
          md:mt-5 md:max-w-3xl md:text-xl
        "
      >
        Jeune développeur depuis fin 2019, je suis passionné par le développement web.
        <br class="hidden xl:inline-block" />
        Mes frameworks favoris sont : Vue.js et Laravel !
      </p>
      <div class="flex justify-center mt-8">
        <div class="inline-flex rounded-md shadow">
          <a
            href="https://github.com/MatisBag/"
            target="_blank"
            rel="noopener"
            class="
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              text-white text-base
              font-medium
              dark:bg-black
              bg-gray-900
              hover:bg-green-500
              border border-transparent
              rounded-md
              duration-500
            "
          >
            Github &#160;
            <img src="~/assets/icons/d-github.svg" alt="github icon" class="w-6 h-6 text-black" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style>
.text-gradient {
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
