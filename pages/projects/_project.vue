<template>
  <main class="flex-1 px-4 py-10">
    <article v-if="project" class="mx-auto max-w-7xl sm:px-4">
      <div class="lg:text-center mb-4">
        <h2 class="text-green-500 text-base font-semibold tracking-wide uppercase">
          {{ project.title }}
        </h2>
      </div>
      <div class="flex flex-col items-center w-full">
        <img
          class="w-full max-w-5xl rounded-lg"
          :src="require(`~/assets/${project.image}.png`)"
          :alt="'home page' + project.title"
        />
      </div>
      <div class="mx-auto py-6 max-w-5xl 2xl:max-w-none lg:py-12">
        <div class="flex flex-wrap justify-between space-x-0 space-y-2 sm:space-x-2 sm:space-y-0">
          <a
            :href="project.link"
            target="_blank"
            rel="noopener"
            :class="{ invisible: !project.link }"
            class="btn btn-website"
          >
            <span class="relative z-10">Visiter le site</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="z-10 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener"
            class="btn btn-github"
          >
            Github &#160;
            <img
              src="~/assets/icons/d-github.svg"
              alt="github icon"
              class="w-5 h-5 hover:text-black text-white"
            />
          </a>
        </div>
        <div class="py-6">
          <p class="text-justify font-medium lg:text-lg" v-html="project.description"></p>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
const getData = () => import('~/data/data.json').then((m) => m.default || m)

export default {
  async asyncData({ route, error }) {
    const data = await getData()
    const project = await data.projects.filter(
      (project) => project.routeName === route.params.project
    )[0]
    if (!project) {
      error({ statusCode: 404 })
    }
    return { project }
  },
  head() {
    return {
      title: `Matis Baguelin - ${this.project.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.title
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  @apply flex items-center justify-center space-x-2 py-1 px-4 min-w-max font-semibold rounded-md transition duration-500 w-full sm:w-min;
  &-github {
    @apply text-white bg-gray-900 dark:bg-black hover:bg-green-500 transition duration-500 h-full;
  }
  &-website {
    @apply text-white hover:text-green-500 relative;
    svg path {
      @apply text-white transition duration-500;
    }
    &:after {
      @apply absolute top-0 left-0 w-full h-full transition-all duration-500 bg-green-500 rounded-md;
      content: '';
    }
    &:hover {
      svg path {
        @apply text-green-500;
      }
      &:after {
        @apply w-0;
      }
    }
  }
}
</style>
