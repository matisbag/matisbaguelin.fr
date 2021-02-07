<template>
  <div class="bg-gray-900 text-white min-h-screen px-4 py-10">
    <div class="container mx-auto card">
      <h1 class="title">
        <span class="text-emerald-800">NUXT</span>JS &amp; TailwindCss v2.0
      </h1>
    </div>

      <Project />
  </div>
    
</template>

<script>
  export default {};

</script>

<style lang="scss" scoped>
  /* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
  // .wrapper {
  //   @apply min-h-screen flex justify-center items-center text-center mx-auto bg-gray-900;
  // }
  .card {
    @apply p-10 rounded-lg text-emerald-500 bg-emerald-100 shadow-lg;

    .title {
      @apply text-6xl font-bold;
    }
  }

</style>
