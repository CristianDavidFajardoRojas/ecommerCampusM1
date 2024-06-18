import { getAllItemsToBuy } from "./module/checkout.js";
import { productsCheckout } from "./components/cart.js";

let checkout__details = document.querySelector(".checkout__details");

addEventListener("DOMContentLoaded", async e => {
    let res = await getAllItemsToBuy();
    checkout__details.innerHTML = await productsCheckout(res);

    let product__select = document.querySelectorAll(".product__select");

    product__select.forEach(productSelect =>{
        let minusButton = productSelect.querySelector('#minusCheck');
        let plusButton = productSelect.querySelector('#plusCheck');
        let quantitySpan = productSelect.querySelector('#spanCheck');

        minusButton.addEventListener('click', e=>{
            let quantity = parseInt(quantitySpan.textContent);
            if(quantity > 1){quantity = quantity - 1};
            quantitySpan.textContent = quantity;
        });

        plusButton.addEventListener('click', e=>{
            let quantity = parseInt(quantitySpan.textContent);
            quantitySpan.textContent = quantity + 1;
        });
    });
});


