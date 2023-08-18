function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



var loader=document.getElementById("preloader");
const loadout = setTimeout(()=>{
  loader.style.display="none";
  document.body.style.overflow="unset";
}, 4000);
