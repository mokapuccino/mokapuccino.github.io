/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "ANT, Accessibilité Numérique pour Tous",
    subtitle: "Centre Communal d'Actions Sociales Village Pierre Rabhi, Saint-Barthélemy-d'Anjou (49)",
    image: "assets/images/experience-page/ANTB1.png",
    desp: "Création et animation de cours d'informatique au sein du club ANT. Je suis responsable de la communication interne du club.",
    abstract:
      "<br><p>Mes missions au sein du club ANT sont nombreuses et variées :<li>Création de fiches et vidéos explicatives</li><li>Animation de cours d'informatique à destination de personnes âgées</li><li>Gestion du club en tant que responsable communication interne</li></p><p> J'ai intégré ce club en septembre 2019, au départ comme simple membre active mais j'ai rapidement intégré le bureau. Aujourd'hui je m'occupe de la communication interne. </p><p>Réaliser des plannings de tous types, échanger avec les membres du club pour trouver des volontaires pour donner cours, m'assurer que tous les documents nécessaire au bon déroulé des cours soient disponibles, ... Sont quelques unes de mes missions de comm. interne.</p>",
    absbox: "absPopup0",
  },
  {
    title: "Coaching de Badminton",
    subtitle: "BLB Badminton, Saint Joachim (44)",
    image: "assets/images/experience-page/BLB1.png",
    desp: "Encadrement bénévole de groupes de 15-20 enfants de 8 à 14 ans dans un cadre sportif (badminton) en cours ainsi qu'en compétitions.",
    abstract:
      "<p>Je fais du badminton depuis mes 12 ans.</p><p> Le club dans lequel j’ai évolué, le BLB (Badminton Loisir Briéron), m’a laissé l’opportunité d’encadrer des groupes de jeunes à mes 16 ans. J’ai donc eu l’occasion d’entraîner ces jeunes, de les voir progresser et grandir. Je les ai également accompagnés en compétition en tant que coach, j’en garde des souvenirs impérissables.</p> ",
    absbox: "absPopup1",
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
      subtitle,
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
                    <br><br>
                    <div class="blog-slider__text" ><h5>${desp}</h5></div>
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            En savoir plus
                        </button>

                        
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="blog-slider__text just" >
                            ${abstract}    
                        </div>
                    </div> 
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);


