const navLink = document.getElementById ('navLink');

const CloseMenu = e => {
  navLink.style.right = '-200px';
};
const closeMenu = document.getElementById ('closeMenu');
closeMenu.addEventListener ('click', CloseMenu);

const showMenu = document.getElementById ('showMenu');
showMenu.addEventListener ('click', ShowMenu);

function ShowMenu () {
  navLink.style.right = '0';
}
