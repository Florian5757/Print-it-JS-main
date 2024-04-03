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

let arrow_left = document.querySelector("#arrow_left");
let arrow_right = document.querySelector("#arrow_right");
let tableau = 0;
let slideshow = "./assets/images/slideshow/";

// ------------ GESTION CAROUSSEL ------------ //

arrow_left.addEventListener("click", function () {
  console.log("La flèche gauche a été cliquée");

  tableau = tableau > 0 ? tableau - 1 : slides.length - 1;
  initDots();
  changeSlide();
});

arrow_right.addEventListener("click", function () {
  console.log("La flèche droite a été cliquée");

  tableau = tableau < slides.length - 1 ? tableau + 1 : 0;
  initDots();
  changeSlide();
});

// ------------ INIT DOTS ------------ //
let dots = document.querySelectorAll(".dot");

function initDots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot_selected");
  }

  // ------------ GESTION DOT_SELECTED ------------ //
  dots[tableau].classList.add("dot_selected");
}

// ------------ GESTION IMAGE ET TEXTE ------------ //
function changeSlide() {
  let slideImage = document.querySelector("#banner .banner-img");
  let slideText = document.querySelector("#banner p");

  slideImage.src = `${slideshow}/${slides[tableau].image}`;
  slideText.innerHTML = `${slides[tableau].tagLine}`;
}
