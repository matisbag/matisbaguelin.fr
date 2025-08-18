<script lang="ts" setup>
import { flex } from 'styled-system/patterns'

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
]
</script>

<template>
  <header :class="flex({ justify: 'center', padding: '2', position: 'fixed', width: '100%', zIndex: '10' })">
    <nav :class="flex({ gap: '2', align: 'center' })">
      <Button
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        size="sm"
      >
        {{ link.name }}
      </Button>
    </nav>
  </header>
</template>
