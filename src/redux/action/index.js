// For Add Item to Cart

export const addCart = (product) => {
    return{
        type : "ADDCART",
        payload : product
    }
}


// For Delete Item from Cart

export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}