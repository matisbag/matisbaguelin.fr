<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article
        class="prose prose-img:rounded-lg prose-img:drop-shadow-sm prose-quoteless max-w-none"
      >
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>
