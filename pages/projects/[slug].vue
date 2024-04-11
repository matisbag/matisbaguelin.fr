<template>
  <main
    class="prose prose-img:rounded-lg prose-img:drop-shadow-sm prose-quoteless max-w-none flex flex-col"
  >
    <ContentDoc>
      <template #not-found>
        <Head>
          <Title>Projet non trouvé</Title>
        </Head>
        <section
          class="grow flex flex-col md:flex-row-reverse justify-center md:justify-evenly items-center"
        >
          <div>
            <img
              src="~/assets/img/monamoji-mindblown.png"
              alt="non trouvé"
              class="w-80 max-w-full h-auto"
            />
          </div>
          <div>
            <h1>Projet non trouvé.</h1>
            <NuxtLink to="/projects"> Voir mes projets </NuxtLink>
          </div>
        </section>
      </template>
    </ContentDoc>
  </main>
</template>
