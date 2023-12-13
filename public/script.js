window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar2");
  if (window.scrollY > 0) {
    navbar.style.backdropFilter = "blur(20px)";
    navbar.style.border = "1px solid #e7902e";
    navbar.style.margin = "1%";
    navbar.style.opacity = "0.8";
  } else {
    navbar.style.backdropFilter = "blur(0px)";
    navbar.style.margin = "0%";
    navbar.style.border = "none";
    navbar.style.opacity = "1";
  }
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});
document.addEventListener("DOMContentLoaded", function () {
  const loadingElement = document.querySelector(".loading");
  loadingElement.style.display = "flex";
  loadingElement.classList.add("show");

  const waktuMinimumTampilan = 3000;

  setTimeout(function () {
    loadingElement.style.display = "none";
    loadingElement.classList.remove("show");
  }, waktuMinimumTampilan);
});

window.addEventListener("scroll", function () {
  var navbarV = document.getElementById("nav-home");
  var navbar = document.querySelector(".navbar .nav-home");
  var sections = document.querySelectorAll(".main-content");
  var scrollPosition = window.scrollY;

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navbarV.style.color = "#e7902e";
      navbarV.style.borderBottom = "1px solid #e7902e";
    } else {
      navbarV.style.color = "#F3F4F6";
      navbarV.style.borderBottom = "none";
    }
  });
});

window.addEventListener("scroll", function () {
  var navbarV = document.getElementById("nav-services");
  var navbar = document.querySelector(".navbar .nav-services");
  var sections = document.querySelectorAll(".services");
  var scrollPosition = window.scrollY;

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navbarV.style.color = "#e7902e";
      navbarV.style.borderBottom = "1px solid #e7902e";
    } else {
      navbarV.style.color = "#F3F4F6";
      navbarV.style.borderBottom = "none";
    }
  });
});

window.addEventListener("scroll", function () {
  var navbarV = document.getElementById("nav-palette");
  var navbar = document.querySelector(".navbar .nav-palette");
  var sections = document.querySelectorAll(".palettes");
  var scrollPosition = window.scrollY;

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navbarV.style.color = "#e7902e";
      navbarV.style.borderBottom = "1px solid #e7902e";
    } else {
      navbarV.style.color = "#F3F4F6";
      navbarV.style.borderBottom = "none";
    }
  });
});

window.addEventListener("scroll", function () {
  var navbarV = document.getElementById("nav-team");
  var navbar = document.querySelector(".navbar .nav-team");
  var sections = document.querySelectorAll(".teams");
  var scrollPosition = window.scrollY;

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navbarV.style.color = "#e7902e";
      navbarV.style.borderBottom = "1px solid #e7902e";
    } else {
      navbarV.style.color = "#F3F4F6";
      navbarV.style.borderBottom = "none";
    }
  });
});
window.addEventListener("scroll", function () {
  var navbarV = document.getElementById("nav-contact");
  var navbar = document.querySelector(".navbar .nav-contact");
  var sections = document.querySelectorAll(".contact");
  var scrollPosition = window.scrollY;

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navbarV.style.color = "#e7902e";
      navbarV.style.borderBottom = "1px solid #e7902e";
    } else {
      navbarV.style.color = "#F3F4F6";
      navbarV.style.borderBottom = "none";
    }
  });
});

const shSmp = document.getElementById("sh-smp");
const shEl = document.getElementById("sh-el");
const shTc = document.getElementById("sh-tc");
const shWt = document.getElementById("sh-wt");
const shSm = document.getElementById("sh-sm");
const shAt = document.getElementById("sh-at");
var simple = document.getElementById("simple");
var elegant = document.getElementById("elegant");
var technology = document.getElementById("technology");
var winter = document.getElementById("winter");
var summer = document.getElementById("summer");
var autumn = document.getElementById("autumn");

shSmp.addEventListener("click", function () {
  simple.style.display = "flex";
  technology.style.display = "none";
  winter.style.display = "none";
  elegant.style.display = "none";
  summer.style.display = "none";
  autumn.style.display = "none";
});

shEl.addEventListener("click", function () {
  simple.style.display = "none";
  technology.style.display = "none";
  winter.style.display = "none";
  elegant.style.display = "flex";
  summer.style.display = "none";
  autumn.style.display = "none";
});

shTc.addEventListener("click", function () {
  simple.style.display = "none";
  technology.style.display = "flex";
  winter.style.display = "none";
  elegant.style.display = "none";
  summer.style.display = "none";
  autumn.style.display = "none";
});

shWt.addEventListener("click", function () {
  simple.style.display = "none";
  technology.style.display = "none";
  winter.style.display = "flex";
  elegant.style.display = "none";
  summer.style.display = "none";
  autumn.style.display = "none";
});

shSm.addEventListener("click", function () {
  simple.style.display = "none";
  technology.style.display = "none";
  winter.style.display = "none";
  elegant.style.display = "none";
  summer.style.display = "flex";
  autumn.style.display = "none";
});

shAt.addEventListener("click", function () {
  simple.style.display = "none";
  technology.style.display = "none";
  winter.style.display = "none";
  elegant.style.display = "none";
  summer.style.display = "none";
  autumn.style.display = "flex";
});
