<template>
  <main class="flex-1 px-4 py-10">
    <ProjetsSection />
  </main>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    head() {
      return {
        title: 'Matis Baguelin - Projets',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Voici mes projets'
          }
        ]
      }
    }
  }
</script>
