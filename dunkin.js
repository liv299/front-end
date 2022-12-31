console.log('js gekoppeld');


// Hamburger menu
/* variabele */
var menuButton = document.querySelector('header article:first-child button:first-child');

var sluitButton = document.querySelector('header section article:nth-child(2) nav img:first-child');

var navEl = document.querySelector('header article:nth-child(2)');

/* eventListener */
menuButton.addEventListener('click', openMenu);

sluitButton.addEventListener('click', sluitMenu);

/* funtcion */
function openMenu() {
  navEl.classList.toggle('openMenu');
}

function sluitMenu() {
  navEl.classList.remove('openMenu');
}
