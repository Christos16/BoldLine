import React from 'react';
import styles from './CartItem.module.scss';

const CartItem = ({
  item: { imagePath, quantity, title, price, description }
}) => (
  <div className={styles.cartitem}>
    <img src={imagePath} alt='item' />
    <div className={styles.itemdetails}>
      <span className={styles.name}>{title}</span>
      <span className={styles.price}>
        {' '}
        {quantity} x €{price}
      </span>
    </div>
  </div>
);

export default CartItem;
