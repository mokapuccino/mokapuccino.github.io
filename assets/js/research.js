/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title:
      "Mes Ambitions Professionnelles",
    desp: "<p class='amb'> Mes ambitions professionnelles sont susceptibles d'évoluer.<br> J'aimerais trouver un métier qui ne soit pas trop répétitif afin d'y prendre du plaisir. Comme beaucoup, avoir un environnement de travail sain me semble important. <br><br>L'idée de travailler à l'étranger me plaît beaucoup, je souhaiterais avoir l'opportunité de réaliser une partie de ma carrière en dehors de la France.<br> Je préfère intégrer un organisme déjà en place plutôt que de devenir entrepreuneuse en début de carrière.<br> J'aimerais également avoir la possibilité de faire de la recherche plus tard.</p>",
    image: "assets/images/research-page/amb.png", 
    abstract:
    "<p>Après avoir réalisé mon Erasmus en Finlande, je souhaitais rester dans ce pays et j’y ai donc réalisé un stage d’1 mois.<br><br> J’ai travaillé dans une boîte de nuit nommée Ilona et un bar nommé Wainö.</p><p>Lors de ce stage j’ai énormément pu pratiquer mon anglais et mon finnois puisque le français n’est pas parlé en Finlande. Je n’ai pas eu beaucoup de contact avec les clients puisque je ne comprends que les bases du finnois. J’ai réalisé des missions de gestion de stocks avec notamment le rangement des livraisons de boissons et de matériel événementiel. J’ai réalisé beaucoup de missions de nettoyages, ramassage de verres vides, … J’ai également pu préparer des boissons.</p> Toutes ces missions m’ont apporté des compétences et notamment une bonne gestion du temps puisqu’il fallait savoir être rapide sur chaque tâche. J’ai appris le fonctionnement interne d’un bar et d’une boîte de nuit, j’ai acquis des compétences techniques basiques qui me serviront sûrement à l’avenir (comme changer un fût ou réaliser des cocktails).</p><p>J’ai expérimenté le travail de nuit puisque je finissais le travail en boîte de nuit à 5h du matin et c’est ce qui a été le plus difficile pour moi. J’ai su à adapter mon cycle de vie à mon travail. Enfin, j’ai appris à évoluer dans une culture différente de la mienne et à m’y intégrer.</p>",
    absbox: "absPopup0",
  },
  {
    title:
      "Mes compétences métier",
    desp: "<p>Je n’ai pas encore d’idée exacte du métier que je souhaite exercer. Cependant, je souhaite travailler dans l’informatique et plus particulièrement exercer un métier en lien avec l’Intelligence Artificielle ou/et le Développement Web. </p><p>Voici une liste non exhaustive des compétences nécessaires à cette évolution professionnelle. </p><p>Savoir : </p><p><li>Coder</li><li>Acquérir rapidement et de manière autonome des connaissances</li><li>Faire preuve de créativité</li><li>S’auto-former, veille permanente</li><li>S'engager et agir en autonomie</li><li>Travailler en équipe et faire partager ses connaissances</li><li>Rédiger, synthétiser des documents</li></p>",
    image: "assets/images/research-page/job.png", 
    abstract:
    "<h3 style='text-align' :justify>Mes compétences métiers :</h3><p>Je n’ai pas encore d’idée exacte du métier que je souhaite exercer. Cependant, je souhaite travailler dans l’informatique et plus particulièrement exercer un métier en lien avec l’Intelligence Artificielle ou le Développement Web. </p><p>Voici une liste non exhaustive des compétences nécessaires à cette évolution professionnelle : </p><p><li>Coder</li><li>Acquérir rapidement et de manière autonome des connaissances</li><li>Faire preuve de créativité</li><li>S’auto-former, veille permanente</li><li>S'engager et agir en autonomie</li><li>Travailler en équipe et faire partager ses connaissances</li><li>Rédiger, synthétiser des documents</li></p>",
    absbox: "absPopup0",
  },
  {
    title: "Mes Savoirs",
    desp: "<p class='amb'><li><h5>Globaux :</h5> Pack Office, Linux, Windows</li><br><li><h5>Programmation : </h5>Python, C#, C++, C, UML, Java, LaTeX</li><br><li><h5>IA : </h5>Machine Learning, Visualisation de données, Traitement d'images</li><br><li><h5>Réseau :</h5> CCNA 1 & 2, Packet Tracer</li><br><li><h5>Developpement Web : </h5> HTML, CSS, Javascript</li><br><li><h5>Gestion de projet : </h5> Méthodes SCRUM / Agile</li></p><li><h5>Langues, anglais : </h5>niveau C1 (score TOEIC 960/990)</li><br><li><h5>Langues, espagnol : </h5>niveau B1 </li><br>",
    image: "assets/images/research-page/K1.png",
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
  },

  {
    title: "Mes Savoir-faire",
    desp: "<p class='amb'><li>Transmettre des connaissances</li><br><li>Gérer des stocks / des bases de données</li><br><li>Planifier des tâches, travailler en équipe</li><br><li>Encadrer des jeunes</li><br><li>Communiquer sur des évènements</li><br><li>Coder de manière continue et efficace</li></p>",

    image: "assets/images/research-page/KF.png",
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title:
      "Mes Savoir-être",
    desp: "<p class='amb'><li>Autonomie</li><br><li>Rigueur</li><br><li>Curiosité</li><br><li>Pédagogie</li><br><li>Esprit d'équipe</li><br><li>Adaptabilité</li><br><li>Bon niveau orthographique</li><br><li>Capacités d'analyse et de synthèse</li></p>",
    image: "assets/images/research-page/KE.png", 
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },

  
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      desp,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <div class="title">
                      <h2>${title}</h2>
                    </div>
                    <ul>
                      ${desp}
                    </ul> 
                    
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
