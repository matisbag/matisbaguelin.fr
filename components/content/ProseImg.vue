<template>
  <NuxtImg v-bind="$attrs" :src="refinedSrc" />
</template>

<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from "ufo"
import { useRuntimeConfig, computed } from "#imports"

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
    const _base = withLeadingSlash(
      withTrailingSlash(useRuntimeConfig().app.baseURL),
    )
    if (_base !== "/" && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})
</script>
