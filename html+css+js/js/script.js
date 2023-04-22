const dark = document.querySelector(".btn-dark-mode");
const body = document.querySelector("body");
const pg1 = document.querySelector(".pg-1");
const pg2 = document.querySelector(".pg-2");
const pg3 = document.querySelector(".pg-3");
const letras = document.querySelectorAll("li");
const button = document.querySelectorAll("button");
const login = document.querySelector(".login");
const logo = document.querySelector("#logo");
const pgh = document.querySelector(".pg-1-1");
const ptexthome = document.querySelector(".p-text-home");
const navbar = document.querySelector(".nav-bar");
const register = document.querySelector(".register");
const badage = document.querySelector(".badage");
const header = document.querySelector(".header");

dark.onclick = () => {
  dark.classList.toggle("dark");
  body.classList.toggle("dark");
  pg1.classList.toggle("dark");
  pg2.classList.toggle("dark");
  pg3.classList.toggle("dark");
  login.classList.toggle("dark");
  badage.classList.toggle("dark");
  ptexthome.classList.toggle("dark");
  pgh.classList.toggle("dark");
  register.classList.toggle("dark");
  header.classList.toggle("dark");
};
