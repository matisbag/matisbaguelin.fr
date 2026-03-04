<template>
  <div :class="css({ display: 'flex', flexDirection: 'column', gap: '6' })">
    <div
      :class="css({
        'display': 'grid',
        'gridTemplateColumns': 'repeat(3, 1fr)',
        'gap': '2',
        'sm': { gridTemplateColumns: 'repeat(5, 1fr)' },
        'md': { gridTemplateColumns: 'repeat(6, 1fr)' },
        'xl': { gridTemplateColumns: 'repeat(8, 1fr)' },
        '2xl': { gridTemplateColumns: 'repeat(10, 1fr)' },
      })"
    >
      <div
        v-for="skill in activeSkills"
        :key="skill.name"
        :class="css({
          bg: 'bg.muted/60',
          p: '3',
          borderRadius: 'lg',
          display: 'flex',
          flexDirection: 'column',
          gap: '2',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 0 8px rgb(0 0 0 / 0.05) inset',
          transition: 'all 0.3s ease',
          _hover: {
            bg: 'transparent',
            boxShadow: '0 0 12px rgb(0 0 0 / 0.1) inset',
            transform: 'translateY(-2px)',
          },
        })"
        class="group"
      >
        <Icon
          :name="skill.icon"
          size="28px"
          :class="css({
            filter: 'drop-shadow(0 2px 4px rgb(0 0 0 / 0.1))',
            transition: 'all 0.3s ease',
            _groupHover: {
              scale: '1.1',
            },
          })"
        />
        <span
          :class="css({
            fontSize: 'sm',
            fontWeight: 'medium',
          })"
        >
          {{ skill.name }}
        </span>
      </div>
    </div>

    <div :class="css({ display: 'flex', alignItems: 'center', gap: '3' })">
      <div :class="css({ flex: '1', height: '1px', bg: 'bg.muted' })" />
      <span
        :class="css({
          fontSize: 'xs',
          color: 'text.muted',
          fontWeight: 'medium',
          textTransform: 'uppercase',
          letterSpacing: 'wider',
          whiteSpace: 'nowrap',
        })"
      >
        Past experience
      </span>
      <div :class="css({ flex: '1', height: '1px', bg: 'bg.muted' })" />
    </div>

    <div
      :class="css({
        'display': 'grid',
        'gridTemplateColumns': 'repeat(3, 1fr)',
        'gap': '2',
        'sm': { gridTemplateColumns: 'repeat(5, 1fr)' },
        'md': { gridTemplateColumns: 'repeat(6, 1fr)' },
        'xl': { gridTemplateColumns: 'repeat(8, 1fr)' },
        '2xl': { gridTemplateColumns: 'repeat(10, 1fr)' },
      })"
    >
      <div
        v-for="skill in pastSkills"
        :key="skill.name"
        :class="css({
          bg: 'bg.muted/30',
          p: '3',
          borderRadius: 'lg',
          display: 'flex',
          flexDirection: 'column',
          gap: '2',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 0 8px rgb(0 0 0 / 0.03) inset',
          opacity: '0.6',
          transition: 'opacity 0.3s ease',
          _hover: {
            opacity: '0.9',
          },
        })"
      >
        <Icon
          :name="skill.icon"
          size="28px"
        />
        <span
          :class="css({
            fontSize: 'sm',
            fontWeight: 'medium',
          })"
        >
          {{ skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { css } from 'styled-system/css'

const activeSkills = [
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon-alt' },
  { name: 'Hono', icon: 'logos:hono' },
  { name: 'AdonisJS', icon: 'logos:adonisjs-icon' },
  { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
  { name: 'Panda CSS', icon: 'logos:pandacss-icon' },
  { name: 'Storybook', icon: 'logos:storybook-icon' },
  { name: 'pnpm', icon: 'logos:pnpm' },
  { name: 'Claude Code', icon: 'logos:claude-icon' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'GitKraken', icon: 'logos:gitkraken' },
]

const pastSkills = [
  { name: 'React', icon: 'logos:react' },
  { name: 'Next.js', icon: 'logos:nextjs-icon' },
  { name: 'Deno', icon: 'logos:deno' },
  { name: 'Vuetify', icon: 'logos:vuetifyjs' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'Material UI', icon: 'logos:material-ui' },
  { name: 'Laravel', icon: 'logos:laravel' },
]
</script>
