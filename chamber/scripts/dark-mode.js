const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("main");
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
    main.style.background = "#a37c40";
    main.style.color = "#000";
    header.style.background = "#98473e";
    hamburger.style.borderColor = "#000";
    hamburger.classList.remove("main-nav-toggle-white");
  }
});
