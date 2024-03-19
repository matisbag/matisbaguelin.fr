<template>
  <footer class="border-t-[1px] border-gray-200">
    <div
      class="max-w-container mx-auto padding-container flex flex-col md:flex-row-reverse md:justify-between md:items-center space-y-2 md:space-y-0"
    >
      <div class="flex space-x-4">
        <NuxtLink
          v-for="link in socialLinks"
          :to="link.href"
          target="_blank"
          :title="link.title"
        >
          <component
            :is="link.icon"
            size="28px"
            class-name="fill-gray-600 transition-colors hover:fill-black"
          />
        </NuxtLink>
      </div>
      <div class="flex space-x-4 text-gray-600">
        <span class="text-black">© 2024</span>
        <NuxtLink
          v-for="link in links"
          :to="link.href"
          class="transition-colors hover:text-black"
          active-class="text-black"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import links from "~/utils/links"
import { RiGithubFill, RiLinkedinFill } from "@remixicon/vue"

const socialLinks = [
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/matis-baguelin/",
    icon: RiLinkedinFill,
  },
  {
    title: "github",
    href: "https://github.com/matisbag",
    icon: RiGithubFill,
  },
]
</script>
