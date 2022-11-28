AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Activ'ESAIP",
    type: "ESAIP, Professionnel",
    date: "en cours",
    cardImage: "assets/images/project-page/D4G.jpg",
    desp: "Réalisation d'un projet au sein d'une entreprise, pour cette entreprise.",
    
  },
  {
    title: "Design4Green 2022",
    type: "ESAIP - Site Web",
    date: "2022",
    cardImage: "assets/images/project-page/D4GL.jpg",
    desp: "Challenge de codage responsable durant 48H non-stop. L'objectif est la création d'un site éco-conçu.",
    
  },
  {
    title: "Design4Green 2021",
    type: "ESAIP - Site Web",
    date: "2022",
    cardImage: "assets/images/project-page/D4GL.jpg",
    desp: "Sujet du D4G 2021 réalisé en préparation au D4G 2022, l'objectif est la création d'un site éco-conçu.",
    
  },
  {
    title: "Software Project",
    type: "Finlande - Application",
    date: "2022",
    cardImage: "assets/images/project-page/STL.png",
    desp: "Création d'une application mobile de planification permettant aux professeurs/élèves de réserver des salles pour programmer des meetings.",
    
  },
  {
    title: "Embedded Project ",
    type: "Finlande - Syst. embarqués",
    date: "2022",
    cardImage: "assets/images/project-page/prop.jpg",
    desp:
      "Création d'un LED propeller display, un dispositif d'hélice tournante à LED permettant d'afficher un texte.",
    
  },
  {
    title: "Ecommerce Project",
    type: "Finlande - Ecommerce, Web design",
    date: "2022",
    cardImage: "assets/images/project-page/LHDFH.png",
    desp:
      "Création d'un site web commercial (vente de meubles et mobilier de maison) nommé HFD Housing avec WordPress.",
    
  },
  {
    title: "Blog Finlande",
    type: "ESAIP - Site Web",
    date: "2022",
    cardImage: "assets/images/project-page/BFI.jpg",
    desp: "Création d'un blog racontant les aventures de mon groupe d'amis en Finlande.",
    
  },
  
  {
    title: "Citadelles",
    type: "ESAIP - Jeu vidéo",
    date: "2021",
    cardImage: "assets/images/project-page/citadelles.jpg",
    desp: "Création d'un jeu vidéo reprenant le jeu de plateau Citadelles en Java.",
    
  },
  {
    title: "Squid Game",
    type: "ESAIP - Site Web",
    date: "2020",
    cardImage: "assets/images/project-page/SG.jpg",
    desp: "Creation d'un site web sur un sujet libre, j'ai choisi Squid Game la série coréenne au succès mondial.",
    
  },
  {
    title: "Projet sciences 4",
    type: "ESAIP - Modelisation",
    date: "2021",
    cardImage: "assets/images/project-page/TH.png",
    desp: "Modélisation de la Dover House, une maison solaire dessinée par Maria Telkes en 1948 sur Blender.",
    
  },
  {
    title: "Projet sciences 3",
    type: "ESAIP - Modelisation",
    date: "2020",
    cardImage: "assets/images/project-page/PS3.jpg",
    desp: "Modélisation de la déformation de l'espace temps. Etude de l'influence de la gravitation dans l'univers.",
    
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, date, desp, type}) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
                <div class="type" >${type} - ${date}</div>
                <div class="txt">${desp}</div>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
