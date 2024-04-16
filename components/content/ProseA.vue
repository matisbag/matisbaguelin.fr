<template>
  <NuxtLink :href="href" :target="finalTarget">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from "vue"

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String as PropType<
      "_blank" | "_parent" | "_self" | "_top" | (string & {}) | null | undefined
    >,
    default: undefined,
    required: false,
  },
})

const isExternal = computed(() => props.href.startsWith("http"))
const finalTarget = computed(
  () => props.target ?? (isExternal.value ? "_blank" : undefined),
)
</script>
