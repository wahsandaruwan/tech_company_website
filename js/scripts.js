// -------------Menu toggle-------------
const navbar = document.querySelector(".header .navbar");
const showMenuBtn = document.querySelector("#open-menu-btn");
const hideMenuBtn = document.querySelector("#close-menu-btn");

showMenuBtn.addEventListener("click", () => {
  navbar.classList.add("show-menu");
  showMenuBtn.classList.add("hide-menu-btn");
  hideMenuBtn.classList.add("show-menu-btn");
});

hideMenuBtn.addEventListener("click", () => {
  navbar.classList.remove("show-menu");
  hideMenuBtn.classList.remove("show-menu-btn");
  showMenuBtn.classList.remove("hide-menu-btn");
});
