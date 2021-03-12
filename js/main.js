const menu = document.getElementById('menu');
const mobileNav = document.getElementById('mobileNav');


menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  mobileNav.classList.toggle('in')
})