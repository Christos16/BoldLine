import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../action/cartAction';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

const CartIcon = () => {
  const dispatch = useDispatch();

  const toggleHandle = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className={styles.carticon} onClick={toggleHandle}>
      <ShoppingIcon className={styles.shoppingicon} />
      <span className={styles.itemcount}>5</span>
    </div>
  );
};
export default CartIcon;
