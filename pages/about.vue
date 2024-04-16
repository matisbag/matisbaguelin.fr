<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <section class="prose prose-zinc max-w-none">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </section>
    </ContentDoc>
  </main>
</template>
