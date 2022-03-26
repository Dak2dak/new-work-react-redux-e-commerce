import { ADD_PRODUCT, GET_PRODUCT } from "../actions/types";

const initialState = {
  products: [],
  cart: [],
};

export function products(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart,
          state.products.find((product) => product.id === payload),
        ],
      };
    default:
      return state;
  }
}
