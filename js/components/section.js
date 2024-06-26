export const titleProductDetail = async({ data:dataUpdate } = res)=>{
    if(!dataUpdate.product_star_rating){
        return /*html*/`
            <article class="article__detail">
                <div class="detail__head">
                    <h1>${dataUpdate.product_title}</h1>
                    <div class="product__select">
                        <img src="../storage/img/minus.svg" id = "decreaseQuantity">
                        <span id = "quantity">1</span>
                        <img src="../storage/img/plus.svg" id = "increaseQuantity">
                    </div>
                </div>
                <div class="detail__score">
                    <span>* Sin Ratings *</span>
                    <a href="${dataUpdate.product_url}">(${dataUpdate.product_num_ratings} reviews)</a>
                </div>
            </article>`;
    } else {return  /*html*/`
    <article class="article__detail">
        <div class="detail__head">
            <h1>${dataUpdate.product_title}</h1>
            <div class="product__select">
                <img src="../storage/img/minus.svg" id = "decreaseQuantity">
                <span id = "quantity">1</span>
                <img src="../storage/img/plus.svg" id = "increaseQuantity">
            </div>
        </div>
        <div class="detail__score">
            ${new Array(parseInt(dataUpdate.product_star_rating)).fill(`<img src="../storage/img/star.svg">`).join('')}
            <span>${dataUpdate.product_star_rating}</span>
            <a href="${dataUpdate.product_url}">(${dataUpdate.product_num_ratings} reviews)</a>
        </div>
    </article>`;}
}