<template>
  <main class="flex-1 px-4 py-10">
    <About />

    <ProjetsSection :projects="data.projects" />

    <SkillsSection />

    <!-- <ContactSection /> -->
  </main>
    
</template>

<script>
const getData = () => import('~/data/data.json').then(m => m.default || m)

export default {
  async asyncData () {
    const data = await getData()
    return { data }
  }
}
</script>
