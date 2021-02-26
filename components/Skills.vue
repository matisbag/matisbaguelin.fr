<template>
  <section class="max-w-4xl mx-auto my-1" v-scroll-reveal>
    <div class="rounded-lg bg-black shadow-md sm:grid cursor-pointer" :class="'sm:grid-cols-' + skills.skills.length">
      <div v-for="(skill, index) in skills.skills" :key="skill.name" class="border-gray-500 group bg-gradient-to-b hover:from-black" :class="[index === 0 ? 'rounded-t-lg sm:rounded-t-none sm:rounded-l-lg sm:border-0' : 'border-t sm:border-0 sm:border-l', index === skills.skills.length - 1 ? 'rounded-b-lg sm:rounded-b-none sm:rounded-r-lg' : 'border-b sm:border-r', 'hover:to-' + skills.color]">
        <div class="py-4 sm:py-6 px-1 text-center">
          <p class="text-5xl leading-none font-extrabold text-indigo-600">
            <img :src="require(`~/assets/${skill.icon}`)" :alt="skill.name" class="w-10 h-10 mx-auto">
          </p>
          <p class="mt-2 text-lg leading-6 font-medium text-cool-gray-500">
            {{skill.name}}
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
      }
    },
  },
  data() {
    return {
      
    }
  }
}
</script>