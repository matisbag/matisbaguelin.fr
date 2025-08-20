<script lang="ts" setup>
import { container } from 'styled-system/patterns'
import { css } from 'styled-system/css'
import { SplitText } from 'gsap/SplitText'

const { $gsap } = useNuxtApp()

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects')
    .select('title', 'description', 'path', 'id')
    .all()
})

onMounted(() => {
  $gsap.set('.projects-title', { opacity: 1 })

  const titleSplit = new SplitText('.projects-title', { type: 'chars' })

  $gsap.fromTo(titleSplit.chars,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'back.out(1.7)',
      stagger: 0.05,
    },
  )

  $gsap.fromTo('.projects-description',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: 'power2.out' },
  )

  $gsap.fromTo('.project-card',
    { opacity: 0, y: 40, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      delay: 0.2,
      ease: 'power2.out',
      stagger: 0.15,
    },
  )
})
</script>

<template>
  <main :class="container({ py: '55px' })">
    <div :class="css({ textAlign: 'center', mb: '14' })">
      <h1
        class="projects-title"
        :class="css({
          fontFamily: 'heading',
          fontSize: '5xl',
          fontWeight: 'bold',
          mb: '3',
          opacity: '0',
        })"
      >
        Projects
      </h1>
      <p
        class="projects-description"
        :class="css({
          color: 'text.muted',
          fontSize: 'lg',
          maxW: 'md',
          mx: 'auto',
          lineHeight: '1.4',
          opacity: '0',
        })"
      >
        A selection of creative and technical work showcasing my development skills
      </p>
    </div>

    <div :class="css({ display: 'grid', gap: '12' })">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :index="index"
        :class="css({ opacity: '0' })"
        class="project-card"
      />
    </div>
  </main>
</template>
