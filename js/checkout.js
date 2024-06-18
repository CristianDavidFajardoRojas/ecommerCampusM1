import { getAllItemsToBuy } from "./module/checkout.js";
import { productsCheckout } from "./components/cart.js";

let checkout__details = document.querySelector(".checkout__details");

addEventListener("DOMContentLoaded", async e => {
    let res = await getAllItemsToBuy();
    checkout__details.innerHTML = await productsCheckout(res);

    let product__select = document.querySelectorAll(".product__select");
    let cantidadItems = 0;
    let valorEnvio = 0;
    let subTotal = 0;

    product__select.forEach(productSelect =>{
        let minusButton = productSelect.querySelector('#minusCheck');
        let plusButton = productSelect.querySelector('#plusCheck');
        let quantitySpan = productSelect.querySelector('#spanCheck');
        let labelItems = document.querySelector("#labelItems");

        minusButton.addEventListener('click', e=>{
            let quantity = parseInt(quantitySpan.textContent);
            if(quantity > 1){
                quantity = quantity - 1;
                cantidadItems -= 1};
            quantitySpan.textContent = quantity;
            labelItems.textContent = `Total (${cantidadItems} items)`
        });

        plusButton.addEventListener('click', e=>{
            let quantity = parseInt(quantitySpan.textContent);
            quantitySpan.textContent = quantity + 1;
            cantidadItems += 1
            labelItems.textContent = `Total (${cantidadItems} items)`
        }); 
        cantidadItems += parseInt(quantitySpan.textContent);
        labelItems.textContent = `Total (${cantidadItems} items)`  
    });
});


