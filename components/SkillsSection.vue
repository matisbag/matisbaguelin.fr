<template>
  <section class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div id="skills" class="lg:text-center">
      <h2 class="text-base text-emerald-500 font-semibold tracking-wide uppercase">Mes compétences</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
        Techno de prédilections
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Mes années d'expériences m'ont permis de découvrir ses merveilleuses techno 😁
      </p>
    </div>
    <Skills :skills="predilectionsSkills"/>

    <p class="lg:text-center mt-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
      Quelques expériences
    </p>
    <p class="lg:text-center mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      Technologies avec lesquelles j'ai déjà travaillé
    </p>

    <Skills :skills="othersSkills"/>



    <p class="lg:text-center mt-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
      Outils
    </p>
    <p class="lg:text-center mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      Outils que j'ai déjà utilisé
    </p>

    <Skills :skills="toolsSkills"/>
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
              name: 'Vue.js',
              icon: 'vuejs.svg'
            },
            {
              name: 'Laravel',
              icon: 'laravel.svg'
            },
            {
              name: 'Node.js',
              icon: 'nodejs.svg'
            }
          ],
          color: 'dark-green'
          // else ?
        },
        othersSkills: {
          skills: [
            {
              name: 'Angular',
              icon: 'angular.svg',
            },
            {
              name: 'Symfony',
              icon: 'symfony.svg',
            },
            {
              name: 'Kotlin',
              icon: 'kotlin.svg',
            }
          ],
          color: 'dark-pink'
          // else ?
        },
        toolsSkills: {
          skills: [
            {
              name: 'NuxtJS',
              icon: 'nuxtjs.svg',
            },
            {
              name: 'Tailwind CSS',
              icon: 'tailwindcss.svg',
            },
            {
              name: 'Vuetify',
              icon: 'vuetify.svg',
            },
            {
              name: 'Git',
              icon: 'git.svg',
            },
            {
              name: 'GitKraken',
              icon: 'gitkraken.svg',
            },
            {
              name: 'Sass',
              icon: 'sass.svg',
            }
          ],
          color: 'dark-blue'
          // else ?
        },
      }
    },
  }
</script>
