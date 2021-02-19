<template>
  <article class="max-w-max overflow-hidden rounded-lg shadow-lg my-4 lg:w-2/4 flex flex-col">
    <a href="#">
      <img alt="Placeholder" class="block h-auto w-full" src="~/assets/conference.png">
    </a>
    <div class="shadow sm:px-10 sm:py-6 py-4 px-4 bg-black flex flex-col flex-1 justify-between">
      <div class="flex">
        <div v-if="project.github" class="text-sm font-bold flex-initial text-white mr-2">
        <img src="../assets/github.svg" alt="icon github" class="w-7 h-7 mx-auto text-white">
        </div>
      <div v-for="used in project.used" :key="used" class="content-center inline-block text-sm font-bold flex-initial bg-white text-black px-2 py-1 mr-2 rounded-3xl">{{used}}</div>
      </div>
      
      <h3 class="text-xl text-white font-semibold pb-3 mt-2">{{project.title}}</h3>
      <p class="text-base text-gray-200 pb-3 font-normal flex-1">{{project.description}}</p>
      <nuxt-link :to="'/projects/' + project.routeName" class="group text-emerald-500 font-bold">
        Voir le projet <svg class="text-xl ml-1 group-hover:ml-2 transition-all duration-150 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data() {
    return {
      
    }
  }
}
</script>
