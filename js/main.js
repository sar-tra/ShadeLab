let cart = JSON.parse(localStorage.getItem('cart')) || [];

const addButtons = document.querySelectorAll('.add-cart');

//UPPDATE ICON NUMBER
function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTotal = document.getElementById("cart-count");

    if (!cartTotal) return;
   
    let totalQuantity = 0;
    cart.forEach(item => {
        totalQuantity += item.quantity;
    });

    cartTotal.textContent = totalQuantity;
}

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        const product = {
            name: button.dataset.name,
            price: parseFloat(button.dataset.price),
            image: button.dataset.image
        }
        //Check if item already exists in cart
        const existingItem = cart.find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity +=1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }
       
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(product.name + " " + "added to cart!");
        updateCartTotal();
    });
});

updateCartTotal();
