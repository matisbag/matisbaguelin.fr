<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :class="buttonStyles"
    :to
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components'
import { css } from 'styled-system/css'

defineProps<{
  to?: string
}>()

const buttonStyles = css({
  px: '5',
  py: '2.5',
  rounded: '4xl',
  fontWeight: 'medium',
  fontSize: 'sm',
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
})
</script>
