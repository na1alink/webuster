import "../scss/main.scss";

import Inputmask from "inputmask";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import $ from "jquery";

import "owl.carousel";

$(document).ready(function () {
  var owl = $(".manufacturers__carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      320: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  $(".manufacturers__carousel-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".manufacturers__carousel-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

function closeMenu() {
  const burger = document.querySelector(".burger");
  const headerMenu = document.querySelector(".header__menu");
  const body = document.body;
  const menuOverlay = document.querySelector(".menu-overlay");

  burger.classList.remove("active");
  headerMenu.classList.remove("active");
  body.style.overflowY = "auto";
  menuOverlay.classList.remove("visible");
}

document.querySelector(".burger").addEventListener("click", function () {
  const burger = this;
  const headerMenu = document.querySelector(".header__menu");
  const body = document.body;
  const menuOverlay = document.querySelector(".menu-overlay");

  burger.classList.toggle("active");
  headerMenu.classList.toggle("active");

  if (burger.classList.contains("active")) {
    body.style.overflowY = "hidden";
    menuOverlay.classList.add("visible");
  } else {
    body.style.overflowY = "auto";
    menuOverlay.classList.remove("visible");
  }
});

document.querySelector(".menu-overlay").addEventListener("click", function (e) {
  const headerMenu = document.querySelector(".header__menu");
  if (!e.target.closest(".header__menu")) {
    closeMenu();
  }
});

const im = new Inputmask({ mask: "+7 (9 9 9) 9 9 9 9 9-9 9" });
im.mask(document.querySelectorAll(".phonemask"));
