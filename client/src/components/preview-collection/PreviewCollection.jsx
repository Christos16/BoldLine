import React from 'react';
import Category from './Front';
import { withRouter } from 'react-router-dom';
import styles from './preview-collection.module.scss';
import Front from './Front';

const PreviewCollection = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match
}) => {
  return (
    <div className='container'>
      <Front />
      <br />
      <br />
      <div className='row'>
        <div className='col-sm-6'>
          <div className={styles.card}>
            <div className='card'>
              <div className={styles.opacity}>
                <img
                  className={styles.image}
                  src='https://i.ibb.co/GCCdy8t/womens.png'
                  alt='reduit'
                />
                <div className={styles.box}>
                  <a className='nav-link' href='/shop/women'>
                    <button type='button' className={styles.round}>
                      <span className={styles.text}>WOMEN</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-6'>
          <div className={styles.mencart}>
            <div className='card'>
              <div className={styles.opacity}>
                <img
                  className={styles.image}
                  src='https://i.ibb.co/R70vBrQ/men.png'
                  alt='reduit'
                />
                <div className={styles.box}>
                  <a className='nav-link' href='/shop/men'>
                    <button type='button' className={styles.round}>
                      <span className={styles.text}>MENS</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PreviewCollection);
