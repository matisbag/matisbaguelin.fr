<template>
  <li class="relative group flex flex-col rounded-lg border-8 shadow-lg max-w-5xl my-10 lg:mb-16 transform hover:scale-105 duration-500">
    <img src="https://res.cloudinary.com/maizzle/image/upload/v1612438412/templates/ce-teams-email-templates.png" class="rounded-lg">
    <nuxt-link :to="'/projects/' + project.routeName" class="absolute flex flex-col items-center justify-center w-full h-full rounded-lg p-8 bg-gradient-to-tr from-blue-500 to-green-400 opacity-0 group-hover:opacity-90 transition-opacity duration-150">
      <h3 class="text-3xl leading-9 font-bold text-white">{{project.title}}</h3>
      <span class="block text-sm italic font-thin text-white">{{project.description}}</span>
    </nuxt-link>
  </li>
  <!-- <div class="flex">
    <div v-if="project.github" class="text-sm font-bold flex-initial text-white mr-2">
      <img src="../assets/github.svg" alt="icon github" class="w-7 h-7 mx-auto">
    </div>
    <div v-for="used in project.used" :key="used" class="content-center inline-block text-sm font-bold flex-initial bg-white text-black px-2 py-1 mr-2 rounded-3xl">{{used}}</div>
  </div> -->
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
