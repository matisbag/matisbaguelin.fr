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
      :href="`/projects${item._path}`"
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
        <a :href="`/projects${item._path}`" class="hover:underline">
          {{ item.title }}
        </a>
      </h2>
      <p class="text-gray-500 tracking-wide">{{ item.description }}</p>
      <a :href="item.repository" target="_blank" class="hidden md:block">
        <span
          class="inline-flex items-center space-x-2 border-b-[1px] border-black"
        >
          <img
            src="~/assets/images/github.svg"
            alt="github icon"
            class="h-4 w-auto"
          />
          <span> Github </span>
          <ArrowTopRightOnSquareIcon class="h-4 w-4" />
        </span>
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/dist/runtime/types"
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid"

defineProps<{
  item: ParsedContent
  main?: boolean
}>()
</script>
