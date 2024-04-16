<template>
  <main class="flex flex-col justify-center">
    <div class="flex flex-col">
      <div>
        <h1 class="text-4xl font-extrabold mb-2">
          Hello, je suis Matis Baguelin.
        </h1>
        <h2 class="text-lg text-gray-900 font-semibold uppercase">
          Développeur fullstack.
        </h2>
      </div>
      <p class="text-lg text-gray-600 my-9 md:max-w-[720px]">
        Je suis passionné par les nouvelles technologies, les bonnes pratiques,
        la rigueur et le développement continu de mes compétences.
      </p>
      <NuxtLink to="/projects" class="underline mb-4">
        Voir mes projets
      </NuxtLink>
      <div class="flex space-x-4">
        <NuxtLink
          v-for="socialLink in socialLinks"
          :to="socialLink.href"
          :title="socialLink.title"
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
const config = useRuntimeConfig()
import { socialLinks } from "~/utils/links"

const title = ref("Portfolio")
const description = ref(
  "Développeur passionné par les nouvelles technologies et la recherche constante de perfectionnement. Découvrez mes réalisations et compétences en développement web.",
)

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description.value,
    },
  ],
})

useSeoMeta({
  ogTitle: "Portfolio - Matis Baguelin",
  ogDescription: description.value,
  ogImage: config.public.siteUrl + "/img/preview.jpg",
  ogUrl: config.public.siteUrl,
  twitterTitle: "Portfolio - Matis Baguelin",
  twitterDescription: description.value,
  twitterImage: config.public.siteUrl + "/img/preview.jpg",
  twitterCard: "summary",
})
</script>
