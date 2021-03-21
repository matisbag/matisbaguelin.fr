<template>
  <li class="relative group flex flex-col rounded-lg max-w-5xl my-10 lg:mb-16 transform hover:scale-105 duration-500">
    <nuxt-link :to="'/projects/' + project.routeName">
      <img class="rounded-lg" src="~/assets/conference.png">
      <div >
        <h3 class="my-2 font-bold text-xl lg:text-2xl">{{project.title}}</h3>
        <p class="text-gray-200 text-sm lg:text-lg">{{project.description}}</p>
      </div>
    </nuxt-link>
    <!-- <nuxt-link :to="'/projects/' + project.routeName" class="absolute flex flex-col items-center justify-center w-full h-full p-8 bg-gradient-to-tr from-blue-500 to-green-400 opacity-0 group-hover:opacity-90 transition-opacity duration-150">
      <h3 class="text-3xl leading-9 font-bold text-white">{{project.title}}</h3>
      <span class="block text-sm italic font-thin text-white">{{project.description}}</span>
    </nuxt-link> -->
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
