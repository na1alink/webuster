import "../assets/scss/main.scss";

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

document
  .querySelector(".menu__link-close__img")
  .addEventListener("click", function (e) {
    e.preventDefault();
    closeMenu();
  });

$(document).ready(function () {
  $(".phonemask").inputmask({ mask: "+7 (9 9 9) 9 9 9 9 9-9 9" });
});
