export const state = () => ({
  projects : [
    {
      routeName: 'conference',
      title: 'Conference',
      desc: 'Intégration d\'une maquette',
      description: 'Réalisation d\'une maquette <a href="https://i.pinimg.com/originals/7c/39/00/7c3900c859005ec907114689f79da4a3.jpg" target="_blank">Conférence</a>',
      image: 'projects/conference',
      link: 'http://conference.matisbaguelin.fr/',
      github: 'https://github.com/MatisBag/The-conference',
      techno: ['HTML', 'CSS', 'JS - jQuery']
    },
    {
      routeName: 'the-blog',
      title: 'The Blog',
      desc: 'Blog avec espace membres - commentaire',
      description: 'L\'objectif était de créer un blog avec un espace membres pour pouvoir par la suite écrire des commentaires.',
      image: 'projects/theblog',
      link: 'http://mbaguelin.eemi.tech/BDD/blog/',
      github: 'https://github.com/MatisBag/tp-blog',
      techno: ['HTML', 'CSS', 'JS', 'PHP']
    }
  ]
})
