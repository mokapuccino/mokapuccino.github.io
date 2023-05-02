/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title:
      "Mes Ambitions Professionnelles",
    desp: "<p class='amb'> Mes ambitions professionnelles sont susceptibles d'évoluer.<br> J'aimerais trouver un métier qui ne soit pas trop répétitif afin d'y prendre du plaisir. Comme beaucoup, avoir un environnement de travail sain me semble important. <br><br>L'idée de travailler à l'étranger me plaît beaucoup, je souhaiterais avoir l'opportunité de réaliser une partie de ma carrière en dehors de la France.<br> Je préfère intégrer un organisme déjà en place plutôt que de devenir entrepreuneuse en début de carrière.<br> J'aimerais également avoir la possibilité de faire de la recherche plus tard.</p>",
    image: "assets/images/research-page/ambition.png", 
    abstract:
    "<p>Après avoir réalisé mon Erasmus en Finlande, je souhaitais rester dans ce pays et j’y ai donc réalisé un stage d’1 mois.<br><br> J’ai travaillé dans une boîte de nuit nommée Ilona et un bar nommé Wainö.</p><p>Lors de ce stage j’ai énormément pu pratiquer mon anglais et mon finnois puisque le français n’est pas parlé en Finlande. Je n’ai pas eu beaucoup de contact avec les clients puisque je ne comprends que les bases du finnois. J’ai réalisé des missions de gestion de stocks avec notamment le rangement des livraisons de boissons et de matériel événementiel. J’ai réalisé beaucoup de missions de nettoyages, ramassage de verres vides, … J’ai également pu préparer des boissons.</p> Toutes ces missions m’ont apporté des compétences et notamment une bonne gestion du temps puisqu’il fallait savoir être rapide sur chaque tâche. J’ai appris le fonctionnement interne d’un bar et d’une boîte de nuit, j’ai acquis des compétences techniques basiques qui me serviront sûrement à l’avenir (comme changer un fût ou réaliser des cocktails).</p><p>J’ai expérimenté le travail de nuit puisque je finissais le travail en boîte de nuit à 5h du matin et c’est ce qui a été le plus difficile pour moi. J’ai su à adapter mon cycle de vie à mon travail. Enfin, j’ai appris à évoluer dans une culture différente de la mienne et à m’y intégrer.</p>",
    absbox: "absPopup0",
  },
  {
    title:
      "Mes valeurs",
    desp: "<p>Les valeurs qui me tiennent à coeur et me correspondent sont :</p><li>La persévérence</li><li>L'ouverture d'esprit</li><li>Le respect</li><li>La volonté de dépassement de soi</li><li>La créativité</li><p>Ma devise est de toujours faire au mieux ce que l'on cherche à accomplir, dans les études, dans le monde professionnel ainsi que dans la vie de tous les jours. Cette mentalité me pousse à toujours me donner à 100% quoi que j'entreprenne.</p>",
    image: "assets/images/research-page/Value.png", 
    abstract:
    "",
    absbox: "absPopup0",
  },
  {
    title: "Mes Anti-valeurs",
  desp: "<p>Les choses que je perçois comme étant des anti-valeurs sont :</p><li>La manipulation</li><li>L'hypocrisie</li><li>La malhonnêteté</li><li>La paresse</li><p>Ayant beaucoup de mal à feindre, je m'entends très mal avec des personnes hypocrites et la manipulation à des fins malhonnêtes est, pour moi, le pire coup bas qui puisse être porté.</p>",
    image: "assets/images/research-page/Avalue.png",
    abstract:
      "",
    absbox: "absPopup1",
  },

  {
    title: "Mon projet professionnel",
    desp: "<p>Une fois mes études à l'ESAIP terminées, j'aimerais continuer à travailler dans le domaine de l'Intelligence Artificielle.</p><p> Mon souhait est de trouver un Projet de Fin d'Etudes (PFE) dans ce domaine.</p><p>J’ai eu l’occasion à l’Esaip de développer mes compétences en Intelligence Artificielle en cours, en étant très bien accompagnée par des enseignants chercheurs. Leurs parcours m’ont inspirée et m’ont donné envie de me lancer dans la recherche.</p><p> Après mon PFE, j'aimerais donc continuer à travailler sur des IA et je pense à faire un doctorat via le dispositif CIFRE. Ce type de doctorat me permettrait de développer mon intérêt pour la recherche tout en travaillant partiellement en entreprise.</p>",

    image: "assets/images/research-page/rich.png",
    abstract:
      "",
    absbox: "absPopup2",
  },

  {
    title:
      "Dans 5 ans j'aimerais ...",
    desp: "<p>... Que ma thèse soit terminée si l'opportunité pour moi d'en faire une s'est présentée.</p><p>... Avoir un emploi stable de type CDI, en France ou à l'étranger dans lequel je sois épanouie et qui soit en lien avec l'IA.</p><p> ... Avoir un logement, quelqu'un avec qui partager ma vie et un chien.</p>",
    image: "assets/images/research-page/futur.png", 
    abstract:
      "",
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
