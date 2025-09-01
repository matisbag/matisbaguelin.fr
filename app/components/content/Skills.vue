<template>
  <div
    :class="css({
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2',
      sm: { gridTemplateColumns: 'repeat(5, 1fr)' },
      md: { gridTemplateColumns: 'repeat(6, 1fr)' },
      xl: { gridTemplateColumns: 'repeat(8, 1fr)' },
    })"
  >
    <div
      v-for="skill in skills"
      :key="skill.name"
      :class="css({
        bg: 'bg.muted',
        p: '2.5',
        borderRadius: 'md',
        display: 'flex',
        flexDirection: 'column',
        gap: '2',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'all 1.8s ease-in-out',
        _hover: {
          bg: 'transparent',
        },
      })"
      class="group"
    >
      <Icon
        :name="skill.icon"
        size="22px"
        :class="css({
          filter: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))',
          transition: 'all 2s ease-in-out',
          _groupHover: {
            rotate: '360deg',
            scale: '1.25',
          },
        })"
      />
      <span>{{ skill.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { css } from 'styled-system/css'

const skills = [
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
  { name: 'React', icon: 'logos:react' },
  { name: 'Next.js', icon: 'logos:nextjs-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon-alt' },
  { name: 'Deno', icon: 'logos:deno' },
  { name: 'Hono', icon: 'logos:hono' },
  { name: 'AdonisJS', icon: 'logos:adonisjs-icon' },
  { name: 'Laravel', icon: 'logos:laravel' },
  { name: 'MySQL', icon: 'logos:mysql-icon' },
  { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
  { name: 'Material UI', icon: 'logos:material-ui' },
  { name: 'Storybook', icon: 'logos:storybook-icon' },
  { name: 'pnpm', icon: 'logos:pnpm' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'Vuetify', icon: 'logos:vuetifyjs' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'GitKraken', icon: 'logos:gitkraken' },
  { name: 'Linux', icon: 'logos:linux-tux' },
]
</script>
