<template>
  <StarBackground :show-planet-horizon="isHome" />
  <Header />
  <slot />
  <Footer />
</template>

<script lang="ts" setup>
const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>
