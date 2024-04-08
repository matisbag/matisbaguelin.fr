<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
let darkMode = ref(false)

onMounted(() =>
  nextTick(() => {
    darkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches
  }),
)

useHead({
  title: "Matis Baguelin - Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Développeur passionné par les nouvelles technologies et la recherche constante de perfectionnement. Découvrez mes réalisations et compétences en développement web.",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: darkMode.value ? "/favicon-dark.svg" : "/favicon.svg",
    },
  ],
})
</script>
