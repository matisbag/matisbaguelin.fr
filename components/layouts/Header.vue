<template>
  <header class="bg-white border-b-[1px] border-solid border-gray-200">
    <div
      class="max-w-container mx-auto flex justify-between items-center padding-container"
    >
      <div>
        <NuxtLink to="/">
          <NuxtImg
            src="/favicon.svg"
            alt="Home icon"
            class="dark:hidden w-11 h-auto"
          />
          <NuxtImg
            src="/favicon-dark.svg"
            alt="Home icon"
            class="dark:block hidden w-11 h-auto"
          />
        </NuxtLink>
      </div>

      <div class="flex items-center space-x-8">
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          type="button"
          class="sm:hidden flex items-center gap-x-1 font-medium"
        >
          Menu
          <ChevronDownIcon class="h-5 w-5 text-gray-500" />
        </button>
        <nav class="hidden sm:block">
          <ul class="flex space-x-4">
            <li v-for="menuLink in menuLinks">
              <NuxtLink :to="menuLink.path" class="hover:underline">
                {{ menuLink.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div>
          <NuxtLink to="https://github.com/matisbag" target="_blank">
            <GitHubIcon class="fill-black" size="32px" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="absolute mt-[1px] w-full sm:hidden">
      <ul class="p-6 bg-white shadow-md border-b border-gray-200 space-y-6">
        <li v-for="menuLink in menuLinks">
          <NuxtLink
            @click="mobileMenuOpen = false"
            :to="menuLink.path"
            class="hover:underline"
          >
            {{ menuLink.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ChevronDownIcon } from "@heroicons/vue/20/solid"
import { GitHubIcon } from "vue3-simple-icons"
import { menuLinks } from "~/utils/links"

const mobileMenuOpen = ref(false)
</script>
