<script lang="ts" setup>
const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects')
    .select('title', 'description', 'path', 'id')
    .all()
})
</script>

<template>
  <main>
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
