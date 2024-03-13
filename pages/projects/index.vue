<template>
  <main>
    <ProjectCard
      v-for="(project, index) in projects"
      :item="project"
      class="py-6"
      :class="{ 'border-t-[1px] border-gray-200': index !== 0 }"
    />
  </main>
</template>

<script lang="ts" setup>
import ProjectCard from "~/components/ProjectCard.vue"

const { data: projects } = await useAsyncData("projects", () =>
  queryContent().find(),
)
</script>
