import React from 'react';
import svg from '../../assets/crown.svg';
import './Navbar.scss';
import { useSelector } from 'react-redux';
import './Navbar.scss';
const Navbar = () => {
  const hidden = useSelector(state => state.cart.hidden);
  const cartCount = useSelector(state => state.cart.cartItems);

  return (
    <div class='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
      <h5 class='my-0 mr-md-auto font-weight-normal'>
        {' '}
        <a class='navbar-brand' href='/'>
          {' '}
          BOLD-CLOTHING <img src={svg} height='30' width='30' />
        </a>
      </h5>
      <nav class='my-2 my-md-0 mr-md-3'>
        <a class='p-2 text-dark' href='/shop/women'>
          Women
        </a>
        <a class='p-2 text-dark' href='/shop/men'>
          Men
        </a>
        <a class='p-2 text-dark' href='/privacy-policy'>
          Privacy Policy
        </a>
      </nav>
      <a class='nav-link' href='/checkout' style={{ fontSize: '20px' }}>
        <i class='fas fa-shopping-bag'></i>
        <span class='badge badge-danger badge-counter'>{cartCount.length}</span>
      </a>
    </div>
  );
};

export default Navbar;
