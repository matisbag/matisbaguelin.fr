<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()

useHead({
  title: "Matis Baguelin - Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Développeur passionné par les nouvelles technologies et la recherche constante de perfectionnement. Découvrez mes réalisations et compétences en développement web.",
    },
  ],
})
</script>
