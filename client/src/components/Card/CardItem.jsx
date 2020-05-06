import React from 'react';
import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { addItem } from '../../action/cartAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = props => {
  const dispatch = useDispatch();

  const addItemToCart = (_id, title, description, price, imagePath) => {
    const items = {
      id: _id,
      title: title,
      description: description,
      price: price,
      imagePath: imagePath,
      quantity: 1
    };
    toast('Item added to basket');
    dispatch(addItem(items));

    console.log(items);
  };
  return (
    <div className={styles.nav} data-test='Card'>
      <a href={`/product/${props.product._id}`} className={styles.nav}>
        <div
          className='card'
          style={{ width: '15rem', marginBottom: '10px', marginRight: '10px' }}
        >
          <div className={styles.opacity}>
            <img
              className={styles.image}
              src={props.product.imagePath}
              alt='reduit'
            />
            <div className={styles.box}>
              <button
                type='button'
                className={styles.round}
                onClick={() =>
                  addItemToCart(
                    props.product._id,
                    props.product.title,
                    props.product.description,
                    props.product.price,
                    props.product.imagePath
                  )
                }
              >
                <span className={styles.text}>ADD TO CART</span>
              </button>
            </div>
            <div className={styles.body}>
              <h4 className={styles.title}>{props.product.title}</h4>
              <h5 className={styles.title}>€{props.product.price}</h5>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
