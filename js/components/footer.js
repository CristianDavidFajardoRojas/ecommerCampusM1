export const footer_price = async ({ data:dataUpdate } = res) => {
    let product_original_price = dataUpdate.product_original_price;
    let product_price = dataUpdate.product_price;
    
    if(dataUpdate.product_original_price == null){
        return /*html*/`
    <ul class="footer__ul">
            <li>
                <a href="checkout.html">
                    <img src="../storage/img/shopping-cart.svg">
                    <span>Agregar al carrito | <span id='price_discount'>${product_price}</span>$</span>
                </a>
            </li>
        </ul>`
    };

    return /*html*/`
    <ul class="footer__ul">
            <li>
                <a href="checkout.html">
                    <img src="../storage/img/shopping-cart.svg">
                    <span>Agregar al carrito | <span id='price_discount'>${product_price}</span> <del id='price_original'>${product_original_price}$</del></span>
                </a>
            </li>
        </ul>`
};