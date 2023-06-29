<template>
  <section class="mx-auto py-12 max-w-7xl sm:px-4 lg:px-6">
    <div id="skills" class="lg:text-center">
      <h2 class="text-green-500 text-base font-semibold tracking-wide uppercase">
        Mes compétences
      </h2>
      <p
        class="mt-2 dark:text-gray-100 text-3xl font-extrabold tracking-tight leading-8 sm:text-4xl"
      >
        Technos de prédilections
      </p>
      <p class="mt-4 max-w-2xl text-gray-500 text-xl lg:mx-auto">
        Mes années d'expériences m'ont permis de découvrir ces merveilleuses technos 😁
      </p>
    </div>
    <Skills :skills="predilectionsSkills" />

    <p
      class="mt-8 dark:text-gray-100 text-3xl font-extrabold tracking-tight leading-8 sm:text-4xl lg:text-center"
    >
      Quelques expériences
    </p>
    <p class="mt-4 max-w-2xl text-gray-500 text-xl lg:mx-auto lg:text-center">
      Technologies avec lesquelles j'ai déjà travaillés
    </p>

    <Skills :skills="othersSkills" />

    <p
      class="mt-8 dark:text-gray-100 text-3xl font-extrabold tracking-tight leading-8 sm:text-4xl lg:text-center"
    >
      Outils
    </p>
    <p class="mt-4 max-w-2xl text-gray-500 text-xl lg:mx-auto lg:text-center">
      Outils que j'ai déjà utilisés
    </p>

    <Skills :skills="toolsSkills" />
  </section>
</template>

<script>
// delete p > img style

import Skills from './Skills.vue'
export default {
  components: {
    Skills
  },
  data() {
    return {
      predilectionsSkills: {
        skills: [
          {
            name: 'React',
            icon: 'icons/react'
          },
          {
            name: 'Vue.js',
            icon: 'icons/vuejs'
          },
          {
            name: 'Laravel',
            icon: 'icons/laravel'
          }
        ],
        color: 'dark-green'
      },
      othersSkills: {
        skills: [
          {
            name: 'Symfony',
            icon: 'icons/symfony'
          },
          {
            name: 'Node.js',
            icon: 'icons/nodejs'
          },
          {
            name: 'Python',
            icon: 'icons/python'
          }
        ],
        color: 'dark-pink'
      },
      toolsSkills: {
        skills: [
          {
            name: 'Next.js',
            icon: 'icons/nextjs'
          },
          {
            name: 'NuxtJS',
            icon: 'icons/nuxtjs'
          },
          {
            name: 'Tailwind CSS',
            icon: 'icons/tailwindcss'
          },
          {
            name: 'Vuetify',
            icon: 'icons/vuetify'
          },
          {
            name: 'Git',
            icon: 'icons/git'
          },
          {
            name: 'GitKraken',
            icon: 'icons/gitkraken'
          }
        ],
        color: 'dark-blue'
      }
    }
  }
}
</script>
