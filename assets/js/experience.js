AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Technicienne en discothèque / bar en Finlande",
    cardImage: "assets/images/experience-page/Ilona.jpg",
    place: "Viihdemaailma Ilona, Seinäjoki (Finlande)",
    time: "Juin 2022 (1 mois)",
    desp: "Equipière polyvalente, missions : <li>Preparation de boissons</li><li>Nettoyage</li><li>Gestion de stocks</li>",
    abstract:
      "<p>Après avoir réalisé mon Erasmus en Finlande, je souhaitais rester dans ce pays et j’y ai donc réalisé un stage d’1 mois.<br><br> J’ai travaillé dans une boîte de nuit nommée Ilona et un bar nommé Wainö.</p><p>Lors de ce stage j’ai énormément pu pratiquer mon anglais et mon finnois puisque le français n’est pas parlé en Finlande. Je n’ai pas eu beaucoup de contact avec les clients puisque je ne comprends que les bases du finnois. J’ai réalisé des missions de gestion de stocks avec notamment le rangement des livraisons de boissons et de matériel événementiel. J’ai réalisé beaucoup de missions de nettoyages, ramassage de verres vides, … J’ai également pu préparer des boissons.</p> Toutes ces missions m’ont apporté des compétences et notamment une bonne gestion du temps puisqu’il fallait savoir être rapide sur chaque tâche. J’ai appris le fonctionnement interne d’un bar et d’une boîte de nuit, j’ai acquis des compétences techniques basiques qui me serviront sûrement à l’avenir (comme changer un fût ou réaliser des cocktails).</p><p>J’ai expérimenté le travail de nuit puisque je finissais le travail en boîte de nuit à 5h du matin et c’est ce qui a été le plus difficile pour moi. J’ai su à adapter mon cycle de vie à mon travail. Enfin, j’ai appris à évoluer dans une culture différente de la mienne et à m’y intégrer.</p>",
    absbox: "absPopup1",
  },
  {
    title: "Serveuse en restauration",
    cardImage: "assets/images/experience-page/C.png",
    place: "Courtepaille, Bouguenais et Saint-Nazaire (44)",
    time: "contrat extra régulier + 5 mois de temps plein, depuis 2021",
    desp: "Serveuse Polyvalente, missions : <li>Service</li><li>Accueil</li><li>Nettoyage</li><li>Officier de cuisine</li><li>Plonge</li>",
    abstract:
      "",
    absbox: "absPopup2",
  },
  {
    title: "Stagiaire en service informatique",
    cardImage: "assets/images/experience-page/B.png",
    place: "Brangeon Services, La Pommeraye (49)",
    time: "Juillet 2020 (1 mois)",
    desp: "Missions : <li>Gestion des stocks</li> <li>Standardiste téléphonique</li> <li>Préparation de postes informatiques / téléphones pour mise en service</li> <li>Gestion de bases de données</li>",
    abstract:
      "",
    absbox: "absPopup3",
  },

];


const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp,absbox,abstract }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ul>
              ${desp}
            </ul> 
            <!--CITE BUTTON-->
            <a href="pro.html" class="blog-slider_button">Détail</a> 
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "ANT, Accessibilité Numérique pour Tous",
    subtitle: "Centre Communal d'Actions Sociales Village Pierre Rabhi, Saint-Barthélemy-d'Anjou (49)",
    image: "assets/images/experience-page/ANTB1.png",
    desp: "Création et animation de cours d'informatique au sein du club ANT. J'ai été, jusque récemment, responsable de la communication interne du club.",
  },
  {
    title: "Coaching de Badminton",
    subtitle: "BLB Badminton, Saint Joachim (44)",
    image: "assets/images/experience-page/BLB1.png",
    desp: "Encadrement bénévole de groupes de 15-20 enfants de 8 à 14 ans dans un cadre sportif (badminton) en cours ainsi qu'en compétitions.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="asso.html" class="blog-slider__button">Détail</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
