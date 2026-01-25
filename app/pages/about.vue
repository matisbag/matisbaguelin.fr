<script setup>
import { container, prose } from 'styled-system/patterns'
import { css } from 'styled-system/css'
import { SplitText } from 'gsap/SplitText'

useSeoMeta({
  title: 'About',
  description: 'Learn more about Matis Baguelin, a front-end developer passionate about TypeScript, Vue.js and building great user experiences.',
})

const { $gsap } = useNuxtApp()

const { data } = await useAsyncData('about', () => {
  return queryCollection('content').path(`/about`).first()
})

onMounted(() => {
  $gsap.set('.about-title', { opacity: 1 })

  const titleSplit = new SplitText('.about-title', { type: 'chars' })

  $gsap.fromTo(titleSplit.chars,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'back.out(1.7)',
      stagger: 0.05,
    },
  )

  $gsap.fromTo('.about-content',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' },
  )
})
</script>

<template>
  <main :class="[container({ paddingTop: '80px' }), prose()]">
    <h1
      class="about-title"
      :class="css({ opacity: '0' })"
    >
      About
    </h1>
    <div
      class="about-content"
      :class="css({ opacity: '0' })"
    >
      <ContentRenderer
        :value="data"
      />
    </div>
  </main>
</template>
