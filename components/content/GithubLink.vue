<template>
  <UtilsExternalLink :to="to" class="prose-img:my-0">
    <template #image>
      <RiGithubFill size="20px" />
    </template>
    Ouvrir sur Github
  </UtilsExternalLink>
</template>

<script lang="ts" setup>
import { RiGithubFill } from "@remixicon/vue"

defineProps<{
  to: string
}>()
</script>
