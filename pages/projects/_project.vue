<template>
  <main class="flex-1 px-4 py-10">
    <article class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full flex flex-col items-center">
        <h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">{{ project.title }}</h1>
        <img class="max-w-5xl w-full rounded-lg" :src="require(`~/assets/${project.image}`)">
      </div>
      <div class="py-6">
        <p class="text-gray-200 text-sm lg:text-lg">{{project.description}}</p>
      </div>
    </article>
    
  </main>
</template>

<script>
export default {
  data() {
    return {
      project: []
    }
  },
  created() {
    this.project = this.$store.state.projects.projects.filter(project => project.routeName === this.$route.params.project)[0]
    console.log(this.project);
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