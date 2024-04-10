<template>
  <main class="flex flex-col justify-center">
    <div class="flex flex-col space-y-4">
      <div>
        <h1 class="text-3xl font-bold mb-2">Hello, je suis Matis Baguelin.</h1>
        <h2 class="text-lg text-slate-900 font-semibold uppercase">
          Développeur fullstack.
        </h2>
      </div>
      <p class="text-slate-500 md:max-w-[720px]">
        Je suis passionné par les nouvelles technologies, les bonnes pratiques,
        la rigueur et le développement continu de mes compétences.
      </p>
      <NuxtLink to="/projects" class="underline">Voir mes projets</NuxtLink>
      <div class="flex space-x-4">
        <NuxtLink
          v-for="socialLink in socialLinks"
          :to="socialLink.href"
          target="_blank"
        >
          <component
            :is="socialLink.icon"
            size="26px"
            class="fill-gray-600 transition-colors hover:fill-black"
          />
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { socialLinks } from "~/utils/links"
</script>
