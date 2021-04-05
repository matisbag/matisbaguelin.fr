export const state = () => ({
  projects : [
    {
      routeName: 'conference',
      title: 'Conference',
      desc: 'Intégration d\'une maquette',
      description: 'Réalisation d\'une maquette <a href="https://i.pinimg.com/originals/7c/39/00/7c3900c859005ec907114689f79da4a3.jpg" target="_blank">Conférence</a>',
      image: 'projects/conference.png',
      link: 'http://conference.matisbaguelin.fr/',
      github: 'https://github.com/MatisBag/The-conference',
      techno: ['HTML', 'CSS', 'JS']
    },
    {
      routeName: 'the-blog',
      title: 'The Blog',
      desc: 'Blog avec espace membre - commentaire',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit !',
      image: 'projects/theblog.png',
      link: 'http://mbaguelin.eemi.tech/BDD/blog/',
      github: 'https://github.com/MatisBag/tp-blog',
      techno: ['HTML', 'CSS', 'JS', 'PHP']
    }
  ]
})
