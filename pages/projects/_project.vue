<template>
  <main class="flex-1 px-4 py-10">
    <article v-if="project.title" class="max-w-7xl mx-auto sm:px-4">
      <div class="lg:text-center">
        <h2 class="text-base text-green-500 font-semibold tracking-wide uppercase">{{ project.title }}</h2>
        <p class="my-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl">
          {{ project.desc }}
        </p>
      </div>
      <div class="w-full flex flex-col items-center">
        <img class="max-w-5xl w-full rounded-lg" :src="require(`~/assets/${project.image}.png`)" :alt="'home page' + project.title">
      </div>
      <div class="mx-auto max-w-5xl 2xl:max-w-none py-6 lg:py-12">
        <div class="flex flex-wrap justify-between space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
          <a :href="project.link" target="_blank" class="btn btn-website">
            <span class="relative z-10">Visiter le site</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a v-if="project.github" :href="project.github" target="_blank" class="btn btn-github">
            Github &#160;
            <img src="~/assets/icons/d-github.svg" alt="github icon" class="h-5 w-5 text-white hover:text-black">
          </a>
        </div>
        <div class="py-6">
          <p class="lg:text-lg font-medium text-justify" v-html="project.description"></p>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      project: {
        desc: '',
        description: '',
        github: '',
        image: '',
        link: '',
        routeName: '',
        techno: [],
        title: ''
      }
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      if (this.$store.state.projects.projects.filter(project => project.routeName === this.$route.params.project)[
        0]) {
        this.project = this.$store.state.projects.projects.filter(project => project.routeName === this.$route.params
          .project)[0]
      } else {
        this.$router.push('/404')
      }
    }
  },
  head() {
    return {
      title: 'Matis Baguelin - ' + this.project.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.project.desc
      }]
    }
  }
}
</script>

<style scoped lang="scss">
  .btn {
    @apply flex items-center justify-center space-x-2 py-1 px-4 min-w-max font-semibold rounded-md transition duration-500 w-full sm:w-min;
    &-github {
      @apply text-white bg-gray-900 dark:bg-black hover:bg-green-500 transition duration-500 h-full
    }
    &-website {
      @apply text-white hover:text-green-500 relative;
      svg path {
        @apply text-white transition duration-500;
      }
      &:after {
        @apply absolute top-0 left-0 w-full h-full transition-all duration-500 bg-green-500 rounded-md;
        content: "";
      }
      &:hover {
        svg path{
          @apply text-green-500;
        }
        &:after {
          @apply w-0;
        }
      }
    }
  }
</style>