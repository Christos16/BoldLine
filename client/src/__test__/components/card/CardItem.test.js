import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr, testStore } from '../../../../utils/utils';
import MenCategory from '../../../components/landing/MenCategory';
import { Provider } from 'react-redux';
import * as ReactReduxHooks from '../../../../utils/react-redux-hooks';
import * as selectActions from '../../../action/productAction';
import toJson from 'enzyme-to-json';
import { Card } from '../../../components';
const mockStore = configureStore();

const store = mockStore();
configure({ adapter: new Adapter() });

describe('RecipeList', () => {
  let wrapper;
  let useEffect;
  let store;

  beforeEach(() => {
    store = configureStore()({
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
          department: 'Men'
        }
      ]
    });

    const props = {
      product: {
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
    };
    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation(state => store.getState());

    jest
      .spyOn(ReactReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(<Card store={store} {...props} />);
  });

  describe('MenCategory', () => {
    it('renders without crashing given the required props', () => {
      const props = {
        dispatch: jest.fn(),
        product: {
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
        dispatch: jest.fn()
      };
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
