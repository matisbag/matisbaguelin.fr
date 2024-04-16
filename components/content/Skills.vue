<template>
  <div
    class="grid grid-cols-3 auto-rows-fr gap-2 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-8"
  >
    <div
      v-for="skill in skills"
      class="bg-gray-50 hover:bg-transparent transition ease-in-out duration-[1.8s] p-2 rounded flex flex-col items-center text-center group test"
    >
      <component
        :is="skill.icon"
        size="26px"
        :style="`fill: ${skill.color}`"
        class="drop-shadow-sm group-hover:rotate-[360deg] group-hover:scale-125 transition ease-in-out duration-[2s]"
      />
      <span>{{ skill.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  TypeScriptIcon,
  ReactIcon,
  NextDotjsIcon,
  VueDotjsIcon,
  NuxtDotjsIcon,
  NodeDotjsIcon,
  DenoIcon,
  TailwindCssIcon,
  StorybookIcon,
  PnpmIcon,
  MySqlIcon,
  HonoIcon,
  AdonisJsIcon,
  LaravelIcon,
  GitIcon,
  GitKrakenIcon,
  PythonIcon,
  VuetifyIcon,
  MuiIcon,
  LinuxIcon,
} from "vue3-simple-icons"

const skills = [
  { name: "TypeScript", icon: TypeScriptIcon, color: "#3178C6" },
  { name: "React", icon: ReactIcon, color: "#61DAFB" },
  { name: "Next.js", icon: NextDotjsIcon, color: "#000000" },
  { name: "Vue.js", icon: VueDotjsIcon, color: "#4FC08D" },
  { name: "Nuxt.js", icon: NuxtDotjsIcon, color: "#00DC82" },
  { name: "Node.js", icon: NodeDotjsIcon, color: "#339933" },
  { name: "Deno", icon: DenoIcon, color: "#000000" },
  { name: "Hono", icon: HonoIcon, color: "#E36002" },
  { name: "AdonisJS", icon: AdonisJsIcon, color: "#5A45FF" },
  { name: "Laravel", icon: LaravelIcon, color: "#FF2D20" },
  { name: "MySQL", icon: MySqlIcon, color: "#4479A1" },
  { name: "Tailwind", icon: TailwindCssIcon, color: "#06B6D4" },
  { name: "Material UI", icon: MuiIcon, color: "#007FFF" },
  { name: "Storybook", icon: StorybookIcon, color: "#FF4785" },
  { name: "pnpm", icon: PnpmIcon, color: "#F69220" },
  { name: "Python", icon: PythonIcon, color: "#3776AB" },
  { name: "Vuetify", icon: VuetifyIcon, color: "#1867C0" },
  { name: "Git", icon: GitIcon, color: "#F05032" },
  { name: "GitKraken", icon: GitKrakenIcon, color: "#179287" },
  { name: "Linux", icon: LinuxIcon, color: "#000000" },
]
</script>
