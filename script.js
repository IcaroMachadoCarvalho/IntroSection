const openMenu = document.getElementsByClassName("header__menu")[0];
const sideNav = document.getElementsByClassName("header__options")[0];
const closeMenu = document.getElementsByClassName("header__close")[0];
const backGround = document.getElementsByClassName("background")[0];

const featuresHover = document.getElementById("features");
const companyHover = document.getElementById("company");

featuresHover.addEventListener("mouseover", () => {
  document.getElementById("featuresIcon").src =
    "./src/assets/icons/icon-arrow-up.svg";
});

featuresHover.addEventListener("mouseout", () => {
  document.getElementById("featuresIcon").src =
    "./src/assets/icons/icon-arrow-down.svg";
});

companyHover.addEventListener("mouseover", () => {
  document.getElementById("companyIcon").src =
    "./src/assets/icons/icon-arrow-up.svg";
});

companyHover.addEventListener("mouseout", () => {
  document.getElementById("companyIcon").src =
    "./src/assets/icons/icon-arrow-down.svg";
});

if (window.innerWidth <= 809) {
  openMenu.addEventListener("click", () => {
    // console.log("Abre");
    sideNav.style.width = "50%";
    closeMenu.style.display = "block";
    closeMenu.style.visibility = "visible";
    backGround.style.display = "block";
    backGround.style.visibility = "visible";
  });

  closeMenu.addEventListener("click", () => {
    // console.log("Fecha");
    sideNav.style.width = "0px";
    closeMenu.style.visibility = "hidden";
    backGround.style.display = "none";
    backGround.style.visibility = "hidden";
  });
}

window.addEventListener("resize", verificar);
function verificar() {
  // console.log(window.innerWidth);
  if (window.innerWidth > 809) {
    // sideNav.style.backGround = "visible";
    sideNav.style.display = "flex";
    sideNav.style.width = "90%";
    openMenu.style.display = "none";
    closeMenu.style.display = "none";
    backGround.style.visibility = "hidden";
  } else if (sideNav.style.width === "90%") {
    // sideNav.style.visibility = "hidden";
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
