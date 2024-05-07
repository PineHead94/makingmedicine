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
