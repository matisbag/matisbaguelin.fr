<script setup>
import { container, prose } from 'styled-system/patterns'
import { css } from 'styled-system/css'

const slug = useRoute().params.slug
const { data: project } = await useAsyncData(`project-${slug}`, () => {
  return queryCollection('projects').path(`/projects/${slug}`).first()
})
</script>

<template>
  <main :class="container({ paddingTop: '55px' })">
    <article :class="[prose(), css({ paddingTop: '4' })]">
      <ContentRenderer :value="project" />
    </article>
  </main>
</template>
