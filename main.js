const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    /*Para el elemento HTML que tiene la clase .desktop-menu, pondremos/quitaremos la clase inactive, dependiendo de si la tiene o no.*/

}

function toggleMobileMenu(){
    console.log("probando");
    mobileMenu.classList.toggle('inactive');
}