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
headerAnchorTag[3].addEventListener("click", () => {
  headerBurgerMenu.checked = false;
});


const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');
// const cursorPointed = document.querySelector('.test-cursor');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor)