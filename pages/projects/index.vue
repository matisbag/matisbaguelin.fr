<template>
  <main>
    <ContentList path="/" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <a :href="`/projects${article._path}`">
          <h2>{{ article.title }}</h2>
        </a>
      </div>
    </ContentList>
  </main>
</template>

<script lang="ts" setup></script>
