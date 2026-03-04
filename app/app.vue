<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  htmlAttrs: {
    'lang': 'en',
    'data-color-mode': 'dark',
  },
  titleTemplate: '%s — Matis Baguelin',
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
  ],
})

useSeoMeta({
  ogSiteName: 'Matis Baguelin',
  ogType: 'website',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
})
</script>
