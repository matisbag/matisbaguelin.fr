<template>
  <section class="mx-auto px-4 py-12 max-w-7xl sm:px-6 lg:px-8">
    <div id="contact" class="lg:text-center">
      <h2 class="text-green-500 text-base font-semibold tracking-wide uppercase">Mon contact</h2>
      <p class="mt-2 text-gray-100 text-3xl font-extrabold tracking-tight leading-8 sm:text-4xl">
        Me contacter
      </p>
      <p class="mt-4 max-w-2xl text-gray-500 text-xl lg:mx-auto">Envoie moi un mail !</p>
    </div>
    <form class="flex flex-col items-center mt-2 space-y-4" @submit.prevent="sendEmail">
      <label class="w-full max-w-3xl">
        <span class="sr-only">Nom</span>
        <input type="text" placeholder="Ton nom" v-model="name" required />
      </label>
      <label class="w-full max-w-3xl">
        <span class="sr-only">Adresse E-mail</span>
        <input type="email" placeholder="Ton mail" v-model="email" required />
      </label>
      <label class="w-full max-w-3xl">
        <span class="sr-only">Texte</span>
        <textarea type="text" placeholder="Contenu" v-model="content" required class="h-28" />
      </label>
      <div class="w-full max-w-3xl">
        <button class="btn justify-self-start" type="submit">Envoyer</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      content: ''
    }
  }
}
</script>

<style lang="scss" scoped>
[type='text'],
[type='email'],
textarea {
  @apply w-full rounded-md border-black border shadow-sm bg-black focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50;
}

.btn {
  @apply rounded border-2 border-black hover:border-gray-200 px-6 py-2 bg-black text-green-400 shadow-sm font-medium;
}
</style>
