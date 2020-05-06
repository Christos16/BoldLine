import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getProducts, getProduct } from '../../action/productAction';
import { GET_PRODUCTS, GET_PRODUCT } from '../../action/types';
import sinon from 'sinon';
import { equal } from 'assert';
import axios from 'axios';

const mockStore = configureMockStore([thunk]);

describe('fetch list of all products', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('getting access token', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
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
            department: 'Men'
          }
        ]
      });
    });

    const res = [
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
        department: 'Men'
      }
    ];

    const expectedActions = [
      {
        type: GET_PRODUCTS,
        payload: res
      }
    ];

    const store = mockStore({});

    return store.dispatch(getProducts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('fetch list of single product by id', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should fetch single Object', function(done) {
    moxios.withMock(function() {
      let onFulfilled = sinon.spy();
      axios
        .get(
          '/api/product/products_by_id?id=5e96ec7a001170fddc4badfc&type=single'
        )
        .then(onFulfilled);

      moxios.wait(function() {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: {
              size: 1,
              price: 25,
              menCategory: 1,
              womanCategory: 1,
              _id: '5e96ec7a001170fddc4badfc',
              imagePath: 'http://static.zara',
              title: 'Grey Pullover',
              description: 'Grey Pullover with pockets',
              color: 'Stone',
              quantity: 0,
              department: 'Men'
            }
          })
          .then(function() {
            equal(onFulfilled.called, true);
            done();
          });
      });
    });
  });
});
