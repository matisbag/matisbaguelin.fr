<script setup>
const slug = useRoute().params.slug
const { data: project } = await useAsyncData(`project-${slug}`, () => {
  return queryCollection('projects').path(`/projects/${slug}`).first()
})
</script>

<template>
  <ContentRenderer :value="project" />
</template>
