import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../../../../utils/utils';
import Product from '../../../components/Sections/Product';

const enzymeWrapper = shallow(<Product />);

describe('Should render the component <Product /> without error', () => {
  test('should render a div tag with [data-test] of Product', () => {
    const component = findByTestAttr(enzymeWrapper, 'Product');
    expect(component.length).toBe(1);
  });
});
