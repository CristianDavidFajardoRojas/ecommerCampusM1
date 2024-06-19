import { getAllItemsToBuy } from "./module/checkout.js";
import { productsCheckout } from "./components/cart.js";

let checkout__details = document.querySelector(".checkout__details");

addEventListener("DOMContentLoaded", async e => {
    let res = await getAllItemsToBuy();
    checkout__details.innerHTML = await productsCheckout(res);

    let product__select = document.querySelectorAll(".details__product");
    let labelItems = document.querySelector("#labelItems");
    let precioSpan = document.querySelector("#precioSpan");
    let subTotalSpan = document.querySelector("#subTotalSpan");
    let cantidadItems = 0;
    let totalProducts = 0;

    product__select.forEach(productSelect =>{
        let minusButton = productSelect.querySelector('#minusCheck');
        let plusButton = productSelect.querySelector('#plusCheck');
        let quantitySpan = productSelect.querySelector('#spanCheck');
        let precio_Producto = productSelect.querySelector("#precio_Producto");
        let photoForDelete = productSelect.querySelector("#photoForDelete");

        cantidadItems += parseInt(quantitySpan.textContent);
        totalProducts += parseFloat((precio_Producto.textContent).replace("$", ""));
        labelItems.textContent = `Total (${cantidadItems} items)`;
        precioSpan.textContent = `$${totalProducts.toFixed(2)}`;
        subTotalSpan.textContent = precioSpan.textContent; 

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
                    
                    productSelect.remove();

                    quantity = quantity - 1;
                    cantidadItems -= 1;
                    if(quantity != 0)quantitySpan.textContent = quantity;
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
    });
    
});


