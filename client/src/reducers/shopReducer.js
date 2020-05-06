import SHOP_DATA from './shopData';

const INITIAL_STATE = {
  sections: [
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/women'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/men'
    },
    {
      title: 'Mix',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 1,
      linkUrl: 'shop/mix'
    }
  ]
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
