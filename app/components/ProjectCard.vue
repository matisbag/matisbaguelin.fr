<script setup lang="ts">
import { css } from 'styled-system/css'

interface Props {
  project: {
    id: string
    title: string
    description: string
    path: string
    date?: string
  }
}

const { project } = defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="project.path"
    :class="css({
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '2xl',
      overflow: 'hidden',
      border: '1px solid',
      borderColor: 'rgba(255,255,255,0.07)',
      bg: 'rgba(20,20,20,0.35)',
      backdropFilter: 'blur(12px) saturate(140%)',
      boxShadow: '0 2px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
      textDecoration: 'none',
      transition: 'all 0.3s cubic-bezier(0.34, 1.2, 0.64, 1)',
      _hover: {
        transform: 'translateY(-4px)',
        borderColor: 'rgba(255,255,255,0.13)',
        bg: 'rgba(28,28,28,0.55)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.09)',
      },
    })"
  >
    <div
      :class="css({
        aspectRatio: '16/9',
        overflow: 'hidden',
        flexShrink: '0',
      })"
    >
      <NuxtImg
        :src="`/img/${project.path.split('/').pop()}.png`"
        :alt="project.title"
        width="600"
        height="338"
        :class="css({
          w: 'full',
          h: 'full',
          objectFit: 'cover',
          transition: 'transform 0.4s ease',
        })"
      />
    </div>

    <div
      :class="css({
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        p: '6',
        gap: '3',
      })"
    >
      <div
        :class="css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        })"
      >
        <span
          v-if="project.date"
          :class="css({
            fontSize: 'xs',
            fontWeight: 'medium',
            color: 'text.muted',
            letterSpacing: 'wide',
            bg: 'rgba(255,255,255,0.06)',
            border: '1px solid',
            borderColor: 'rgba(255,255,255,0.09)',
            borderRadius: 'full',
            px: '2.5',
            py: '0.5',
          })"
        >
          {{ project.date }}
        </span>
      </div>

      <h2
        :class="css({
          fontSize: 'xl',
          fontWeight: 'semibold',
          color: 'text',
          lineHeight: '1.3',
        })"
      >
        {{ project.title }}
      </h2>

      <p
        :class="css({
          fontSize: 'sm',
          color: 'text.muted',
          lineHeight: '1.6',
          flex: '1',
        })"
      >
        {{ project.description }}
      </p>

      <span
        :class="css({
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1.5',
          fontSize: 'sm',
          fontWeight: 'medium',
          color: 'text.toned',
          mt: '2',
          transition: 'color 0.2s ease',
        })"
      >
        Voir le projet
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
  </NuxtLink>
</template>
