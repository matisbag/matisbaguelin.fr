<script lang="ts" setup>
import { css } from 'styled-system/css'
import { container, stack } from 'styled-system/patterns'

import { SplitText } from 'gsap/SplitText'

const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.set('.title', { opacity: 1 })

  const titleSplit = new SplitText('.title', { type: 'chars' })

  $gsap.fromTo(titleSplit.chars,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.03, // Delay between each character
    },
  )

  $gsap.fromTo('.subtitle',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.7, delay: 0.5, ease: 'power2.out' },
  )

  $gsap.fromTo('.link',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: 0.8, ease: 'power2.out' },
  )
})
</script>

<template>
  <main :class="[container(), stack({ justify: 'center', align: 'center', gap: '2.5', textAlign: 'center' })]">
    <h1
      class="title"
      :class="css({ fontSize: { base: '4xl', sm: '6xl', md: '8xl' }, fontWeight: 'bold', fontFamily: 'heading', lineHeight: 'initial', opacity: 0 })"
    >
      Matis Baguelin
    </h1>
    <h2
      class="subtitle"
      :class="css({ color: 'text.toned', fontSize: 'lg', fontWeight: 'medium', opacity: '0' })"
    >
      <span :class="css({ color: 'primary' })">Front-end</span> Developer — Building with TypeScript & Vue ✨
    </h2>
    <Button
      to="/projects"
      class="link"
      :class="css({ opacity: '0' })"
    >
      View my projects
    </Button>
  </main>
</template>
