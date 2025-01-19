// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.previousElementSibling.previousElementSibling.textContent;
            alert(`${productName} has been added to your cart.`);
        });
    });
});
