<script lang="ts" setup>
import { css } from '~~/styled-system/css'

defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    :class="css({ px: '3', py: '2', borderWidth: '1px', borderColor: 'border' })"
    target="_blank"
  >
    Open on GitHub
  </NuxtLink>
</template>
