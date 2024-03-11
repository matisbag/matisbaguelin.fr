<template>
  <div v-bind="$attrs">
    <a :href="`/projects${item._path}`">
      <img
        :src="item.image.src"
        :alt="item.image.alt"
        class="w-full rounded-lg"
      />
      <h2 class="pt-2 text-2xl font-bold">{{ item.title }}</h2>
    </a>
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
