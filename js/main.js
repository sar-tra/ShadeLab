let cart = JSON.parse(localStorage.getItem('cart')) || [];

const addButton = document.getElementById('add');

if (addButton) {
    addButton.addEventListener('click', () => {
       
        const product = {
            name: "Burgundy Icon",
            price: 50.00
        };
        
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart!');
    });
}

function updateCartTotal() {
    const cartTotal = document.getElementById('cart-count');
    if (cartTotal) {
        cartTotal.textContent = cart.length;
    }
}

updateCartTotal();
