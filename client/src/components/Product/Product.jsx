import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { getProduct } from '../../action/productAction';
import { size } from '../Sections/DataToFilter';
import styles from './Product.module.scss';
import { addItem } from '../../action/cartAction';
import { toast } from 'react-toastify';
import Loading from '../Layouts/Loading';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const Product = props => {
  const productId = props.match.params.productId;
  const product = useSelector(state => state.product.product);
  const dispatch = useDispatch();
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');
  console.log(selected);

  const onSelect = id => {
    setSelected(id);
  };

  const addItemToCart = (_id, title, description, price, imagePath, size) => {
    let items;
    if (selected) {
      items = {
        id: _id,
        title: title,
        description: description,
        price: price,
        imagePath: imagePath,
        quantity: 1,
        size
      };
      toast('Item successfully added', {
        position: 'top-right',
        className: `${styles.success}`
      });
      dispatch(addItem(items));
    } else {
      toast('You must select a size', {
        position: 'top-right',
        className: `${styles.error}`
      });
    }

    console.log(items);
  };

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [getProduct]);

  let sizeList;

  if (size) {
    sizeList = size.map(item => (
      <button
        className={selected === item.name ? styles.selected : styles.button}
        key={item._id}
        onClick={() => onSelect(item.name)}
      >
        <span>{item.name}</span>
      </button>
    ));
  }

  let renderCart;
  if (product) {
    renderCart = (
      <div class='row'>
        <div class='col-sm-8'>
          <div class='card'>
            <div>
              <img
                class='card-img-top'
                src={product.imagePath}
                alt='Card image cap'
              />
            </div>
          </div>
        </div>
        <div class='col-sm-4'>
          <h1 className={styles.title}>{product.title}</h1>

          <h4 className={styles.price}>€{product.price}</h4>
          <hr />
          <div>
            <h5 className='font-weight-bold'>Description</h5>
            <p className={styles.description}>{product.description}</p>
          </div>
          <hr />
          <br />
          <div className='mb-3'>{sizeList}</div>
          <button
            className={
              selected ? `${styles.shoppingbagbutton}` : `${styles.disabled}`
            }
            onClick={() =>
              addItemToCart(
                product._id,
                product.title,
                product.description,
                product.price,
                product.imagePath,
                selected
              )
            }
          >
            <span className={styles.text}>ADD TO CART</span>
          </button>
          <br />
          <hr />
          <br />
          <h5 className='font-weight-bold mb-3'>Delivery Fee</h5>

          <div
            className={styles.card}
            data-toggle='modal'
            data-target='#exampleModalCenter'
          >
            <i
              class='fas fa-truck'
              style={{
                fontSize: '30px',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
            <h4 className={styles.free}>FREE OVER €20</h4>
          </div>

          <div
            class='modal fade'
            id='exampleModalCenter'
            tabindex='-1'
            role='dialog'
            aria-labelledby='exampleModalCenterTitle'
            aria-hidden='true'
          >
            <div class='modal-dialog modal-dialog-centered' role='document'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='exampleModalCenterTitle'>
                    Delivery Fee
                  </h5>
                  <div
                    type='button'
                    class='close'
                    data-dismiss='modal'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </div>
                </div>
                <div class='modal-body'>
                  <div className='row'>
                    <div className='col-7'>
                      <div class='card' style={{ width: '15rem' }}>
                        <img
                          class='card-img-top'
                          src={product.imagePath}
                          alt='Card image cap'
                        />
                      </div>
                      <h5>{product.title}</h5>
                      <span>€ {product.price}</span>
                    </div>
                    <div className='col-5'>
                      <div>
                        <h4>Standard home</h4>
                        <p className={styles.description}>
                          3-5 working days. 1-2 additional days for islands
                          deliveries<span>€ 5.99</span>
                        </p>
                      </div>
                      <div>
                        <h4>Express home</h4>
                        <p className={styles.description}>
                          2-3 working days. 1-2 additional days for islands
                          deliveries<span>€ 10.99</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    renderCart = <Loading />;
  }

  return (
    <div data-test='Product'>
      <div class='container'>
        <p className='empty mb-2 mt-2 font-weight-bold'>
          <span onClick={() => history.goBack()}>
            <i
              class='fas fa-arrow-circle-left'
              style={{
                cursor: 'pointer',
                fontSize: '15px',
                marginRight: '10px'
              }}
              size='7x'
            />
          </span>
          BACK{' '}
        </p>
        {renderCart}
        <br />
        <br />
      </div>
      <hr />
    </div>
  );
};

export default Product;
