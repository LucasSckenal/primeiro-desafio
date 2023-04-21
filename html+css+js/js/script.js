const dark = document.querySelector(".btn-dark-mode");
const body = document.querySelector("body");
const pg1 = document.querySelector(".pg-1");
const pg2 = document.querySelector(".pg-2");
const pg3 = document.querySelector(".pg-3");
const letras = document.querySelectorAll("li");
const a = document.querySelectorAll("a");
const button = document.querySelectorAll("button");
const login = document.querySelector(".login");
const logo = document.querySelector("#logo");
const h1 = document.querySelectorAll("h1");
const badage = document.querySelector(".badage");
const ptexthome = document.querySelector(".p-text-home");
const prod = document.querySelectorAll(".prod");
const bolck = document.querySelector(".block");
const boxpg3 = document.querySelector(".box-pg3");
const finalcard = document.querySelector(".final-card");
const texthome = document.querySelector(".texthome");
const na = document.querySelectorAll(".a-1");
const navbar = document.querySelector(".nav-bar");
const header = document.querySelector("header");
const pgh = document.querySelector(".pg-1-1");

dark.onclick = () => {
  dark.classList.toggle("dark");
  body.classList.toggle("dark");
  pg1.classList.toggle("dark");
  pg2.classList.toggle("dark");
  pg3.classList.toggle("dark");
  login.classList.toggle("dark");
  badage.classList.toggle("dark");
  ptexthome.classList.toggle("dark");
  bolck.classList.toggle("dark");
  boxpg3.classList.toggle("dark");
  finalcard.classList.toggle("dark");
  texthome.classList.toggle("dark");
  navbar.classList.toggle("dark");
  header.classList.toggle("dark");
  pgh.classList.toggle("dark");

  h1.forEach((element) => element.classList.toggle("dark"));
  letras.forEach((element) => element.classList.toggle("dark"));
  a.forEach((element) => element.classList.toggle("dark"));
  button.forEach((element) => element.classList.toggle("dark"));
  prod.forEach((element) => element.classList.toggle("dark"));
  na.forEach((element) => element.classList.toggle("dark"));
};

dark.addEventListener("click", function () {
  dark.classList.toggle("change-icon");
});
