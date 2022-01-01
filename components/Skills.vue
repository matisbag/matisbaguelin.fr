<template>
  <section class="mx-auto my-1 max-w-4xl">
    <div
      class="dark:bg-gray-800 bg-gray-900 rounded-lg shadow-md cursor-pointer sm:grid"
      :class="'sm:grid-cols-' + skills.skills.length"
    >
      <div
        v-for="(skill, index) in skills.skills"
        :key="skill.name"
        class="col group dark:hover:from-gray-800 bg-gradient-to-b border-gray-500 hover:from-gray-900"
        :class="[
          index === 0
            ? 'rounded-t-lg sm:rounded-t-none sm:rounded-l-lg sm:border-0'
            : 'border-t sm:border-0 sm:border-l',
          index === skills.skills.length - 1
            ? 'rounded-b-lg sm:rounded-b-none sm:rounded-r-lg'
            : 'border-b sm:border-r',
          'hover:to-' + skills.color,
        ]"
      >
        <div class="px-1 py-4 text-center sm:py-6">
          <p class="text-indigo-600 text-5xl font-extrabold leading-none">
            <img
              :src="require(`~/assets/${skill.icon}.svg`)"
              :alt="skill.name"
              class="mx-auto w-10 h-10"
            />
          </p>
          <p class="mt-2 text-white text-lg font-medium leading-6">
            {{ skill.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    skills: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {}
  },
}
</script>
