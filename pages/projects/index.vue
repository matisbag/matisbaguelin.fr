<template>
  <main class="flex-1 px-4 py-10">
    <ProjetsSection :projects="data.projects" h1="Mes projets" />
  </main>
</template>

<script>
const getData = () => import('~/data/data.json').then((m) => m.default || m)

export default {
  async asyncData() {
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
          content:
            "Matis Baguelin portfolio : durant mes années d\études j'ai pu développer des projets Front et Back."
        }
      ]
    }
  }
}
</script>
