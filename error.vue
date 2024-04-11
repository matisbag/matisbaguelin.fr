<template>
  <NuxtLayout name="default">
    <main class="prose max-w-none flex flex-col">
      <section
        class="grow flex flex-col md:flex-row-reverse justify-center md:justify-evenly items-center"
      >
        <div>
          <img
            src="~/assets/img/monamoji-mindblown.png"
            alt="icon mindblown"
            class="w-80 max-w-full h-auto"
          />
        </div>
        <div>
          <h1 class="mb-1">Oops, une erreur est survenue !</h1>
          <h2 class="mt-0">{{ error.message }}</h2>
          <NuxtLink to="/projects"> Voir mes projets </NuxtLink>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>

<!-- Ajouter le lien previous link ? -->
<!-- Ajouter un title ? -->
<!-- get le code d'erreur -->
<script setup lang="ts">
import type { NuxtError } from "#app"
let darkMode = ref(false)

const props = defineProps({
  error: Object as () => NuxtError,
})

onMounted(() =>
  nextTick(() => {
    darkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches
  }),
)

useHead({
  title: props.error.statusCode + " - Matis Baguelin",
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: darkMode.value ? "/favicon-dark.svg" : "/favicon.svg",
    },
  ],
  htmlAttrs: {
    lang: "fr",
  },
})
</script>
