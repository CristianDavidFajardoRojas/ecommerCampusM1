export const footer_price = async ({ data:dataUpdate } = res) => {
    if(dataUpdate.product_original_price == null){
        return /*html*/`
    <ul class="footer__ul">
            <li>
                <a href="checkout.html">
                    <img src="../storage/img/shopping-cart.svg">
                    <span>Agregar al carrito | ${dataUpdate.product_price}$</span>
                </a>
            </li>
        </ul>`
    };

    return /*html*/`
    <ul class="footer__ul">
            <li>
                <a href="checkout.html">
                    <img src="../storage/img/shopping-cart.svg">
                    <span>Agregar al carrito | ${dataUpdate.product_price}$ <del>${dataUpdate.product_original_price}$</del></span>
                </a>
            </li>
        </ul>`
};