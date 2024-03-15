<template>
  <NuxtLink v-bind="$attrs" :to="to" target="_blank">
    <span
      class="inline-flex items-center space-x-2 border-b-[1px] border-black"
    >
      <slot name="image" />
      <span> <slot /> </span>
      <ArrowTopRightOnSquareIcon class="h-4 w-4" />
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid"

defineProps<{
  to: string
}>()
</script>
