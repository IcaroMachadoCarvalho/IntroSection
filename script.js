document.addEventListener("DOMContentLoaded", () => {
  // Menu items
  const openMenu = document.querySelector(".header__menu");
  const sideNav = document.querySelector(".header__options");
  const closeMenu = document.querySelector(".header__close");
  const backGround = document.querySelector(".background");
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
  openMenu.addEventListener("click", () => {
    sideNav.style.display = "flex";
    sideNav.style.right = "0%";
    sideNav.style.height = `${document.body.scrollHeight}px`;
    openMenu.style.display = "flex";
    closeMenu.style.display = "block";
    closeMenu.style.visibility = "visible";
    backGround.style.height = `${document.body.scrollHeight}px`;
    backGround.style.display = "inline-block";
    backGround.style.visibility = "visible";
  });

  closeMenu.addEventListener("click", () => {
    sideNav.style.right = "-60%";
    closeMenu.style.visibility = "none";
    backGround.style.display = "none";
    backGround.style.visibility = "hidden";
    openMenu.style.display = "block";
  });
  // }

  const selectMainImg = () => {
    const mainImg = document.querySelector(".main__img");
    if (window.innerWidth > 768) {
      mainImg.src = "./src/assets/icons/image-hero-desktop.png";
    } else {
      mainImg.src = "./src/assets/icons/image-hero-mobile.png";
    }
  };

  // Check if the user is on desktop screen
  window.addEventListener("resize", verify);
  function verify() {
    // console.log(document.body.clientWidth);
    selectMainImg();

    if (document.body.clientWidth <= 768) {
      sideNav.style.right = "-60%";
      sideNav.style.position = "fixed";
      openMenu.style.display = "block";
      openMenu.style.opacity = "1";
      closeMenu.style.display = "block";
      backGround.style.visibility = "hidden";
    }
    else { // Desktop
      sideNav.style.right = "0%";
      sideNav.style.position = "relative";
      sideNav.style.height = "auto";
      sideNav.style.opacity = "1";
      openMenu.style.display = "none";
      closeMenu.style.display = "none";
      backGround.style.visibility = "hidden";
    }
  }

  selectMainImg();
});
