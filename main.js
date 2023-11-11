const menuEmail = document.querySelector('.navbar-email');/*A donde daremos click*/
const desktopMenu = document.querySelector('.desktop-menu');/*Lo que aparece*/
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
    const isCarritoAside = aside.classList.contains('inactive');

    if(!isCarritoAside){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    /*Para el elemento HTML que tiene la clase .desktop-menu, pondremos/quitaremos la clase inactive, dependiendo de si la tiene o no.*/

}

function toggleMobileMenu(){
    const isCarritoAside = aside.classList.contains('inactive');

    if(!isCarritoAside){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    /*Cada que querramos abrir el carrito, si le damos click, vamos a cerrar el menuMobile*/
    if(!isMobileMenuClosed){
        /*Si el menuMobile no contiene la clase inactive, es decir que esta activo y se muestra en pantalla,esta condicional agregará en automatico la clase inactive para que se cierre. Y solamente se muestre el carrito aside*/
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }


    aside.classList.toggle('inactive');

   
    
}