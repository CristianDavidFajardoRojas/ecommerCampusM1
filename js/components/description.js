export const descriptionDetails = async({data: dataUpdate} = res) => {
    if(dataUpdate.product_description !== null){

        let createDescriptionHTML = async() => {
            let description = await dataUpdate.product_description;
            let truncatedDescription = description;
            
            if (description.length > 150) {
                truncatedDescription = description.substring(0, 150) + '... <strong id = "leerMasOption"> Leer más.</strong>';
            }
            return `${truncatedDescription}`;
        }
        
        return /*html*/`
        <article class="product__information">
        <p id = "informationProduct">${await createDescriptionHTML()}</p>
        </article>
        `
    }else return "\n\n*No Description*"
};