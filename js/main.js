import { menuListCategoryIndex } from "./components/menu.js";
import { galleryIndex } from "./components/gallery.js";
import { getAllProductName, getAllCategory } from "./module/app.js";
import { getAllClothesUnder10 } from "./module/app.js";

let input__search = document.querySelector("#input__search");
let main__article = document.querySelector(".main__article");
let nav__ul = document.querySelector(".nav__ul");
let quantityProductsCheck = document.querySelector("#quantityProductsCheck");


addEventListener("DOMContentLoaded", async e=>{
    let asd = new URLSearchParams(location.search);
    if (!asd.has('id')) {
        asd.set("id", "aps");
        let newUrl = location.origin + location.pathname + "?" + asd.toString();
        window.location.href = newUrl;
    }
    if(!localStorage.getItem("getAllCategory")) localStorage.setItem("getAllCategory", JSON.stringify(await getAllCategory()));
    nav__ul.innerHTML = await menuListCategoryIndex(JSON.parse(localStorage.getItem("getAllCategory")));
    let params = new URLSearchParams(location.search);
    let idCategory = params.get('id');
    let res = await getAllClothesUnder10();
    main__article.innerHTML = galleryIndex(res, idCategory);

    let keys = Object.keys(localStorage);
    let productsAdded = 0;
    keys.forEach(key => {
        if(JSON.parse(localStorage.getItem(key)).checkout) productsAdded -=-1;
    })
    quantityProductsCheck.textContent = productsAdded;
})

input__search.addEventListener("change", async e => {
    let params = new URLSearchParams(location.search);
    let data = { search : e.target.value, id: params.get('id')};
    input__search.value = null;
    let res = await getAllProductName(data);
    main__article.innerHTML = galleryIndex(res, params.get('id'));
});