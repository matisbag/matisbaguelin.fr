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
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Matis Baguelin` : "Matis Baguelin"
  },
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: darkMode.value ? "/favicon-dark.svg" : "/favicon.svg",
    },
  ],
})
</script>
