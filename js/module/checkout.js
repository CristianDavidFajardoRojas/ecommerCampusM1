export const getAllItemsToBuy = async () => {
    let products = [];
    Object.keys(localStorage).forEach(keys => {
        products.push(JSON.parse(localStorage.getItem(keys)));
    });
    return products;
};
