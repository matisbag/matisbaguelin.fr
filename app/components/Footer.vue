<template>
  <footer
    :class="css({
      padding: '8',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4',
      color: 'text.muted',
    })"
  >
    <div :class="css({ display: 'flex', gap: '6' })">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="link.name"
        :class="css({
          color: 'text.muted',
          transition: 'color 0.2s ease',
          _hover: { color: 'text' },
        })"
      >
        <Icon
          :name="link.icon"
          size="20"
        />
      </a>
    </div>
    <p :class="css({ fontSize: 'xs' })">
      {{ new Date().getFullYear() }} Matis Baguelin
    </p>
  </footer>
</template>

<script lang="ts" setup>
import { css } from 'styled-system/css'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/matisbag', icon: 'lucide:github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/matisbaguelin', icon: 'lucide:linkedin' },
  { name: 'Email', url: 'mailto:matisbaguelin@gmail.com', icon: 'lucide:mail' },
]
</script>
