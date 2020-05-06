import axios from 'axios';

import { GET_PRODUCTS, GET_PRODUCT, GET_CATEGORY } from './types';

export const getProducts = (variables, category) => async dispatch => {
  await axios
    .post(`/api/product/getProducts?department=${category}`, variables)
    .then(res => dispatch({ type: GET_PRODUCTS, payload: res.data }))
    .catch(err => console.log(err));
};

export const getProduct = productId => async dispatch => {
  await axios
    .get(`/api/product/products_by_id?id=${productId}&type=single`)
    .then(res => {
      dispatch({ type: GET_PRODUCT, payload: res.data[0] });
    })
    .catch(err => console.log(err));
};

export const getCategory = productId => dispatch => {
  axios
    .get(`/api/product/products_by_category?category=${productId}`)
    .then(res => {
      dispatch({ type: GET_CATEGORY, payload: res.data[0] });
    })
    .catch(err => console.log(err));
};
