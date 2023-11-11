const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    /*Para el elemento HTML que tiene la clase .desktop-menu, pondremos/quitaremos la clase inactive, dependiendo de si la tiene o no.*/

}