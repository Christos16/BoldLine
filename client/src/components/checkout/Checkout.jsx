import React from 'react';
import CheckoutItem from '../checkout-item/CheckoutItem';
import styles from './checkout.module.scss';

const CheckoutPage = () => {
  return (
    <div className={styles.checkoutpage}>
      <div className={styles.checkoutheader}>
        <div className={styles.headerblock}>
          <span></span>
        </div>
        <div className={styles.headerblock}>
          <span>Product</span>
        </div>
        <div className={styles.headerblock}>
          <span>Description</span>
        </div>
        <div className={styles.headerblock}>
          <span>Quantity</span>
        </div>
        <div className={styles.headerblock}>
          <span>Price</span>
        </div>
        <div className={styles.headerblock}>
          <span>Remove</span>
        </div>
      </div>

      <di className={styles.total}>
        <span>TOTAL: $total</span>
      </di>
    </div>
  );
};

export default CheckoutPage;
