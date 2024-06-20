import { galleryCategory } from "./components/gallery.js";
import { titleProductDetail } from "./components/section.js";
import { getProductId } from "./module/detail.js";
import { descriptionDetails } from "./components/description.js";
import { footer_price } from "./components/footer.js";

let main__section_gallery = document.querySelector("#main__section__gallery");
let main__section__title = document.querySelector("#main__section__title");
let main__section__description = document.querySelector("#main__section__description");
let footer__details = document.querySelector("#footer__details");


addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductId({id})));
    
    let info = JSON.parse(localStorage.getItem(id));
    main__section_gallery.innerHTML = await galleryCategory(info);
    main__section__title.innerHTML = await titleProductDetail(info);
    main__section__description.innerHTML = await descriptionDetails(info);
    footer__details.innerHTML = await footer_price(info);
    

    let decreaseButton = document.querySelector("#decreaseQuantity");
    let increaseButton = document.querySelector("#increaseQuantity");
    let quantitySpan = document.querySelector("#quantity");
    
    decreaseButton.addEventListener('click', async e => {
        let price_discount = document.querySelector("#price_discount");
    let price_original = document.querySelector("#price_original");
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    let res = JSON.parse(localStorage.getItem(id)).data;

    let product_original_price = undefined;
    if(res.product_original_price) product_original_price = Number(res.product_original_price.replace("$", ""));
    let product_price= Number(res.product_price.replace("$", ""));

    let quantity = parseInt(quantitySpan.textContent);
    if(quantity > 1){
        quantitySpan.textContent = quantity - 1;
    };

    price_discount.innerHTML = `$${(product_price * Number(quantitySpan.innerHTML)).toFixed(2)}`;
    if(product_original_price) price_original.innerHTML = `$${(product_original_price * Number(quantitySpan.innerHTML)).toFixed(2)}`;
    });
    
    increaseButton.addEventListener('click', async e => {
    let price_discount = document.querySelector("#price_discount");
    let price_original = document.querySelector("#price_original");
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    let res = JSON.parse(localStorage.getItem(id)).data;

    let product_original_price = undefined;
    if(res.product_original_price) product_original_price = Number(res.product_original_price.replace("$", ""));
    let product_price= Number(res.product_price.replace("$", ""));
    
    let quantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = quantity + 1;

    price_discount.innerHTML = `$${(product_price * Number(quantitySpan.innerHTML)).toFixed(2)}`;
    if(product_original_price) price_original.innerHTML = `$${(product_original_price * Number(quantitySpan.innerHTML)).toFixed(2)}`;
    });

    let LeerMasButton = document.querySelector("#leerMasOption");
    let informationProduct = document.querySelector("#informationProduct")

    if(LeerMasButton){
        LeerMasButton.addEventListener('click', async e => {
            let description = info.data.product_description;
            informationProduct.textContent = description;
        });
    };

    footer__details.addEventListener('click', e => {
        if(JSON.parse(localStorage.getItem(id)).checkout){
            e.preventDefault();
            let alert = document.getElementById('alertX');
            alert.style.display = 'flex';
            setTimeout(function() {
                alert.style.display = 'none';
            }, 2000);
        } else {
            let productLocal = JSON.parse(localStorage.getItem(id));
            productLocal["checkout"]=true;
            localStorage.setItem(id, JSON.stringify(productLocal));

            e.preventDefault();
            let alert = document.getElementById('alert');
            alert.style.display = 'flex';
            setTimeout(function() {
                alert.style.display = 'none';
            }, 2000);
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.color div');
    const sizes = document.querySelectorAll('.size .circle_size');

    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            circles.forEach(c => c.classList.remove('clicked'));
            circle.classList.add('clicked');
        });
    });

    sizes.forEach(size => {
        size.addEventListener('click', () => {
            sizes.forEach(s => s.classList.remove('clicked'));
            size.classList.add('clicked');
        });
    });
});



