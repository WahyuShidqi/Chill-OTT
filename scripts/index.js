let dropdown = document.querySelector("#nav-dropdown");
let dropdownMenu = document.querySelector(".dropdown-menu");

function dropDownToggle() {
  dropdown.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown-btn") && !event.target.matches(".dd")) {
    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
    }
  }
};
