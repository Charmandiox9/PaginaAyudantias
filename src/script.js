// Swiper 1
var swiper1 = new Swiper(".mySwiper-1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", // Corregido
    prevEl: ".swiper-button-prev", // Corregido
  },
});

// Swiper 2
var swiper2 = new Swiper(".mySwiper-2", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next", // Corregido
    prevEl: ".swiper-button-prev", // Corregido
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// Funcionalidad de los Tabs
let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    let id = input.value; // Corregido: Uso del valor del input para obtener el id
    let thisSwiper = document.getElementById("swiper" + id).swiper;
    thisSwiper.update();
  });
});
