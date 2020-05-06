import cartReducer from '../../reducers/cartReducer';
import {
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM, // Only ones related to the reducer being tested
  GET_PRODUCTS
} from '../../action/types';

//Setting the initial state to 0

describe('select_cardReducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      const initialState = { hidden: true, cartItems: [] };

      expect(cartReducer(undefined, action)).toEqual(initialState);
    });
  });
  /*
  describe('ADD_ITEM', () => {
    it('Should add item into cart', () => {
      const products = [
        {
          size: 1,
          price: 25,
          menCategory: 1,
          womanCategory: 1,
          _id: '12345',
          imagePath: 'http://static.zara',
          title: 'Grey Pullover',
          description: 'Grey Pullover with pockets',
          color: 'Stone',
          quantity: 2,
          department: 'Men'
        }
      ];

      const newState = cartReducer(undefined, {
        type: GET_PRODUCTS,
        payload: products
      })
      expect(newState).toEqual(products)
    });

    test('Should decrease the selected product by id from Cart', () => {
      const product = [
        {
          size: 1,
          price: 25,
          menCategory: 1,
          womanCategory: 1,
          _id: '12345',
          imagePath: 'http://static.zara',
          title: 'Grey Pullover',
          description: 'Grey Pullover with pockets',
          color: 'Stone',
          quantity: 1,
          department: 'Men'
        },
        {
          size: 1,
          price: 25,
          menCategory: 1,
          womanCategory: 1,
          _id: '12345',
          imagePath: 'http://static.zara',
          title: 'Grey Pullover',
          description: 'Grey Pullover with pockets',
          color: 'Stone',
          quantity: 0,
          department: 'Men'
        }
      ];
      const action = { type: REMOVE_ITEM, payload: [product] };
      expect(cartReducer(undefined, action)).toMatchSnapshot();
    });

    test('Should remove the selected product by id from Cart', () => {
      const product = {};
      const action = { type: CLEAR_ITEM_FROM_CART, payload: [product] };
      expect(cartReducer(undefined, action)).toMatchSnapshot();
    });
  });

 
  describe('GET_PRODUCTS', () => {
    test('returns the correct state', () => {
      const action = {
        type: GET_PRODUCTS,
        payload: [
          {
            size: 1,
            price: 25,
            menCategory: 1,
            womanCategory: 1,
            _id: '12345',
            imagePath: 'http://static.zara',
            title: 'Grey Pullover',
            description: 'Grey Pullover with pockets',
            color: 'Stone',
            quantity: 0,
            department: 'Men'
          },
          {
            size: 2,
            price: 22,
            menCategory: 2,
            womanCategory: 3,
            _id: '12345',
            imagePath: 'http://stfatic.zara',
            title: 'Grey ',
            description: ' pockets',
            color: 'red',
            quantity: 0,
            department: 'Woman'
          }
        ]
      };
      const expectedState = {
        products: [
          {
            size: 1,
            price: 25,
            menCategory: 1,
            womanCategory: 1,
            _id: '12345',
            imagePath: 'http://static.zara',
            title: 'Grey Pullover',
            description: 'Grey Pullover with pockets',
            color: 'Stone',
            quantity: 0,
            department: 'Men'
          },
          {
            size: 2,
            price: 22,
            menCategory: 2,
            womanCategory: 3,
            _id: '12345',
            imagePath: 'http://stfatic.zara',
            title: 'Grey ',
            description: ' pockets',
            color: 'red',
            quantity: 0,
            department: 'Woman'
          }
        ]
      };
      expect(selectReducer(undefined, action)).toEqual(expectedState);
    });
   
  });
  */
});
