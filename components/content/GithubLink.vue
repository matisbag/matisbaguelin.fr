<template>
  <UtilsExternalLink :to="to" class="prose-img:my-0">
    <template #image>
      <GitHubIcon size="18px" class="fill-black" />
    </template>
    Ouvrir sur Github
  </UtilsExternalLink>
</template>

<script lang="ts" setup>
import { GitHubIcon } from "vue3-simple-icons"

defineProps<{
  to: string
}>()
</script>
