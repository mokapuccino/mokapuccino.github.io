/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  
  {
    title:
      "Mes compétences métier",
    desp: "<p>Je n’ai pas encore d’idée exacte du métier que je souhaite exercer. Cependant, j'aimerais travailler dans l’informatique et plus particulièrement exercer un métier en lien avec l’Intelligence Artificielle ou/et le Développement Web. </p><p>Voici une liste non exhaustive des compétences nécessaires à cette évolution professionnelle. </p><p>Savoir : </p><p><li>Coder</li><li>Acquérir rapidement et de manière autonome des connaissances</li><li>Faire preuve de créativité</li><li>S’auto-former, veille permanente</li><li>S'engager et agir en autonomie</li><li>Travailler en équipe et faire partager ses connaissances</li><li>Rédiger, synthétiser des documents</li></p>",
    image: "assets/images/research-page/job.png", 
    abstract:
    "",
    absbox: "absPopup0",
  },
  {
    title: "Mes Savoirs",
    desp: "<p class='amb'><li><h5>Globaux :</h5> Pack Office, Linux, Windows</li><br><li><h5>Programmation : </h5>Python, C#, C++, C, UML, Java, LaTeX</li><br><li><h5>IA : </h5>Machine Learning, Visualisation de données, Traitement d'images, Deep Learning</li><br><li><h5>Réseau :</h5> CCNA 1 & 2, Packet Tracer</li><br><li><h5>Développement Web : </h5> HTML, CSS, Javascript</li><br><li><h5>Gestion de projet : </h5> Méthodes SCRUM / Agile</li></p><li><h5>Langues, anglais : </h5>niveau C1 (score TOEIC 960/990)</li><br><li><h5>Langues, espagnol : </h5>niveau B1 </li><br>",
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
