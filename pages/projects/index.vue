<template>
  <main>
    <h1 class="mb-4 text-4xl font-extrabold tracking-wide">Mes projets</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 md:gap-y-4">
      <ProjectsCard
        v-for="(project, index) in projects"
        :item="project"
        class="border-t-[1px] border-gray-200"
        :class="{ 'md:col-span-2': index === 0 }"
        :main="index === 0"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "Projets",
  meta: [
    {
      name: "description",
      content: "Découvrez mes projets de développement web.",
    },
  ],
})

const { data: projects } = await useAsyncData("projects", () =>
  queryContent("projects").find(),
)
</script>
