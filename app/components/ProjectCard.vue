<script setup lang="ts">
import { css } from 'styled-system/css'

interface Props {
  project: {
    id: string
    title: string
    description: string
    path: string
  }
  index: number
}

const { project, index } = defineProps<Props>()
</script>

<template>
  <article
    :class="css({
      display: 'grid',
      gridTemplateColumns: { base: '1fr', lg: '1fr 1fr' },
      gap: '8',
      alignItems: 'center',
      bg: 'bg/60',
      border: '1px solid {colors.border/50}',
      borderRadius: '2xl',
      p: '8',
      boxShadow: '0 0 8px {colors.bg.inverted/08} inset',
      transition: 'all 0.3s ease',
      _hover: {
        bg: 'bg/80',
        boxShadow: '0 0 12px {colors.bg.inverted/15} inset',
      },
    })"
  >
    <div
      :class="css({
        order: { base: '1', lg: index % 2 === 0 ? '1' : '2' },
        borderRadius: 'xl',
        aspectRatio: '4/3',
        overflow: 'hidden',
      })"
    >
      <NuxtImg
        :src="`/img/${project.path.split('/').pop()}.png`"
        :alt="project.title"
        width="600"
        height="450"
        :class="css({
          w: 'full',
          h: 'full',
          objectFit: 'cover',
        })"
      />
    </div>

    <div :class="css({ order: { base: '2', lg: index % 2 === 0 ? '2' : '1' } })">
      <span :class="css({ fontSize: 'sm', color: 'text.muted', fontWeight: '500' })">
        {{ String(index + 1).padStart(2, '0') }}
      </span>

      <h2 :class="css({ fontSize: '3xl', fontWeight: 'bold', my: '4' })">
        {{ project.title }}
      </h2>

      <p :class="css({ color: 'text.muted', mb: '6', lineHeight: '1.6' })">
        {{ project.description }}
      </p>

      <Button
        :to="project.path"
        size="lg"
      >
        Voir le projet
      </Button>
    </div>
  </article>
</template>
