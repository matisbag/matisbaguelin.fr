<script lang="ts" setup>
import { css, cva } from 'styled-system/css'

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
]

const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 30
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const linkClass = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'text.toned',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  _hover: { color: 'text' },
})

const activeLinkClass = css({
  color: 'text',
  fontWeight: 'semibold',
})

const navVariants = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '8',
    py: '1',
    px: '2',
    borderRadius: 'full',
    pointerEvents: 'auto',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    transition: 'all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  variants: {
    scrolled: {
      true: {
        backdropFilter: 'blur(24px) saturate(180%)',
        background: 'rgba(20, 20, 20, 0.45)',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        boxShadow: '[0 4px 24px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.07)]',
        py: '2.5',
        px: '7',
      },
      false: {},
    },
  },
})
</script>

<template>
  <header
    :class="css({
      display: 'flex',
      justifyContent: 'center',
      padding: '5',
      position: 'fixed',
      width: '100%',
      zIndex: '10',
      top: '0',
      left: '0',
      pointerEvents: 'none',
    })"
  >
    <nav :class="navVariants({ scrolled })">
      <NuxtLink
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        :class="linkClass"
        :active-class="activeLinkClass"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>
  </header>
</template>
