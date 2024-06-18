import { getAllItemsToBuy } from "./module/checkout.js";
import { productsCheckout } from "./components/cart.js";

let checkout__details = document.querySelector(".checkout__details");

addEventListener("DOMContentLoaded", async e => {
    let res = await getAllItemsToBuy();
    checkout__details.innerHTML = await productsCheckout(res);
})

