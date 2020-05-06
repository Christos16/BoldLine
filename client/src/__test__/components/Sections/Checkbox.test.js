import React from 'react';
import Checkbox from '../../../components/Sections/Checkbox';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../../../../utils/utils';

const enzymeWrapper = shallow(<Checkbox />);

describe('Should render the component <Checkbox /> without error', () => {
  test('should render a div tag with [data-test] of checkbox', () => {
    const component = findByTestAttr(enzymeWrapper, 'checkbox');
    expect(component.length).toBe(1);
  });
});
