<template>
  <UtilsExternalLink :to="to" class="prose-img:my-0">
    <template #image>
      <img
        src="~/assets/images/github.svg"
        alt="github icon"
        class="h-4 w-auto"
      />
    </template>
    Ouvrir sur Github
  </UtilsExternalLink>
</template>

<script lang="ts" setup>
defineProps<{
  to: string
}>()
</script>
