const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
  // {
  //   image: "slide5.jpg",
  //   tagLine: "Haute qualité <span>avec découpe laser sur mesure</span>",
  // },
];

// Sélection des éléments de navigation du carrousel
let arrow_left = document.querySelector("#arrow_left"); // Flèche gauche
let arrow_right = document.querySelector("#arrow_right"); // Flèche droite

let tableau = 0; // Index de la diapositive actuelle
let slideshow = "./assets/images/slideshow/"; // Chemin vers le dossier contenant les images du carrousel

// ------------ GESTION DU CARROUSEL ------------ //

// Ajout d'un écouteur d'événement sur la flèche gauche
arrow_left.addEventListener("click", function () {
  console.log("La flèche gauche a été cliquée");

  // Si l'index est supérieur à 0, on décrémente l'index, sinon on passe à la dernière diapositive
  tableau = tableau > 0 ? tableau - 1 : slides.length - 1;

  initDots(); // Mise à jour des indicateurs de diapositive
  changeSlide(); // Mise à jour de la diapositive affichée
});

// Ajout d'un écouteur d'événement sur la flèche droite
arrow_right.addEventListener("click", function () {
  console.log("La flèche droite a été cliquée");

  // Si l'index est inférieur à la longueur du tableau - 1, on incrémente l'index, sinon on revient à la première diapositive
  tableau = tableau < slides.length - 1 ? tableau + 1 : 0;

  initDots(); // Mise à jour des indicateurs de diapositive
  changeSlide(); // Mise à jour de la diapositive affichée
});

// ------------ INITIALISATION DES INDICATEURS DE DIAPOSITIVES ------------ //
let dots = document.querySelectorAll(".dot"); // Sélection de tous les indicateurs de diapositive

function initDots() {
  // On retire la classe "dot_selected" de tous les indicateurs
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot_selected");
  }

  // ------------ GESTION DE L'INDICATEUR DE DIAPOSITIVE SÉLECTIONNÉ ------------ //
  // On ajoute la classe "dot_selected" à l'indicateur correspondant à la diapositive actuelle
  dots[tableau].classList.add("dot_selected");
}

// ------------ GESTION DE L'IMAGE ET DU TEXTE DE LA DIAPOSITIVE ------------ //
function changeSlide() {
  // Sélection des éléments de la diapositive
  let slideImage = document.querySelector("#banner .banner-img"); // Image de la diapositive
  let slideText = document.querySelector("#banner p"); // Texte de la diapositive

  // Mise à jour de l'image et du texte de la diapositive
  slideImage.src = `${slideshow}/${slides[tableau].image}`;
  slideText.innerHTML = `${slides[tableau].tagLine}`;
}
