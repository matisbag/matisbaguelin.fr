<script setup>
import { container, prose } from 'styled-system/patterns'

const { data } = await useAsyncData('about', () => {
  return queryCollection('content').path(`/about`).first()
})
</script>

<template>
  <main :class="[container({ paddingTop: '80px' }), prose()]">
    <ContentRenderer :value="data" />
  </main>
</template>
