// import all the reducers here one-by-one.
import { productReducer, selectedProductReducer } from "./productReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    // the list of reducers...
    allProducts: productReducer,
    product: selectedProductReducer,
});

export default allReducers;