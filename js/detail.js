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
    let quantity = parseInt(quantitySpan.textContent);
    if(quantity > 1){
        quantitySpan.textContent = quantity - 1;
    };
    });
    
    increaseButton.addEventListener('click', async e => {
    let quantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = quantity + 1;
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
        let productLocal = JSON.parse(localStorage.getItem(id));
        productLocal["checkout"]=true;
        productLocal[""]
        localStorage.setItem(id, JSON.stringify(productLocal));
        console.log(localStorage.getItem(id));
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



