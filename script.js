let headerAnchorTag = document.getElementsByTagName("a");
let headerBurgerMenu = document.getElementById("navi-toggle");

headerAnchorTag[0].addEventListener("click", () => {
  headerBurgerMenu.checked = false;
});
headerAnchorTag[1].addEventListener("click", () => {
  headerBurgerMenu.checked = false;
});
headerAnchorTag[2].addEventListener("click", () => {
  headerBurgerMenu.checked = false;
});


document.addEventListener("DOMContentLoaded", function () {
  const scrollImages = document.querySelector(".stories-middle-wrapper");
  const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
  const leftButton = document.querySelector(".left-arrow-container");
  const rightButton = document.querySelector(".right-arrow-container");

  function checkScroll() {
    const currentScroll = scrollImages.scrollLeft;
    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      rightButton.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
      rightButton.setAttribute("disabled", "true");
      leftButton.removeAttribute("disabled");
    } else {
      leftButton.removeAttribute("disabled");
      rightButton.removeAttribute("disabled");
    }
  }

  scrollImages.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  function leftScroll() {
    scrollImages.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  }

  function rightScroll() {
    console.log(scrollImages)
    scrollImages.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});
