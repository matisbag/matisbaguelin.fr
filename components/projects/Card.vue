<template>
  <section
    v-bind="$attrs"
    class="flex flex-col md:flex-row space-y-2 md:space-y-0 py-6"
    :class="
      main
        ? 'md:space-x-12'
        : 'md:flex-row-reverse md:space-x-6 md:space-x-reverse'
    "
  >
    <NuxtLink
      :to="item._path"
      class="block"
      :class="main ? 'basis-1/2' : 'basis-2/5'"
    >
      <NuxtImg
        :src="item.image.src"
        :alt="item.image.alt"
        format="webp"
        sizes="100vw md:720px"
        class="w-full h-full object-cover rounded-lg shadow-sm hover:shadow transition-shadow"
      />
    </NuxtLink>
    <div
      class="space-y-2 md:space-y-4"
      :class="main ? 'basis-1/2 md:min-h-[300px]' : 'basis-3/5'"
    >
      <h2 class="text-2xl font-bold" :class="{ 'md:text-4xl': main }">
        <NuxtLink :to="item._path" class="hover:underline">
          {{ item.title }}
        </NuxtLink>
      </h2>
      <p class="text-gray-500 tracking-wide">
        {{ item.description }}
      </p>
      <UtilsExternalLink :to="item.repository" class="hidden md:block">
        <template #image>
          <GitHubIcon size="18px" class="fill-black" />
        </template>
        Github
      </UtilsExternalLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content"
import { GitHubIcon } from "vue3-simple-icons"

defineProps<{
  item: ParsedContent
  main?: boolean
}>()
</script>
