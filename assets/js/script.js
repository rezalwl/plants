const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
const navMenu = document.querySelector("#nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
  