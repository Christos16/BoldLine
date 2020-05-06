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
const mockStore = configureStore();
const store = mockStore();
configure({ adapter: new Adapter() });

describe('MenCategory', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      dispatch: jest.fn(),
      useSelector: jest.fn()
    };
    const wrapper = shallow(
      <Provider>
        <MenCategory {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
