<template>
  <section class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div id="projects" class="lg:text-center">
      <h2 class="text-base text-green-500 font-semibold tracking-wide uppercase">Mes projets</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-gray-100 sm:text-4xl">
        Repository
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Projets développés durant mon temps libre
      </p>
    </div>

    <ul class="flex flex-col items-center space-y-16 mt-2">
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
  data() {
    return {
      projects: []
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.projects = this.$store.state.projects.projects
    }
  },
}
</script>