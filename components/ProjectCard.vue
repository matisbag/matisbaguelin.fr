<template>
  <section v-bind="$attrs">
    <NuxtLink :href="`/projects${item._path}`">
      <img
        :src="item.image.src"
        :alt="item.image.alt"
        class="w-full mb-2 rounded-lg"
      />
    </NuxtLink>
    <h2 class="mb-2 text-2xl font-bold">
      <a :href="`/projects${item._path}`" class="hover:underline">
        {{ item.title }}
      </a>
    </h2>
    <p class="text-gray-500 tracking-wide">{{ item.description }}</p>
  </section>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/dist/runtime/types"

defineProps<{
  item: ParsedContent
}>()
</script>
