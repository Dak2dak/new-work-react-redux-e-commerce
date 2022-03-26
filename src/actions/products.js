import axios from "axios";
import { ADD_PRODUCT, GET_PRODUCT } from "./types";

export const getProducts = () => (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res)
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log("Err", error);
    });
};

export const addProduct = (id) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: id,
  });
};
