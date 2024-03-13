<template>
  <div v-bind="$attrs">
    <NuxtLink :href="`/projects${item._path}`">
      <img
        :src="item.image.src"
        :alt="item.image.alt"
        class="w-full rounded-lg"
      />
    </NuxtLink>
    <h2 class="pt-2 text-2xl font-bold">
      <a :href="`/projects${item._path}`" class="hover:underline">
        {{ item.title }}
      </a>
    </h2>
  </div>
</template>

<script lang="ts" setup>
interface Image {
  src: string
  alt: string
}

interface Item {
  _path: string
  title: string
  image: Image
}

defineProps<{
  item: Item
}>()
</script>
