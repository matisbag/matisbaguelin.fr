<template>
  <li
    class="group sm:hover:scale-105 relative flex flex-col max-w-5xl rounded-lg transform duration-500"
  >
    <nuxt-link :to="'/projects/' + project.routeName">
      <img
        class="w-full rounded-lg"
        :src="require(`~/assets/${project.image}.png`)"
        :alt="'home page' + project.title"
      />
      <div>
        <div class="flex my-1 space-x-2">
          <span v-if="project.github" class="flex items-center px-1">
            <img src="~/assets/icons/github.svg" alt="icon github" class="dark:hidden h-6" />
            <img
              src="~/assets/icons/d-github.svg"
              alt="icon github"
              class="dark:block hidden h-6"
            />
          </span>
          <span
            v-for="techno in project.techno"
            :key="techno"
            class="px-4 py-1 text-white font-medium bg-gray-800 rounded-xl"
            v-html="techno"
          />
        </div>
        <h3 class="mb-2 text-xl font-bold lg:text-2xl">{{ project.title }}</h3>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
/* delete safelist.txt file when there is a JIT update */
img {
  max-width: 1000px;
}
</style>
