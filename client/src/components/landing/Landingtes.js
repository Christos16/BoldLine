import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from './LandingPage';
import configureStore from 'redux-mock-store';
import * as ReactReduxHooks from '../../../utils/react-redux-hooks';
import thunk from 'redux-thunk';

/*
describe('LandingPage', () => {
  let wrapper;
  let useEffect;
  let store;
  const products = [{}];

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    mockUseEffect();

    // const props = { match: { params: { recipe_id: recipeId } } };

    store = configureStore([thunk])({
      products:
        products[
          ({
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
          })
        ],
      cart: {},
      data: {}
    });

    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation(() => store.getState());

    jest
      .spyOn(ReactReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(<LandingPage store={store} />);
  });

  describe('on start', () => {
    it(' dispatch action getProducts ', () => {
      const actions = store.getProducts();
      expect(actions).toEqual([{ type: 'GET_PRODUCTS', products: products }]);
    });
  });

  /*it("should render Ingredients component if recipe is loaded", () => {
    expect(wrapper.find(Ingredients)).toHaveLength(1);
  }); */

describe('<LandingPage />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<LandingPage />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
