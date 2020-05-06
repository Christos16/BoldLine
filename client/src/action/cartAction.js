import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  DECREASE_QUANTITY
} from './types';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: id
});

export const increaseQuantity = id => ({
  type: ADD_QUANTITY,
  payload: id
});

export const decreaseQuantity = id => ({
  type: DECREASE_QUANTITY,
  payload: id
});
