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
      :to="`/projects${item._path}`"
      class="block"
      :class="main ? 'basis-1/2' : 'basis-2/5'"
    >
      <NuxtImg
        :src="item.image.src"
        :alt="item.image.alt"
        class="w-full h-full object-cover rounded-lg"
      />
    </NuxtLink>
    <div
      class="space-y-2 md:space-y-4"
      :class="main ? 'basis-1/2 md:min-h-[300px]' : 'basis-3/5'"
    >
      <h2 class="text-2xl font-bold" :class="{ 'md:text-4xl': main }">
        <NuxtLink :to="`/projects${item._path}`" class="hover:underline">
          {{ item.title }}
        </NuxtLink>
      </h2>
      <p class="text-gray-500 tracking-wide">{{ item.description }}</p>
      <UtilsExternalLink :to="item.repository" class="hidden md:block">
        <template #image>
          <RiGithubFill size="20px" />
        </template>
        Github
      </UtilsExternalLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/dist/runtime/types"
import { RiGithubFill } from "@remixicon/vue"

defineProps<{
  item: ParsedContent
  main?: boolean
}>()
</script>
