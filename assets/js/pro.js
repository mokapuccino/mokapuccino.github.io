/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Technicienne en discothèque / bar en Finlande",
    image: "assets/images/experience-page/Ilona.jpg",
    place: "Viihdemaailma Ilona, Seinäjoki (Finlande)",
    time: "Juin 2022 (1 mois)",
    desp: "Equipière polyvalente, missions : <li>Preparation de boissons</li><li>Nettoyage</li><li>Gestion de stocks</li>",
    abstract:
      "<p>Après avoir eu l'opportunité de faire mon Erasmus en Finlande, je souhaitais rester dans ce pays et y ai donc réalisé un stage d’1 mois.<br><br> J’ai travaillé dans une boîte de nuit nommée Viihdemaailma Ilona et un bar nommé Wainö.</p><p>Lors de ce stage j’ai énormément pu pratiquer mon anglais et mon finnois puisque le français n’est pas parlé en Finlande. Je n’ai pas eu beaucoup de contact avec les clients puisque je ne comprends que les bases du finnois. J’ai réalisé des missions de gestion de stocks avec notamment le rangement des livraisons de boissons et de matériel événementiel. J’ai réalisé beaucoup de missions de nettoyages et ai également pu préparer des boissons.</p> Toutes ces missions m’ont apporté des compétences et notamment une bonne gestion du temps puisqu’il fallait savoir être rapide sur chaque tâche. J’ai appris le fonctionnement interne d’un bar et d’une boîte de nuit, j’ai acquis des compétences techniques basiques qui me serviront sûrement à l’avenir (comme changer un fût ou réaliser des cocktails).</p><p>J’ai expérimenté le travail de nuit puisque je finissais le travail en boîte de nuit à 5h du matin et c’est ce qui a été le plus difficile pour moi. J’ai su à adapter mon cycle de vie à mon travail. Enfin, j’ai appris à évoluer dans une culture différente de la mienne et à m’y intégrer.</p><h3 style='text-align:left'>Compétences techniques et fonctionnelles</h3><p><li>Adapter le rythme de son activité à la variabilité des flux</li><li>Adapter son comportement et son langage à la diversité des clients</li><li>Appliquer les réglementations en vigueur sur la consommation d'alcool</li><li>Faire preuve de mémoire visuelle</li><li>Organiser son poste de travail</li></p><h3 style='text-align:left'>Compétences relationnelles et comportementales</h3><p><li>Créer une ambiance conviviale en fonction de l'image et de la culture de l'entreprise</li><li>Créer une relation de confiance</li><li>Renvoyer par son comportement et sa présentation générale, une image positive et adaptée de l'établissement et du métier</li><li>Savoir alerter ou traiter en direct avec diplomatie tout évènement indésirable</li><li>Travailler en concertation et complémentarité avec l'ensemble du personnel</li></p>",
    absbox: "absPopup0",
    
  },
  {
    title: "Serveuse / officière de cuisine en restauration",
    image: "assets/images/experience-page/C.png",
    place: "Courtepaille, Bouguenais et Saint-Nazaire (44)",
    time: "contrat extra régulier + 5 mois de temps plein, depuis 2021",
    desp: "Serveuse Polyvalente, missions : <li>Service</li><li>Accueil</li><li>Nettoyage</li><li>Officier de cuisine</li><li>Plonge</li>...",
    abstract:
      "<p>Mon travail au Courtepaille de Bouguenais a été mon premier job d’été.</p><p> J’y ai travaillé pendant 3 mois, de juin à août 2021.</p><p> J’ai énormément apprécié cette expérience professionnelle qui m’a permis de m’ouvrir et de sortir de ma zone de confort pour aller vers les autres. J’ai continué à travailler à Courtepaille à Saint-Nazaire lors des vacances scolaires jusqu’à partir en Erasmus. A mon retour d’Erasmus, après avoir effectué mon stage, j’ai travaillé à nouveau à Courtepaille pendant un peu plus d’un mois. J’aime beaucoup travailler dans la restauration, c’est un univers très dynamique qui me permet de me couper du monde informatique.  Encore aujourd’hui je me rends disponible pour des contrats d’extra en restauration à Courtepaille.</p><p></p><p>J’ai occupé les fonctions d’officière de cuisine et serveuse selon les besoins des services. A Courtepaille, j’ai développé beaucoup de compétences techniques mais j’ai également beaucoup appris sur moi.</p><p>Techniquement d’abord ; j’ai appris à accueillir des clients, à effectuer les missions d’officier de cuisine, à nettoyer les locaux en respectant les normes d’hygiène, à servir des clients, à faire de la plonge, …Ce travail me donne également l’occasion de pratiquer l’espagnol, le portugais et l’anglais puisqu’une grosse partie de la clientèle de Courtepaille Saint-Nazaire est étrangère. </p><p>D’un naturel réservé, j’ai commencé à travailler en tant qu’officier de cuisine avant de petit à petit faire du service. Malgré mes appréhensions cela m’a beaucoup plu au point d’actuellement ne plus faire que du service. Ce travail m’a appris sur moi car je ne me pensais pas capable d’aller vers les gens. Ironiquement, aujourd’hui j’adore ça. Depuis cette expérience professionnelle je me sens plus extravertie, plus à l’aise avec les autres. </p><h3 style='text-align :left'>Compétences techniques et fonctionnelles</h3><p><li>Adopter les gestes et postures permettant de travailler en toute sécurité</li><li>Anticiper les dysfonctionnements et les changements de rythme</li><li>Appliquer les consignes d'hygiène et sécurité</li><li>Assurer la totalité d'un service en salle depuis l'arrivée du client jusqu'à son départ sans incident</li><li>Garantir la qualité du service rendu</li><li>Placer le client au centre de son activité et de sa mission</li><li>Réagir en temps réel à tout incident ou dysfonctionnement</li><li>S'organiser pour minorer les temps d'attente du client</li><li>Travailler en équipe</li><li>Veiller à la synchronisation des opérations entre cuisine et salle afin d'assurer la fluidité du service</li></p><h3 style='text-align :left'>Compétences relationnelles et comportementales</h3><p><li>Adopter en toutes circonstances, un comportement et une présentation en cohérence avec l'image de l'entreprise</li><li>Analyser rapidement le besoin du client et le conseiller dans ses choix</li><li>Exercer sa vigilance afin d'aller au-devant des attentes du client</li><li>Gérer les réclamations et les remarques négatives</li><li>Intervenir auprès du client dans les limites de ses attributions</li><li>S'adapter à la diversité des clientèles</li><li>Travailler en équipe en appliquant la hiérarchie interne</li></p> ",
    absbox: "absPopup1",
  },
  {
    title: "Stagiaire en service informatique",
    image: "assets/images/experience-page/B.png",
    place: "Brangeon Services, La Pommeraye (49)",
    time: "(Juillet 2020 - 1 mois)",
    desp: "Missions : <li>Gestion des stocks</li> <li>Standardiste téléphonique</li> <li>Préparation de postes informatiques / téléphones pour mise en service</li> <li>Gestion de bases de données</li>",
    abstract:
      "<p>Lors de ce stage d’1 mois en services informatique dans l’entreprise Brangeon Services, j’ai eu l’opportunité de développer un grand nombre de compétences.</p><p>J’ai réalisé ce stage à la fin de ma première année de cycle préparatoire, à ce moment-là mes compétences informatiques étaient assez limitées.</p><p>J’y ai notamment appris à mettre en services des appareils ; des téléphones portables, des imprimantes, des postes informatiques fixes, des PC portables ou encore des boitiers télécommandés (les B-Clic). La gestion des stocks de matériel informatique était une tâche quotidienne. On m’y a fait découvrir la gestion de bases de données ce qui m’a beaucoup plu. J’ai également pu découvrir les actions de leur pôle développement mais majoritairement en tant que spectatrice (ce qui ne m’a pas empêché d’apprendre).</p><p>En plus de mes missions informatiques, j’étais standardiste téléphonique du service informatique. Je me chargeais de tenter de résoudre les problèmes informatiques des employés du groupe Brangeon. </p><h3 style='text-align:left'>Compétences techniques et fonctionnelles</h3><p><li>Connaître un ou plusieurs domaines métiers</li><li>Installer, paramétrer et configurer des ressources informatiques</li><li>Réaliser le support de niveau 1 aux utilisateurs</li><li>Ecrire formellement un dysfonctionnement, incident ou accident</li><li>Analyser et comprendre l'origine d'un dysfonctionnement, incident ou accident (spécifications physiques du produit, processus...) </li><li>Proposer une solution permettant de résoudre le problème </li><li>Maîtriser les logiciels de bureautique (traitement de texte, tableur, présentation…)</li><li>Maîtriser des logiciels de gestion (gestion de planning, gestion des stocks) </li><li>Analyser et comprendre l'origine d'un dysfonctionnement, incident ou accident (spécifications physiques du produit, processus...) </li><li>Proposer une solution permettant de résoudre le problème</li><li>Converser en anglais en contexte professionnel</li><li>Utiliser un vocabulaire technique en anglais</li><br><h3 style='text-align:left'>Compétences relationnelles et comportementales</h3><p><li>Polyvalence, adaptabilité</li><li>Savoir travailler en équipe</li><li>Sens de l’observation et de l’écoute</li><li>Rigueur</li><li>Sens de l’analyse</li><li>Pédagogie</li></p>",
    absbox: "absPopup2",
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
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            En savoir plus
                        </button>

                        
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body just">
                            ${abstract} 
                        </div>
                    </div> 
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
