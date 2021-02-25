<template>
  <main>
    <About />

    <ProjetsSection />

    <SkillsSection />

    <ContactSection />
  </main>
    
</template>

<script>
  export default {};

</script>

<style lang="scss" scoped>
  /* Sample `apply` at-rules with Tailwind CSS */
  .card {
    @apply p-10 rounded-lg text-emerald-500 bg-emerald-100 shadow-lg;

    .title {
      @apply text-6xl font-bold;
    }
  }

</style>
