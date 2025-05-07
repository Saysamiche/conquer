const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const navBar = document.getElementById("navigation");

openMenu.addEventListener("click", () => {
  navBar.classList.add("menu");
  openMenu.classList.add("open");
  closeMenu.classList.add("close");
});

closeMenu.addEventListener("click", () => {
  navBar.classList.remove("menu");
  openMenu.classList.remove("open");
  closeMenu.classList.remove("close");
});
