<script lang="ts" setup>
import { container } from 'styled-system/patterns'

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects')
    .select('title', 'description', 'path', 'id')
    .all()
})
</script>

<template>
  <main :class="container({ paddingTop: '55px' })">
    <h1>Projects</h1>

    <p
      v-for="projet in projects"
      :key="projet.id"
    >
      >
      <nuxt-link :to="projet.path">
        <strong>{{ projet.title }}</strong>
      </nuxt-link>

      &nbsp;{{ projet.description }}
    </p>
  </main>
</template>
