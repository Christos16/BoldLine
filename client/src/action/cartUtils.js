export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  console.log(cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const amount = item => {
  return item.quantity;
};

const sum = price => {
  let sum = 0;
  return (sum += price);
};

export const getTotalAmount = cartItems => {
  /* this is our initial value i.e. the starting point*/
  const initialValue = 0;
  let finalValue;
  /* numbers array */
  const numbers = cartItems.map(item => item);

  const number2 = cartItems.map(item => item.price);
  /* reducer method that takes in the accumulator and next item */
  const reducer = (accumulator, item) => {
    return accumulator + item.quantity * item.price;
  };

  /* we give the reduce method our reducer function
  and our initial value */
  const total = numbers.reduce(reducer, initialValue);

  console.log(total);
  return total;
};
