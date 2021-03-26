export const state = () => ({
  projects : [
    {
      routeName: 'conference',
      title: 'Conference',
      desc: 'Maquette',
      description: 'Réalisation d\'une maquette <a href="https://i.pinimg.com/originals/7c/39/00/7c3900c859005ec907114689f79da4a3.jpg" target="_blank">Conférence</a>',
      image: 'projects/conference.png',
      link: 'http://conference.matisbaguelin.fr/',
      github: 'https://github.com/MatisBag/The-conference',
      techno: ['HTML', 'CSS', 'JS']
    },
    {
      routeName: 'materialize',
      title: 'Materialize',
      desc: 'Site d\'une boulangerie avec Materialize',
      description: "<p>L'objectif était de réaliser un site vitrine pour une boulangerie à l'aide d'un framework.</p> <p>Le framework utilisé est Materialize.</p>",
      image: 'projects/conference.png',
      link: 'http://mbaguelin.eemi.tech/HTML-CSS-JS/materialize/',
      github: '',
      techno: ['HTML', 'Materialize', 'JS']
    },
    {
      routeName: 'espace-admin',
      title: 'Espace administrateur',
      desc: 'Espace administrateur avec connexion - inscription, création de page html.',
      description: '<p> L\'objectif était de créer un espace d\'administration permettant de générer automatiquement des fichiers HTML à partir d\'un formulaire. </p> <p> La liste des comptes utilisateurs sera accessible dans un fichier CSV sous la forme : civilite; nom; prenom; mail; mot de passe; photo </p> <p>Après connexion : </p><ul> <li> Formulaire de création d\'un nouveau compte administrateur </li> <li> La photo sera uploadée sur le serveur sous la forme photo-nom.jpg </li> <li> Affichage des différents comptes administrateurs sur une page </li> <li> Formulaire de génération d\'une page HTML </li> <li> Pour le main, utilisation de TinyMCE, éditeur WYSIWYG </li> <li> Toutes les pages accessibles après connexion ne pourront pas être affichées sans connexion </li> </ul> <p><span class="italic"> *css optionnel* / avec <a href="https://www.linkedin.com/in/maxime-mugniot/" target="_blanck">Maxime Mugniot</a></span></p> </div>',
      image: 'projects/conference.png',
      link: 'http://espace-admin.matisbaguelin.fr/login.php',
      github: 'https://github.com/MatisBag/Espace-administrateur',
      techno: ['HTML', 'CSS', 'PHP']
    },
    {
      routeName: 'the-blog',
      title: 'The Blog',
      desc: 'Blog avec espace membre - commentaire',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit !',
      image: 'projects/conference.png',
      link: 'http://mbaguelin.eemi.tech/BDD/blog/',
      github: 'https://github.com/MatisBag/tp-blog',
      techno: ['HTML', 'CSS', 'JS', 'PHP']
    }
  ]
})
