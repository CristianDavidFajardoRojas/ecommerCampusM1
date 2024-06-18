export const productsCheckout = async res => {
    let plantilla = "";

    res.forEach(dict => {
        console.log(dict.checkout)
        if(dict.checkout){
            let {data} = dict
            plantilla += /*html*/`
            <article class="details__product">
            <div class="product__imagen">
                <img src="${data.product_photo}">
            </div>
            <div class="product__description">
                <h3>${(data.product_title).slice(0, 15)}...</h3>
                <small>${data.product_star_rating == null ? 0 : data.product_star_rating}⭐</small>
                <span>${data.product_price}</span>
            </div>
            <div class="product__custom">
                <img src="../storage/img/option.svg">
                <div class="product__select">
                    <img id="minusCheck"src="../storage/img/minusCheckout (1).svg">
                    <span id="spanCheck">1</span>
                    <img id="plusCheck" src="../storage/img/plusCheckout.svg">
                </div>
            </div>
        </article>`;
        }
    });
    return plantilla;
};