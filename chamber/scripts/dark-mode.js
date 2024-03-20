const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("body");
const header = document.querySelector("header");
const hamburger = document.querySelector(".main-nav-toggle");

modeButton.addEventListener("click", () => {
  if (modeButton.checked) {
    main.style.background = "#000";
    main.style.color = "#fff";
    header.style.background = "#000";
    header.style.color = "#fff";
    hamburger.classList.add("main-nav-toggle-white");
  } else {
    main.style.background = "#FFFFFF";
    main.style.color = "#000";
    header.style.background = "#e1a084";
    header.style.color = "#000";
    hamburger.style.borderColor = "#000";
    hamburger.classList.remove("main-nav-toggle-white");
  }
});
