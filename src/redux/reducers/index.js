import { combineReducers } from "redux";

import categoryListReducer from './categoryListReducer'
import changeCategoryReducer from './changeCategoryReducer';
import productListReducer from "./productListReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer
})

export default rootReducer
