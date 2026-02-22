let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-container");
const totalPriceElement = document.getElementById("cart-total");
const emptyCartMessage = document.querySelector(".empty-cart");

function displayCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        emptyCartMessage.style.display = "block";
        totalPriceElement.textContent = "0.00";
        return;
    }

    emptyCartMessage.style.display = "none";

    cart.forEach((item, index) => {
        total += item.price;

        const itemDiv = document.createElement("div");

        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price}</p>
           <button onclick="removeItem(${index})">Remove</button>
        `;
        cartContainer.appendChild(itemDiv);
    });
    
    totalPriceElement.textContent = total.toFixed(2);
}

function removeItem(index){
    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();

}
displayCart();
