import selectReducer from '../../reducers/productReducer';
import {
  GET_PRODUCTS,
  GET_PRODUCT // Only ones related to the reducer being tested
} from '../../action/types';

//Setting the initial state to 0

describe('select_reducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      const initialState = { products: [], NumberOfProducts: '', product: {} };

      expect(selectReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('GET_POSTS', () => {
    it('Should return correct state from api', () => {
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
      ];

      const action = { type: GET_PRODUCTS, payload: products };
      expect(selectReducer(undefined, action)).toMatchSnapshot();
    });

    test('Should render the selected product by id', () => {
      const product = {
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
      };
      const action = { type: GET_PRODUCT, payload: product };
      expect(selectReducer(undefined, action)).toMatchSnapshot();
    });
  });

  /*
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
