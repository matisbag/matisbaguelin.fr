<template>
  <main>
    <Project v-if="project[0]" :project="project[0]"/>
    <div v-else>
      <p>bonjour a tous</p>
    </div>
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
    this.project = this.$store.state.projects.projects.filter (project => project.routeName === this.$route.params.project)
  },
  head() {
    return {
      title: 'Matis Baguelin - ' + this.project[0].title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project[0].description
        }
      ]
    }
  }
}
</script>