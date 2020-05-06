import { GET_PRODUCTS, GET_PRODUCT } from '../action/types';

const initialState = {
  products: [],
  product: {},
  NumberOfProducts: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        NumberOfProducts: action.payload.postSize
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
}
