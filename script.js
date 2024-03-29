// Menu items
const openMenu = document.getElementsByClassName("header__menu")[0];
const sideNav = document.getElementsByClassName("header__options")[0];
const closeMenu = document.getElementsByClassName("header__close")[0];
const backGround = document.getElementsByClassName("background")[0];
// Dropdowns
const featuresHover = document.getElementById("features");
const companyHover = document.getElementById("company");

// Mouse over on features dropdown changes the icon
featuresHover.addEventListener("mouseover", () => {
  document.getElementById("featuresIcon").src =
    "./src/assets/icons/icon-arrow-up.svg";
});

featuresHover.addEventListener("mouseout", () => {
  document.getElementById("featuresIcon").src =
    "./src/assets/icons/icon-arrow-down.svg";
});

// Mouse over on company dropdown changes the icon
companyHover.addEventListener("mouseover", () => {
  document.getElementById("companyIcon").src =
    "./src/assets/icons/icon-arrow-up.svg";
});

companyHover.addEventListener("mouseout", () => {
  document.getElementById("companyIcon").src =
    "./src/assets/icons/icon-arrow-down.svg";
});

// Check if the user is on mobile screen
if (window.innerWidth <= 809) {
  openMenu.addEventListener("click", () => {
    sideNav.style.width = "50%";
    closeMenu.style.display = "block";
    closeMenu.style.visibility = "visible";
    backGround.style.display = "block";
    backGround.style.visibility = "visible";
  });

  closeMenu.addEventListener("click", () => {
    sideNav.style.width = "0px";
    closeMenu.style.visibility = "hidden";
    backGround.style.display = "none";
    backGround.style.visibility = "hidden";
  });
}
// Check if the user is on desktop screen
window.addEventListener("resize", verify);
function verify() {
  if (window.innerWidth > 809) {
    sideNav.style.display = "flex";
    sideNav.style.width = "90%";
    openMenu.style.display = "none";
    closeMenu.style.display = "none";
    backGround.style.visibility = "hidden";
  } else if (sideNav.style.width === "90%") {
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    sideNav.style.display = "flex";
    sideNav.style.width = "0";
  } else {
    openMenu.addEventListener("click", () => {
      sideNav.style.visibility = "visible";
      sideNav.style.width = "50%";
      closeMenu.style.display = "block";
      closeMenu.style.visibility = "visible";
      backGround.style.display = "block";
      backGround.style.visibility = "visible";
    });

    closeMenu.addEventListener("click", () => {
      sideNav.style.width = "0px";
      closeMenu.style.visibility = "hidden";
      backGround.style.display = "none";
      backGround.style.visibility = "hidden";
    });
  }
}
