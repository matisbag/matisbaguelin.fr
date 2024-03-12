<template>
  <main>
    <ContentList path="/" v-slot="{ list }">
      <ProjectCard
        v-for="project in list"
        :item="project"
        class="py-6"
        :class="{ 'border-t-[1px] border-gray-200': project !== list[0] }"
      />
    </ContentList>
  </main>
</template>

<script lang="ts" setup>
import ProjectCard from "~/components/ProjectCard.vue"
</script>
