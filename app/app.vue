<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { colorMode } = useColorMode()

useHead({
  htmlAttrs: {
    'data-color-mode': colorMode,
  },
})
</script>
