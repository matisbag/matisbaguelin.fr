<script lang="ts" setup>
import { flex } from 'styled-system/patterns'
import { css } from 'styled-system/css'

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
]
</script>

<template>
  <header :class="flex({ justify: 'center', padding: '6', position: 'fixed', width: '100%', zIndex: '10' })">
    <nav :class="flex({ gap: { base: '8', md: '12' }, align: 'center' })">
      <NuxtLink
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        :class="css({
          fontSize: 'sm',
          fontWeight: 'medium',
          color: 'text.muted',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          _hover: {
            color: 'text',
          },
        })"
        :active-class="css({
          color: 'text',
          fontWeight: 'semibold',
        })"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>
  </header>
</template>
