<template>
  <main class="flex-1 px-4 py-10">
    <ProjetsSection :projects="data.projects" />
  </main>
</template>


<script>
const getData = () => import('~/data/data.json').then(m => m.default || m)

export default {
  async asyncData () {
    const data = await getData()
    return { data }
  },
  head() {
    return {
      title: 'Matis Baguelin - Projets',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Projets développés durant mon temps libre'
        }
      ]
    }
  }
}
</script>
