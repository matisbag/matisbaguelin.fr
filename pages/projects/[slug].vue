<template>
  <main>
    <ContentDoc :path="slug" v-slot="{ doc }">
      <article class="prose prose-img:rounded-lg prose-quoteless max-w-none">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>

<script lang="ts" setup>
const route = useRoute()
const { slug } = route.params
</script>
