import axios from "axios";
import { ADD_PRODUCT, GET_PRODUCT, GET_SINGLE_PRODUCT } from "./types";

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

export const getSingleProduct = (id) => (dispatch) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      dispatch({
        type: GET_SINGLE_PRODUCT,
        payload: id,
      });
    })
    .catch((error) => {
      console.log("Err", error);
    });
};