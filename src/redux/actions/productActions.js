import * as actionTypes from './actionTypes';

export function getProductsSuccess(products){
    return {type:actionTypes.GET_PRODUCTS_SUCCESS,payload : products}
}

export function getProducts(categoryId = null) {
    return function(dispatch) {
        let url = "http://localhost:3001/products";
        if(categoryId){
            url += "?categoryId="+categoryId
        }
        return fetch(url)
                .then(response => response.json())
                .then(result => dispatch(getProductsSuccess(result)));
    }
} 