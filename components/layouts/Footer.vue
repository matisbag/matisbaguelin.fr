<template>
  <footer class="border-t-[1px] border-gray-200">
    <div
      class="max-w-container mx-auto padding-container flex flex-col md:flex-row-reverse md:justify-between md:items-center space-y-2 md:space-y-0"
    >
      <div class="flex space-x-4">
        <NuxtLink
          v-for="socialLink in socialLinks"
          :to="socialLink.href"
          target="_blank"
          :title="socialLink.title"
        >
          <component
            :is="socialLink.icon"
            size="28px"
            class-name="fill-gray-600 transition-colors hover:fill-black"
          />
        </NuxtLink>
      </div>
      <div class="flex space-x-4 text-gray-600">
        <span class="text-black">© 2024</span>
        <NuxtLink
          v-for="menuLink in menuLinks"
          :to="menuLink.path"
          class="transition-colors hover:text-black"
          active-class="text-black"
        >
          {{ menuLink.title }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { menuLinks, socialLinks } from "~/utils/links"
</script>
