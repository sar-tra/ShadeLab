let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-container");
const totalPriceElement = document.getElementById("cart-total");
const emptyCartMessage = document.querySelector(".empty-cart");
const cartCount = document.getElementById("cart-count");

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
// display cart items
function displayCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        emptyCartMessage.style.display = "block";
        totalPriceElement.textContent = "0.00";
        updateCartTotal();
        return;
    }

    emptyCartMessage.style.display = "none";

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        itemDiv.innerHTML = `
            <img  class="cart-image" src="${item.image}">
            <div class="cart-details">
            <p>${item.name} - $${item.price}</p>
          <div class="cart-actions">
            <button onclick="decreaseItem(${index})">-</button>
            <span> ${item.quantity} </span>
            <button onclick="increaseItem(${index})">+</button>
        
              </div>
                  <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
              </div>
        `;
        cartContainer.appendChild(itemDiv);
    });
    
    totalPriceElement.textContent = total.toFixed(2);
    updateCartTotal();
}

// INCREASE, DECREASE, AND REMOVE ITEMS
function increaseItem(index) {
    cart[index].quantity ++ ;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();

}

function decreaseItem(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -- ;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();

}

function removeItem(index){
    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();

}
displayCart();
updateCartTotal();
