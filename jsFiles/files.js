let icon = document.getElementById("moon");

icon.onclick = () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "/images/sun.jpg";
  } else {
    icon.src = "/images/dark moon.jpg";
  }
};

const contactBtn = document.getElementById("contact");

contactBtn.addEventListener("click", () => {
  const contactMe = document.getElementById("contactMe");
  if (contactMe.classList.contains("d-none")) {
    contactMe.classList.remove("d-none");
  } else {
    contactMe.classList.add("d-none");
  }
});

let menu = document.getElementById("menu");
menu.addEventListener("click", () => {
  let dropMenu = document.getElementById("right");
  if (dropMenu.classList.contains("d-none")) {
    dropMenu.classList.remove("d-none");
  } else {
    dropMenu.classList.add("d-none");
  }
});

let project = document.getElementById("mid");
project.addEventListener("click", () => {
  let proDrop = document.getElementById("project");
  if (proDrop.classList.contains("d-none")) {
    proDrop.classList.remove("d-none");
  } else {
    proDrop.classList.add("d-none");
  }
});
let navList = document.getElementById("right");
if (window.innerWidth < 768) {
  navList.classList.add("d-none");
}
if (window.innerWidth > 768) {
  navList.classList.remove("d-none");
}
