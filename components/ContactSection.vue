<template>
  <section class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div id="contact" class="lg:text-center">
      <h2 class="text-base text-green-500 font-semibold tracking-wide uppercase">Mon contact</h2>
      <p class="lg:text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-gray-100 sm:text-4xl">
        Me contacter
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Envoie moi un mail !
      </p>
    </div>
    <form class="mt-2 space-y-4 flex flex-col items-center" @submit.prevent="sendEmail">
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
        <textarea type="text" placeholder="Contenu" v-model="content" required class="h-28"/>
      </label>
      <div class="w-full max-w-3xl">
        <button class="btn justify-self-start" type="submit" @click="sendEmail()">Envoyer</button>
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
  },
  methods: {
    sendEmail() {
      this.$axios.$post('/send-email')
      .then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
[type="text"],
[type="email"],
textarea {
  @apply w-full rounded-md shadow-sm bg-gray-900 dark:bg-gray-800 border-gray-50 dark:border-gray-900 focus:border-green-600 dark:focus:border-green-300 focus:ring focus:ring-green-500 dark:focus:ring-green-200 focus:ring-opacity-50;
}

.btn {
  @apply rounded border-2 border-gray-50 dark:border-gray-900 hover:border-green-500 dark:hover:border-green-300 px-6 py-2 bg-gray-800 text-green-400 shadow-sm font-medium;
}
</style>