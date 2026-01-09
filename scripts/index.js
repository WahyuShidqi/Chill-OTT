let dropdown = document.querySelector("#nav-dropdown");
let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownBtn = document.querySelector(".dropdown-btn");

function dropDownToggle() {
  dropdown.classList.toggle("show");
  dropdownBtn.classList.toggle("rotate-up");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown-btn") && !event.target.matches(".dd")) {
    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");

      if (dropdownBtn.classList.contains("rotate-up")) {
        dropdownBtn.classList.remove("rotate-up");
      }
    }
  }
};

// dropdowm menu user's login status
const isLoggedIn = false;
let userLoginMenu = document.querySelector(".user-login-menu");

if (!isLoggedIn) {
  userLoginMenu.innerText = "Login";
} else {
  userLoginMenu.innerText = "Keluar";
}
