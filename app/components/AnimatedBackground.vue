<template>
  <div
    class="animated-background"
    :class="backgroundStyle"
  >
    <div
      class="orb orb-1"
      :class="[orbBaseStyle, orb1Style]"
    />
    <div
      class="orb orb-2"
      :class="[orbBaseStyle, orb2Style]"
    />
    <div
      class="grid-overlay"
      :class="gridStyle"
    />
  </div>
</template>

<script lang="ts" setup>
import { css } from 'styled-system/css'

const { $gsap } = useNuxtApp()

const backgroundStyle = css({
  position: 'fixed',
  inset: '0',
  pointerEvents: 'none',
})

const orbBaseStyle = css({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(80px)',
  opacity: '0.6',
})

const orb1Style = css({
  width: '400px',
  height: '400px',
  bgGradient: 'to-r',
  gradientFrom: '{colors.primary/40}',
  gradientTo: 'transparent',
  top: '10%',
  left: '-300px',
})

const orb2Style = css({
  width: '300px',
  height: '300px',
  bgGradient: 'to-r',
  gradientFrom: '{colors.secondary/30}',
  gradientTo: 'transparent',
  top: '50%',
  right: '-200px',
})

const gridStyle = css({
  width: '100%',
  height: '100%',
  backgroundImage: 'linear-gradient({colors.bg.accented/30} 1px, transparent 1px), linear-gradient(90deg, {colors.bg.accented/30} 1px, transparent 1px)',
  backgroundSize: '80px 80px',
  backgroundPosition: '0 0',
  opacity: '0.3',
})

let orb1Animation: gsap.core.Tween
let orb2Animation: gsap.core.Tween
let gridAnimation: gsap.core.Tween

onMounted(() => {
  // Orbes flottantes
  orb1Animation = $gsap.to('.orb-1', {
    x: '110vw',
    y: '50vh',
    duration: 25,
    ease: 'none',
    repeat: -1,
    keyframes: {
      '0%': { opacity: 0 },
      '10%': { opacity: 0.6 },
      '90%': { opacity: 0.6 },
      '100%': { opacity: 0 },
    },
  })

  orb2Animation = $gsap.to('.orb-2', {
    x: '-60vw',
    y: '-30vh',
    duration: 20,
    ease: 'none',
    repeat: -1,
    keyframes: {
      '0%': { opacity: 0 },
      '10%': { opacity: 0.6 },
      '90%': { opacity: 0.6 },
      '100%': { opacity: 0 },
    },
  })

  // Grille (pulse)
  gridAnimation = $gsap.to('.grid-overlay', {
    opacity: 0.12,
    duration: 4,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true,
  })
})

onUnmounted(() => {
  orb1Animation?.kill()
  orb2Animation?.kill()
  gridAnimation?.kill()
})
</script>
