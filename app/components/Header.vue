<script lang="ts" setup>
import { css } from 'styled-system/css'
import { ref, onMounted, onUnmounted } from 'vue'

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
    <nav :class="['liquid-header-nav', { 'liquid-header-nav--scrolled': scrolled }]">
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

<style>
.liquid-header-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 4px 8px;
  border-radius: 9999px;
  pointer-events: auto;
  border: 1px solid transparent;
  transition: all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.liquid-header-nav--scrolled {
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  background: rgba(20, 20, 20, 0.45);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.4),
    0 1px 3px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.07);
  padding: 10px 28px;
}
</style>
