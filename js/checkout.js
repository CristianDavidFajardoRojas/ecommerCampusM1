import { getAllItemsToBuy } from "./module/checkout.js";
import { productsCheckout } from "./components/cart.js";

let checkout__details = document.querySelector(".checkout__details");

addEventListener("DOMContentLoaded", async e => {
    let res = await getAllItemsToBuy();
    checkout__details.innerHTML = await productsCheckout(res);

    let product__select = document.querySelectorAll(".product__select");
    let cantidadItems = 0;
    let totalProducts = 0;

    product__select.forEach(productSelect =>{
        let minusButton = productSelect.querySelector('#minusCheck');
        let plusButton = productSelect.querySelector('#plusCheck');
        let quantitySpan = productSelect.querySelector('#spanCheck');
        let labelItems = document.querySelector("#labelItems");
        let precioSpan = document.querySelector("#precioSpan");
        let precio_Producto = document.querySelector("#precio_Producto");
        let subTotalSpan = document.querySelector("#subTotalSpan");
        let photoForDelete = document.querySelector("#photoForDelete");


        minusButton.addEventListener('click', e=>{
            let quantity = parseInt(quantitySpan.textContent);
            if(quantity > 1){
                quantity = quantity - 1;
                cantidadItems -= 1;
            quantitySpan.textContent = quantity;
            labelItems.textContent = `Total (${cantidadItems} items)`;
            precioSpan.textContent = `$${(Number((precioSpan.textContent).replace("$", "")) - Number((precio_Producto.textContent).replace("$", ""))).toFixed(2)}`;
            subTotalSpan.textContent = precioSpan.textContent;
        }else{
            res.forEach(dict => {
                if(dict.data.product_photo == photoForDelete.src){
                    delete dict.checkout;
                    localStorage.setItem(dict.data.asin, JSON.stringify(dict));

                    let details__product = document.querySelector(".details__product")
                    details__product.remove();

                    quantity = quantity - 1;
                    cantidadItems -= 1;
                    quantitySpan.textContent = quantity;
                    labelItems.textContent = `Total (${cantidadItems} items)`;
                    precioSpan.textContent = `$${(Number((precioSpan.textContent).replace("$", "")) - Number((precio_Producto.textContent).replace("$", ""))).toFixed(2)}`;
                    subTotalSpan.textContent = precioSpan.textContent;
                };
            })
            
        }
        });

        plusButton.addEventListener('click', e=>{
            let quantity = parseInt(quantitySpan.textContent);
            quantitySpan.textContent = quantity + 1;
            cantidadItems += 1
            labelItems.textContent = `Total (${cantidadItems} items)`
            precioSpan.textContent = `$${(Number(precioSpan.textContent.replace("$", "")) + Number((precio_Producto.textContent).replace("$", ""))).toFixed(2)}`;
            subTotalSpan.textContent = precioSpan.textContent
        }); 
        cantidadItems += parseInt(quantitySpan.textContent);
        labelItems.textContent = `Total (${cantidadItems} items)`;
        totalProducts += parseFloat((precio_Producto.textContent).replace("$", ""));
        precioSpan.textContent = `$${totalProducts}`;
        subTotalSpan.textContent = precioSpan.textContent;


    });
});


