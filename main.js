const menuEmail = document.querySelector('.navbar-email');/*A donde daremos click*/
const desktopMenu = document.querySelector('.desktop-menu');/*Lo que aparece*/
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isCarritoAside = shoppingCartContainer.classList.contains('inactive');

    if(!isCarritoAside){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    /*Para el elemento HTML que tiene la clase .desktop-menu, pondremos/quitaremos la clase inactive, dependiendo de si la tiene o no.*/

}

function toggleMobileMenu(){
    const isCarritoAside = shoppingCartContainer.classList.contains('inactive');

    if(!isCarritoAside){
        shoppingCartContainer.classList.add('inactive');
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

    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Scooter',
    price: 130,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Longboard',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


/*Crearemos esta estructura HTML con JS, para que cada vez que registremos un producto, se agregue automaticamente desde la base de datos y sea dinamico*/
/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="product-img">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */



function renderProducts(arr){
/*Haremos una iteracion de cada uno de nuestros productos y por cada producto estaremos maquetando una nueva estructura HTML, cada producto tendrá datos distintos que se iran agregando dinamicamente a medida que se cree cada producto.*/
for (product of arr){
    // 'product' es cada uno de los objetos que tengamos en nuestro array productList(ahora arr)
    // of: nos da el elemento del array
    // in: nos da el indice del elemento del array

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);

}
}

renderProducts(productList);