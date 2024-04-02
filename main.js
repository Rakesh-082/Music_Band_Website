import slider from "./js/slider.js";
slider();
import player from "./js/player.js";
player();
import accordion from "./js/accordion.js";
accordion();
import up from "./js/up.js";
up();


// Get all cart icons
const cartIcons = document.querySelectorAll('.fa-cart-shopping');

// Function to handle adding items to the cart
function addToCart(event) {
    // Prevent default action
    event.preventDefault();

    // Get the parent element of the clicked cart icon
    const cardElement = event.target.closest('.wrapper__cards__card');

    // Get the details of the item (e.g., name, price)
    const itemName = cardElement.querySelector('h2').innerText;
    const itemPrice = cardElement.querySelector('h3').innerText;

    // Here, you can implement the logic to add the item to the cart
    // For demonstration purposes, let's just log the item details
    console.log(`Item added to cart: ${itemName} - ${itemPrice}`);
}

// Add click event listener to each cart icon
cartIcons.forEach(cartIcon => {
    cartIcon.addEventListener('click', addToCart);
});
