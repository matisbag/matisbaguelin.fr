<template>
  <main>
    <!-- <Project v-if="project" :project="project"/>
    <div v-else>
      <p>bonjour a tous</p>
    </div> -->
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