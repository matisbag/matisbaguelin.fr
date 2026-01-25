<template>
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
      v-for="skill in skills"
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
