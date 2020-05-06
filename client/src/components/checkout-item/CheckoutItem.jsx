import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './Checkout.module.scss';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../action/cartAction';
import { getTotalAmount, removeItemFromCart } from '../../action/cartUtils';

import Paypal from '../Layouts/Paypal';
import FormInput from '../form-inputs/FormInput';

const CheckoutItem = () => {
  const cartItem = useSelector(state => state.cart.cartItems);
  let history = useHistory();
  const dispatch = useDispatch();
  const [showTotal, setShowTotal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const removeFromCart = id => {
    dispatch(clearItemFromCart(id));
  };

  let cart;

  let total = getTotalAmount(cartItem);

  total = Math.max(Math.round(total * 10) / 10).toFixed(2);

  const transactionSuccess = () => {
    console.log('Transaction succeed');
  };
  const transactionError = () => {
    console.log('Paypal error');
  };

  const transactionCanceled = () => {
    console.log('Transaction canceled');
  };

  if (cartItem.length > 0) {
    cart = cartItem.map(item => (
      <tr key={item.id}>
        <td>
          <img
            className={styles.responsiveImage}
            src={item.imagePath}
            alt='item'
            heigh='150'
            width='150'
          />
        </td>
        <td className={styles.empty}>{item.title}</td>
        <td className={styles.empty}>{item.size}</td>
        <td>
          <span className={styles.quantity}>
            <span
              onClick={() => dispatch(removeItem(item))}
              className={styles.arrow}
            >
              &#10094;
            </span>

            <span className={styles.value}>{item.quantity}</span>
            <span
              onClick={() => dispatch(addItem(item))}
              className={styles.arrow}
            >
              &#10095;
            </span>
          </span>
        </td>
        <td className={styles.price}>{item.price} €</td>
        <td>
          <span
            className={styles.cursor}
            onClick={() => dispatch(clearItemFromCart(item.id))}
          >
            <i
              class='fas fa-times'
              style={{ fontSize: '24px' }}
              color='red'
            ></i>
          </span>
        </td>
      </tr>
    ));
  } else {
    cart = (
      <div>
        <br />
        <br />
        <h3 className={styles.empty}>No Items In the Cart</h3>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-8'>
          <h2 className={`${styles.empty} mb-4 mt-4 font-weight-bold`}>
            <span onClick={() => history.goBack()}>
              <i
                className={`${styles.icon} fas fa-arrow-circle-left`}
                size='7x'
              />
            </span>
            SHOPPING CART{' '}
          </h2>

          <table class='table table-responsive'>
            <thead>
              <tr className={styles.table}>
                <th scope='col'>Product</th>
                <th scope='col'>Description</th>
                <th scope='col'>Size</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Price</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>{cart}</tbody>
          </table>
        </div>
        <div className='col-sm-4'>
          <div className={styles.position}>
            <div className='container'>
              <FormInput />
              <form class='card p-2 mb-2'>
                <div class='input-group'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Promo code'
                  />
                  <div class='input-group-append'>
                    <button type='submit' class='btn btn-secondary'>
                      Redeem
                    </button>
                  </div>
                </div>
              </form>
              <ul class='list-group mb-3'>
                <li class='list-group-item d-flex justify-content-between bg-light'>
                  <div class='text-success'>
                    <h6 class='my-0'>Promo code</h6>
                    <small>BOLDATHENS1</small>
                  </div>
                  <span class='text-success'>-$0</span>
                </li>
                <li class='list-group-item d-flex justify-content-between'>
                  <span>Total (EUR)</span>
                  <strong>€{total}</strong>
                </li>
              </ul>
              {/* Paypal checkout*/}
              <Paypal
                toPay={total}
                onSuccess={transactionSuccess}
                transactionError={transactionError}
                transactionCanceled={transactionCanceled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
