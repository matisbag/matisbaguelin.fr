<template>
  <section class="mx-auto py-12 max-w-7xl sm:px-4 lg:px-6">
    <div id="projects" class="lg:text-center">
      <h1 v-if="h1" class="text-green-500 text-base font-semibold tracking-wide uppercase">
        {{ h1 }}
      </h1>
      <h2 v-else class="text-green-500 text-base font-semibold tracking-wide uppercase">
        Mes projets
      </h2>
      <p
        class="mt-2 dark:text-gray-100 text-3xl font-extrabold tracking-tight leading-8 sm:text-4xl"
      >
        Repositories
      </p>
      <p class="mt-4 max-w-2xl text-gray-500 text-xl lg:mx-auto">
        Projets développés durant mon temps libre
      </p>
    </div>

    <ul class="flex flex-col items-center mt-2 space-y-16">
      <project v-for="project in projects" :key="project.routeName" :project="project" />
    </ul>
  </section>
</template>

<script>
import Project from './Project.vue'
export default {
  components: {
    Project
  },
  props: {
    projects: {
      type: Array,
      default: () => []
    },
    h1: {
      type: String,
      default: ''
    }
  }
}
</script>
