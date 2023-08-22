// here we are looping through an array of objects 
//and for each object we are creating all of the html that we had before
// We are generating this html using JS
//This generates all the html for the array of objects
// created above three time because we have three objects in the array

//Also we combine all the HTML for all the products together by storing all the elements into a single string

import { cart , addToCart} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';


let productsHTML = '';

products.forEach((product) => {
  productsHTML += `  
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${formatCurrency(product.priceCents)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart"
    data-product-id="${product.id}"
    >
      Add to Cart
    </button>
  </div>
  `;

});


//putting the html onto the webpage using DOM the innerHTML replaces all the html with the html written in js file.

document.querySelector('.js-products-grid').
  innerHTML = productsHTML

// This function updates the cart quantity on the website

function updateCartQuantity(){
  let cartQuantity = 0;
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
};

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click',() => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();
    // Here we calculate cart quantity looping through the cart array and 
    //saving cart quantity and displaying it onto the webpage using DOM
    
    
  });
});