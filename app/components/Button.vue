<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :class="button({ size })"
    :active-class="to ? button({ active: true }) : undefined"
    :to
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components'
import { cva } from 'styled-system/css'

interface Props {
  to?: string
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  size: 'md',
})

const button = cva({
  base: {
    display: 'inline-block',
    fontSize: 'sm',
    rounded: '4xl',
    fontWeight: 'medium',
    bgGradient: 'to-b',
    gradientFrom: '{colors.bg.muted/60}',
    gradientTo: '{colors.bg/60}',
    boxShadow: '0 0 8px {colors.bg.inverted/08} inset',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: '1px solid {colors.border.inverted/10}',
    _hover: {
      boxShadow: '0 0 12px {colors.bg.inverted/15} inset',
    },
  },
  variants: {
    size: {
      sm: { px: '3.5', py: '2' },
      md: { px: '5', py: '2.5' },
      lg: { px: '6', py: '3' },
    },
    active: {
      true: {
        boxShadow: '0 0 12px {colors.bg.inverted/15} inset',
      },
    },
  },
})
</script>
