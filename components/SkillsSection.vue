<template>
  <section class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div id="skills" class="lg:text-center">
      <h2 class="text-base text-green-500 font-semibold tracking-wide uppercase">Mes compétences</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
        Techno de prédilections
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Mes années d'expériences m'ont permis de découvrir ces merveilleuses techno 😁
      </p>
    </div>
    <Skills :skills="predilectionsSkills"/>

    <p class="lg:text-center mt-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
      Quelques expériences
    </p>
    <p class="lg:text-center mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      Technologies avec lesquelles j'ai déjà travaillées
    </p>

    <Skills :skills="othersSkills"/>

    <p class="lg:text-center mt-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
      Outils
    </p>
    <p class="lg:text-center mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      Outils que j'ai déjà utilisés
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
              icon: 'icons/vuejs'
            },
            {
              name: 'Laravel',
              icon: 'icons/laravel'
            },
            {
              name: 'Node.js',
              icon: 'icons/nodejs'
            }
          ],
          color: 'dark-green'
          // else ?
        },
        othersSkills: {
          skills: [
            {
              name: 'Angular',
              icon: 'icons/angular',
            },
            {
              name: 'Symfony',
              icon: 'icons/symfony',
            },
            {
              name: 'Kotlin',
              icon: 'icons/kotlin',
            }
          ],
          color: 'dark-pink'
          // else ?
        },
        toolsSkills: {
          skills: [
            {
              name: 'NuxtJS',
              icon: 'icons/nuxtjs',
            },
            {
              name: 'Tailwind CSS',
              icon: 'icons/tailwindcss',
            },
            {
              name: 'Vuetify',
              icon: 'icons/vuetify',
            },
            {
              name: 'Git',
              icon: 'icons/git',
            },
            {
              name: 'GitKraken',
              icon: 'icons/gitkraken',
            },
            {
              name: 'Sass',
              icon: 'icons/sass',
            }
          ],
          color: 'dark-blue'
          // else ?
        },
      }
    },
  }
</script>
