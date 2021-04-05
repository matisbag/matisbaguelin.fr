<template>
  <main class="flex-1 px-4 py-10">
    <article class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-green-500 font-semibold tracking-wide uppercase">{{ project.title }}</h2>
        <p class="my-2 text-3xl leading-8 font-bold tracking-tight text-gray-100 sm:text-4xl">
          {{ project.desc }}
        </p>
      </div>
      <div class="w-full flex flex-col items-center">
        <img class="max-w-5xl w-full rounded-lg" :src="require(`~/assets/${project.image}`)">
      </div>
      <div class="py-6">
        <a :href="project.github">Github</a>
        <a :href="project.link">Voir le projet</a>
        <p class="text-white lg:text-lg font-medium text-justify" v-html="project.description"></p>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  computed: {
    project () {
      return this.$store.state.projects.projects.filter(project => project.routeName === this.$route.params.project)[0]
    }
  },
  head() {
    return {
      title: 'Matis Baguelin - ' + this.project.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description
        }
      ]
    }
  }
}
</script>