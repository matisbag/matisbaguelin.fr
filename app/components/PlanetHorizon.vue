<template>
  <div :class="maskWrapperStyle">
    <div
      ref="glowElement"
      :class="glowStyle"
    />

    <div :class="planetSurfaceStyle" />

    <div
      ref="mainSurface"
      :class="mainSurfaceStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { css } from 'styled-system/css'

const { $gsap } = useNuxtApp()

const glowElement = useTemplateRef<HTMLElement>('glowElement')
const mainSurface = useTemplateRef<HTMLElement>('mainSurface')

const maskWrapperStyle = css({
  position: 'absolute',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  height: '400px',
  width: '1200px',
  overflow: 'hidden',
  maskImage: 'linear-gradient(to right, transparent, {colors.bg} 30%, {colors.bg} 70%, transparent)',
  WebkitMaskImage: 'linear-gradient(to right, transparent, {colors.bg} 30%, {colors.bg} 70%, transparent)',
})

const glowStyle = css({
  position: 'absolute',
  bottom: '190px',
  left: '40%',
  transform: 'translateX(-50%)',
  height: '111px',
  width: '787px',
  overflow: 'hidden',
  background: 'radial-gradient(50% 50% at 50% 50%, {colors.secondary} 0%, {colors.secondary/15} 100%)',
  filter: 'blur(57px)',
})

const planetSurfaceStyle = css({
  position: 'absolute',
  right: '-432px',
  bottom: '-673px',
  left: '-454px',
  height: '955px',
  borderRadius: '100%',
  background: 'linear-gradient(to bottom, {colors.bg.inverted}, transparent)',
})

const mainSurfaceStyle = css({
  position: 'absolute',
  right: '-510px',
  bottom: '-679px',
  left: '-532px',
  height: '956px',
  aspectRatio: '2.346820809248555/1',
  borderRadius: '100%',
  background: '{colors.bg}',
  boxShadow: 'inset 0 2px 15px {colors.bg.inverted/80}, 0 -10px 50px 1px {colors.bg.inverted/30}',
})

const animations: gsap.core.Tween[] = []

onMounted(() => {
  animations.push(
    $gsap.to(glowElement.value, {
      x: '20vw',
      duration: 6,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    }),
    $gsap.fromTo(mainSurface.value, {
      boxShadow: 'inset 0 2px 15px color-mix(in srgb, var(--colors-bg-inverted) 80%, transparent), 0 -10px 50px 1px color-mix(in srgb, var(--colors-bg-inverted) 30%, transparent)',
    }, {
      boxShadow: 'inset 0 2px 15px color-mix(in srgb, var(--colors-bg-inverted) 100%, transparent), 0 -10px 50px 1px color-mix(in srgb, var(--colors-bg-inverted) 70%, transparent)',
      duration: 4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    }),
  )
})

onUnmounted(() => {
  animations.forEach(animation => animation.kill())
})
</script>
