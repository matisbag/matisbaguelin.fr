<template>
  <li class="relative group flex flex-col rounded-lg max-w-5xl transform sm:hover:scale-105 duration-500" >
    <nuxt-link :to="'/projects/' + project.routeName">
      <img class="rounded-lg" :src="require(`~/assets/${project.image}.png`)" :alt="'home page' + project.title">
      <div>
        <div class="flex space-x-2 my-1">
          <span v-if="project.github" class="flex items-center px-1">
            <img src="~/assets/icons/github.svg" alt="icon github" class="h-6 dark:hidden">
            <img src="~/assets/icons/d-github.svg" alt="icon github" class="h-6 hidden dark:block">
          </span>
          <span v-for="techno in project.techno" :key="techno" class="py-1 px-4 bg-gray-800 text-white font-medium rounded-xl">{{techno}}</span>
        </div>
        <h3 class="mb-2 font-bold text-xl lg:text-2xl">{{project.title}}</h3>
        <p class="text-sm lg:text-lg">{{project.desc}}</p>
      </div>
    </nuxt-link>
  </li>
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

<style>
  /* delete the safelist.txt file when there is a JIT update  */
</style>